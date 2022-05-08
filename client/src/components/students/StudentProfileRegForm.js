import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//className="col-md-4 col-md-offset-4"
function StudentProfileRegForm(props) {
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
    const enteredemail = emailInputRef.current.value;
    const enteredcurrentCPI = currentCPIInputRef.current.value;
    const enteredcontactNo = contactNoInputRef.current.value;
    const enteredrollNo = rollNoInputRef.current.value;
    const studentData = {
      _id: props.user._id,
      fName: enteredfName,
      lName: enteredlName,
      resumeLink: enteredresumeLink,
      email: enteredemail,
      currentCPI: enteredcurrentCPI,
      contactNo: enteredcontactNo,
      rollNo: enteredrollNo,
      googleId: props.user.googleId,
    };
    props.onAddStudent(studentData);
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
                defaultValue={props.user.username}
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
                defaultValue={props.user.username}
                ref={lNameInputRef}
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
                ref={resumeLinkInputRef}
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
                ref={contactNoInputRef}
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
                ref={rollNoInputRef}
              />
            </div>
          </div>

          <button
            as={Link}
            to="/s/dashboard"
            type="submit"
            className="btn btn-success"
          >
            CONTINUE
          </button>

          <br />
        </form>
      </div>
    );
  }
}
export default StudentProfileRegForm;
