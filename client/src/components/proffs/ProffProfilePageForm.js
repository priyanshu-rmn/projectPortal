import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProffProfilePageForm(props) {
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
    const enteredtotalInputRef = totalInputRef.current.value;
    const newProffData = {
      fName: enteredfName,
      lName: enteredlName,
      total: enteredtotalInputRef,
    };
    props.onUpdateProff(newProffData);
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
                  Total Proffs Intake{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="text"
                name="total"
                id="total"
                required
                defaultValue={props.user.total}

                ref={totalInputRef}
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
export default ProffProfilePageForm;
