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
  if (!Object.keys(userObject).length) {
    return (
      <>
        <div>Not Logged In</div>
        <Link to="/login">Login</Link>
      </>
    );
  }

  function addStudentHandler(studentData) {
    axios.post(API_URL + "profileReg", studentData).then((data) => {
      console.log()
    });
  }

  return (
    <>
      <h1>Profile Registration</h1>
      <StudentProfileRegForm
        user={userObject}
        onAddStudent={addStudentHandler}
      />
    </>
  );
}

export default StudentProfileReg;
