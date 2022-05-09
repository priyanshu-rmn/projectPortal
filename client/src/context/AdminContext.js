import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AdminContext = createContext({});

function AdminContextProvider(props) {
  const [adminObject, setAdminObject] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/a/dashboard", { withCredentials: true })
      .then((res) => {
        console.log(res);
        setAdminObject(res.data);
      });
  }, []);
  const context = {
    ...adminObject,
    setAdminObject: setAdminObject,
  };
  console.log("context", context);

  return (
    <AdminContext.Provider value={context}>
      {props.children}
    </AdminContext.Provider>
  );
}
export default AdminContextProvider;
