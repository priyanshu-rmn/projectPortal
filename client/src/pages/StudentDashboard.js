import AvailableProffCard from "../components/AvailableProffCard";
import AppliedProffCard from "../components/AppliedProffCard";
import "./StudentDashboard.css";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import axios from "axios"
let proff1 = ["AKT", "RNC", "KKS", "BB"]; //proff1 - available proff
let proff2 = ["PC", "MAS"]; //proff2 - applied proff

function StudentDashboard() {
  const userObject = useContext(UserContext);
  const [old, updated] = useState([]);
  if (!Object.keys(userObject).length) {
    return (
      <>
        <div>Not Logged In</div>
        <Link to="/login">Login</Link>
      </>
    );
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/s/${userObject._id}/dashboard`)
      .then((res) => {
        console.log(res);
        proff1 = res.availableProffs;
        proff2 = res.appliedProffs;
        updated([proff1, proff2]);
      });
  },[userObject]);

  function addProffs(name) {
    console.log(`clicked ${name}`);
    let index = proff1.indexOf(name);
    proff2.push(name);
    proff1.splice(index, 1);
    updated([proff1, proff2]);
  }

  function removeProffs(name) {
    console.log(`clicked ${name}`);
    let index = proff2.indexOf(name);
    proff1.push(name);
    proff2.splice(index, 1);
    updated([proff1, proff2]);
  }

  function upvoteProff(name) {
    console.log(`clicked ${name}`);
    let index = proff2.indexOf(name);
    if (index > 0) {
      let up = proff2[index - 1];
      proff2[index - 1] = proff2[index];
      proff2[index] = up;
    }
    updated([proff1, proff2]);
  }

  let AvailableProffList = [];
  for (let p1 of proff1) {
    console.log(`1- ${p1}`);
    AvailableProffList.push(<AvailableProffCard text={p1} func={addProffs} />);
  }

  let AppliedProffList = [];
  let i = 1;
  for (let p2 of proff2) {
    console.log(p2);
    AppliedProffList.push(
      <AppliedProffCard
        text={p2}
        slNo={i++}
        func={removeProffs}
        func2={upvoteProff}
      />
    );
  }

  console.log("list1", AvailableProffList);
  console.log("list2", AppliedProffList);
  return (
    <div>
      <div className="card-group">
        <div className="card out">
          <h4>Available Proffs</h4>
          {AvailableProffList}
        </div>
        <div className="card out">
          <h4>Applied Proffs</h4>
          {AppliedProffList}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
