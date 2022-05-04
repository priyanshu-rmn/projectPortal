import axios from "axios";
import StudentProfileRegForm from "../components/StudentProfileRegForm";
// import './StudentProfileReg.css';
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:8000/";


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
