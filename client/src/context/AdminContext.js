import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AdminContext = createContext({});

function AdminContextProvider(props) {
  const [adminObject, setAdminObject] = useState({});
  useEffect(() => {
    axios
    .get("http://localhost:8000/a/dashboard", { withCredentials: true })
    .then((res) => {
        if (res.data) {
          console.log(res);
          
          //processStage = 0 : only admin can open the portal and others will get the message "Allocation not yet started"
          //processStage = 1 : students open the portal and start setting their preferences or can lock them, proffs can open the portal but cant do anything, admin can only open and edit the form inputs
          //processStage = 2 : students can only open the portal, proffs can select or deselct students ,  admin can only open and edit the form inputs
          // processStage = 3 : students can see allocated proff, proff can see selected Students , admin can now click on random allocation for rest students
          
          let processStage = 0;
          if (res.data.startAllocationTime) {
            if (
              Date.now() <
              res.data.startAllocationTime +
              res.data.choiceFillingHours * 60 * 60 * 1000
              ) {
                processStage = 1;
              } else if (
                Date.now() <
                res.data.startAllocationTime +
                (res.data.choiceFillingHours + res.data.proffSelectionHours) *
                  60 *
                  60 *
                  1000
            ) {
              processStage = 2;
            } else {
              processStage = 3;
            }
          }
          
          setAdminObject({ ...res.data, processStage: processStage });
        }
      });
    }, []);
    console.log("adminObject",adminObject );
  return (
    <AdminContext.Provider value={adminObject}>
      {props.children}
    </AdminContext.Provider>
  );
}
export default AdminContextProvider;
