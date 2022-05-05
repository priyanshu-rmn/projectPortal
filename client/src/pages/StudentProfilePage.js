import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import StudentProfilePageForm from "../components/students/StudentProfilePageForm";

function StudentProfilePage() {
  const userObject = useContext(UserContext);
  console.log(userObject);

  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/s/${userObject._id}/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setStudentData(res.data);
      });
  },[userObject]);

  function updateStudentHandler(newStudentData) {
    console.log("going", newStudentData);
    axios({
      method: "post",
      url: `http://localhost:8000/s/${userObject._id}/profile`,
      withCredentials: true,
      data: { ...newStudentData },
    }).then((res) => {
      console.log(res);
      setStudentData(newStudentData);
    });
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Welcome {userObject.username}</h2>

      <StudentProfilePageForm
        user={studentData}
        onUpdateStudent={updateStudentHandler}
      />
    </>
  );
}

export default StudentProfilePage;
