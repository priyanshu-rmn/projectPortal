import AvailableProffCard from "../../components/students/AvailableProffCard";
import AppliedProffCard from "../../components/students/AppliedProffCard";
import AppliedProffCardLocked from "../../components/students/AppliedProffCardLocked ";
import "./StudentDashboard.css";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

function StudentDashboard() {
  const [isLocked, setIsLocked] = useState(true);
  const [state, updateState] = useState({
    availableProffs: [],
    appliedProffs: [],
  });
  let proff1 = state.availableProffs;
  let proff2 = state.appliedProffs;

  const userObject = useContext(UserContext);

  useEffect(() => {
    console.log(userObject);
    axios
      .get(`http://localhost:8000/s/${userObject._id}/dashboard`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("got it");
        console.log(res.data);
        proff1 = res.data.availableProffs;
        proff2 = res.data.appliedProffs;
        setIsLocked(res.data.studentData.isLocked);
        updateState({ availableProffs: proff1, appliedProffs: proff2 });
      });
  }, [userObject]);

  function addProffs(p) {
    console.log(`clicked ${p.fName}`);
    let index = proff1.indexOf(p);
    proff2.push(p);
    proff1.splice(index, 1);
    updateState({ availableProffs: proff1, appliedProffs: proff2 });
  }

  function removeProffs(p) {
    console.log(`clicked ${p.fName}`);
    let index = proff2.indexOf(p);
    proff1.push(p);
    proff2.splice(index, 1);
    updateState({ availableProffs: proff1, appliedProffs: proff2 });
  }

  function upvoteProff(p) {
    console.log(`clicked ${p.fName}`);
    let index = proff2.indexOf(p);
    if (index > 0) {
      [proff2[index - 1], proff2[index]] = [proff2[index], proff2[index - 1]];
    }
    updateState({ availableProffs: proff1, appliedProffs: proff2 });
  }

  let AvailableProffListJSX = [];
  for (let p1 of proff1) {
    AvailableProffListJSX.push(
      <AvailableProffCard key={p1._id} proffData={p1} func={addProffs} />
    );
  }

  let AppliedProffListJSX = [];
  let i = 1;
  for (let p2 of proff2) {
    AppliedProffListJSX.push(
      <AppliedProffCard
        key={p2._id}
        proffData={p2}
        slNo={i++}
        func={removeProffs}
        func2={upvoteProff}
      />
    );
  }

  console.log("list1", proff1);
  console.log("list2", proff2);

  function saveAppliedProffHandler() {
    axios({
      method: "post",
      url: `http://localhost:8000/s/${userObject._id}/dashboard`,
      data: {
        newAppliedProff: proff2,
      },
      withCredentials: true,
    }).then((res) => {
      console.log(res);
    });
  }

  function lockAppliedProffHandler() {
    axios({
      method: "post",
      url: `http://localhost:8000/s/${userObject._id}/lock`,
      data: {},
      withCredentials: true,
    }).then((res) => {
      console.log(res);
    });
    setIsLocked(true);
  }
  let j = 1;
  return (
    <>
      <div>
        <div className="card-groupp">
          {isLocked && (
            <div>
              <h4>Final Applied Proffs</h4>
              {proff2.map((p2) => (
                <AppliedProffCardLocked
                  key={p2._id}
                  proffData={p2}
                  slNo={j++}
                />
              ))}
            </div>
          )}
          {!isLocked && (
            <>
              <div className="card out">
                <h4>Available Proffs</h4>
                {AvailableProffListJSX}
              </div>
              <div className="card out">
                <h4>Applied Proffs</h4>
                {AppliedProffListJSX}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="bbutton">
      {!isLocked && (
        <>

          <div >
            <button onClick={saveAppliedProffHandler }  class="btn btn-success"  >SAVE</button>
          </div>

          <div >
            <button onClick={lockAppliedProffHandler} class="btn btn-danger">LOCK</button>
          </div>
        </>
      )}
      </div>
    </>
  );
}

export default StudentDashboard;