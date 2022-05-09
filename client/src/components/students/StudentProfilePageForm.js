import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function StudentProfilePageForm(props) {
  const [rd, setRedirect] = useState(false);
  const navigate = useNavigate();

  console.log(props.user);

  const fNameInputRef = useRef();
  const lNameInputRef = useRef();
  const resumeLinkInputRef = useRef();
  const emailInputRef = useRef();
  const currentCPIInputRef = useRef();
  const contactNoInputRef = useRef();
  const rollNoInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredfName = fNameInputRef.current.value;
    const enteredlName = lNameInputRef.current.value;
    const enteredresumeLink = resumeLinkInputRef.current.value;
    const enteredcurrentCPI = currentCPIInputRef.current.value;
    const enteredcontactNo = contactNoInputRef.current.value;
    const enteredrollNo = rollNoInputRef.current.value;
    const newStudentData = {
      fName: enteredfName,
      lName: enteredlName,
      resumeLink: enteredresumeLink,
      currentCPI: enteredcurrentCPI,
      contactNo: enteredcontactNo,
      rollNo: enteredrollNo,  
    };
    props.onUpdateStudent(newStudentData);
    setRedirect(true);
  }

  if (rd) {
    navigate("/s/dashboard");
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rm",
        }}
      >
        <form
          onSubmit={submitHandler}
          className="input-group mb-3"
          style={{ width: "50%" }}
        >
          <div className="input-group mb-3">
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  First Name{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="text"
                name="fName"
                id="fName"
                defaultValue={props.user.fName}
                ref={fNameInputRef}
              />
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  Last Name{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="text"
                name="lName"
                id="lName"
                defaultValue={props.user.lName}
                ref={lNameInputRef}
              />
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  Email Id{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                defaultValue={props.user.email}
                readOnly
                ref={emailInputRef}
              />
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  Roll Number{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="text"
                name="rollNo"
                id="rollNo"
                required
                defaultValue={props.user.rollNo}
                ref={rollNoInputRef}
              />
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  Current CPI{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="number"
                name="currentCPI"
                id="currentCPI"
                min="0"
                max="10"
                step="any"
                required
                defaultValue={props.user.currentCPI}
                ref={currentCPIInputRef}
              />
            </div>
          </div>


          <div className="input-group mb-3">
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  Contact Number{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="tel"
                name="contactNo"
                id="contactNo"
                required
                defaultValue={props.user.contactNo}
                ref={contactNoInputRef}
              />
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  Resume Link{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="text"
                name="resumeLink"
                id="resumeLink"
                defaultValue={props.user.resumeLink}
                ref={resumeLinkInputRef}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success">
            SAVE
          </button>

          <br />
        </form>
      </div>
    );
  }
}
export default StudentProfilePageForm;
