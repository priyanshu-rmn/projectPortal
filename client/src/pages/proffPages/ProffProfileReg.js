import axios from "axios";
import ProffProfileRegForm from "../../components/proffs/ProffProfileRegForm";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


function ProffProfileReg() {
  const userObject = useContext(UserContext);
  console.log(userObject);

  function addProffHandler(ProffData) {
    axios({
      method: "post",
      url: `http://localhost:8000/profileReg`,
      data: {...ProffData},
      withCredentials: true,
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <>
  
      <h2 style={{textAlign:"center"}}>Profile Registration</h2>
   
      <ProffProfileRegForm
        user={userObject}
        onAddProff={addProffHandler}
      />
    </>
  );
}

export default ProffProfileReg;
