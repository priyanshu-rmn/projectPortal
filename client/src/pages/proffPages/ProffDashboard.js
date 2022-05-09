import "./ProffDashboard.css";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { AdminContext } from "../../context/AdminContext";
import axios from "axios";
import LeftStudentRequests from "../../components/proffs/LeftStudentRequestsCard";
import TempSavedStudents from "../../components/proffs/TempSavedStudentsCard";
import { useNavigate } from "react-router-dom";
import Timer from "../../components/layout/Timer";

function ProffDashboard() {
  const navigate = useNavigate();

  const [state, updateState] = useState({
    leftStudentRequests: [],
    tempSavedStudents: [],
  });
  let stud1 = state.leftStudentRequests;
  let stud2 = state.tempSavedStudents;

  const userObject = useContext(UserContext);

  const adminObject = useContext(AdminContext);
  const processStage = adminObject.processStage;
  const expiryTimestamp = new Date(
    adminObject.startAllocationTime +
      (adminObject.choiceFillingHours +
        adminObject.proffSelectionHours) *
        60 *
        60 *
        1000
  );
  console.log("expiryTimestampProff", expiryTimestamp);

  useEffect(() => {
    console.log(userObject);
    axios
      .get(`http://localhost:8000/p/${userObject._id}/dashboard`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("got it");
        console.log(res.data);
        stud1 = res.data.leftStudentRequests;
        stud2 = res.data.tempSavedStudents;
        updateState({ leftStudentRequests: stud1, tempSavedStudents: stud2 });
      });
  }, [userObject]);

  function selectStudent(s) {
    console.log(`clicked ${s.fName}`);
    let index = stud1.indexOf(s);
    stud2.push(s);
    stud1.splice(index, 1);
    updateState({ leftStudentRequests: stud1, tempSavedStudents: stud2 });
  }

  function removeStudent(s) {
    console.log(`clicked ${s.fName}`);
    let index = stud2.indexOf(s);
    stud1.push(s);
    stud2.splice(index, 1);
    updateState({ leftStudentRequests: stud1, tempSavedStudents: stud2 });
  }

  let LeftStudentRequestsJSX = [];
  for (let s1 of stud1) {
    LeftStudentRequestsJSX.push(
      <LeftStudentRequests
        key={s1._id}
        studentDetails={s1}
        func={selectStudent}
      />
    );
  }

  let TempSavedStudentsJSX = [];
  for (let s2 of stud2) {
    TempSavedStudentsJSX.push(
      <TempSavedStudents
        key={s2._id}
        studentDetails={s2}
        func={removeStudent}
      />
    );
  }

  console.log("list1", stud1);
  console.log("list2", stud2);

  function saveTempStudentsHandler() {
    axios({
      method: "post",
      url: `http://localhost:8000/p/${userObject._id}/dashboard`,
      data: {
        newTempStudents: stud2,
      },
      withCredentials: true,
    }).then((res) => {
      console.log(res);
    });
  }


  function expireHandler() {
    console.log("exp");
    axios({
      method: "post",
      url: `http://localhost:8000/a/updateProcessStage`,
      data: { ps: 3 },
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      adminObject.setAdminObject(res.data);
    });
    window.location.reload();
  }


  if (processStage === 2) {
    return (
      <>
        <Timer expiryTimestamp={expiryTimestamp} onTimerExpire={expireHandler} />
        {/* <button onClick={expireHandler}>Expire Handler</button> */}
        {" "}
        <div>
          <div className="card-group">
            <div className="card out">
              <h4>Left Student Requests</h4>
              {LeftStudentRequestsJSX}
            </div>
            <div className="card out">
              <h4>Temporary Saved Students</h4>
              {TempSavedStudentsJSX}
            </div>
          </div>
          <div>
            <button onClick={saveTempStudentsHandler} class="btn btn-success">
              SAVE
            </button>
          </div>
        </div>
      </>
    );
  } else if (processStage === 0) {
    return <>PROCESS NOT STARTED...</>;
  } else if (processStage === 1) {
    return <>STUDENTS FILLING CHOICES...</>;
  } else {
    navigate("/p/selectedStudents");
  }
}

export default ProffDashboard;
