import axios from "axios";
import StudentProfileRegForm from "../../components/students/StudentProfileRegForm";
import { useContext } from "react";
import { UserContext } from "../../UserContext";


function StudentProfileReg() {
  const userObject = useContext(UserContext);
  console.log(userObject);

  function addStudentHandler(studentData) {
    axios({
      method: "post",
      url: `http://localhost:8000/profileReg`,
      data: {...studentData},
      withCredentials: true,
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <>
  
      <h2 style={{textAlign:"center"}}>Profile Registration</h2>
   
      <StudentProfileRegForm
        user={userObject}
        onAddStudent={addStudentHandler}
      />
    </>
  );
}

export default StudentProfileReg;
