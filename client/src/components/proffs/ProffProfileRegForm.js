import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProffProfileRegForm(props) {
  const [rd, setRedirect] = useState(false);
  const navigate = useNavigate();

  console.log(props.user);

  const fNameInputRef = useRef();
  const lNameInputRef = useRef();
  const emailInputRef = useRef();
  const totalInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredfName = fNameInputRef.current.value;
    const enteredlName = lNameInputRef.current.value;
    const enteredemail = emailInputRef.current.value;
    const enteredtotalInputRef = totalInputRef.current.value;
    const proffData = {
      _id: props.user._id,
      fName: enteredfName,
      lName: enteredlName,
      email: enteredemail,
      total: enteredtotalInputRef,
      googleId: props.user.googleId,
    };
    props.onAddProff(proffData);
    setRedirect(true);
  }

  if (rd) {
    navigate("/p/dashboard");
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
                  Total Students Intake{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="text"
                name="total"
                id="total"
                required
                ref={totalInputRef}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success">
            CONTINUE
          </button>

          <br />
        </form>
      </div>
    );
  }
}
export default ProffProfileRegForm;
