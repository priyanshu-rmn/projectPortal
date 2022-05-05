import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

function isStudent(email) {
  const decidingChar = email[email.indexOf("@") - 1];
  let flag = false;
  if (decidingChar >= "0" && decidingChar <= "9") {
    flag = true;
  }
  return flag;
}

export default function (props) {
  // const [isDashboard, setIsDashboard] = useState(true);
  const navigate = useNavigate();
  const userObject = useContext(UserContext);
  const isStud = isStudent(userObject.email);

  const ClickDashboard = () => {
    // setIsDashboard(true);
    if (isStud) navigate("/s/dashboard");
    else navigate("/p/dashboard");
  };

  const ClickProfile = () => {
    // setIsDashboard(false);
    if (isStud) navigate("/s/profile");
    else navigate("/p/profile");
  };

  const ClickSelectedStudents = () => {
    navigate("/p/selectedStudents");
  };

  return (
    <div>
      {/* {isDashboard ? ( */}
      <div style={{ margin: "2%", backgroundColor: "rgba(0,0,0,0.1)" }}>
        <ul class="nav nav-tabs nav-fill">
          <li class="nav-item">
            <div
              style={{
                cursor: "pointer",
                paddingTop: "7px",
                paddingBottom: "7px",
                // backgroundColor: "rgba(0,0,0,0.5)",
              }}
              onClick={ClickDashboard}
            >
              <h3>DASHBOARD</h3>
            </div>
          </li>

          <li class="nav-item">
            <div
              style={{
                cursor: "pointer",
                paddingTop: "7px",
                paddingBottom: "7px",
              }}
              onClick={ClickProfile}
            >
              <h3>PROFILE</h3>
            </div>
          </li>
          {!isStud && (
            <li class="nav-item">
              <div
                style={{
                  cursor: "pointer",
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
                onClick={ClickSelectedStudents}
              >
                <h3>SELECTED STUDENTS</h3>
              </div>
            </li>
          )}
        </ul>
      </div>
      {/* ) : (
          <div style={{ margin: "2%", backgroundColor: "rgba(0,0,0,0.1)" }}>
            <ul class="nav nav-tabs nav-fill">
              <li class="nav-item">
                <div
                  style={{
                    cursor: "pointer",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                  }}
                  onClick={ClickDashboard}
                >
                  <h3>DASHBOARD</h3>
                </div>
              </li>

              <li class="nav-item">
                <div
                  style={{
                    cursor: "pointer",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                  onClick={ClickProfile}
                >
                  <h3>PROFILE</h3>
                </div>
              </li>
            </ul>
          </div>
        )} */}
    </div>
  );
}
