import { useRef } from "react";

export default function AdminDashboardForm(props) {
  console.log(props);
  const maxStudentIntakeInputRef = useRef();
  const choiceFillingHoursInputRef = useRef();
  const proffSelectionHoursInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredmaxStudentIntake = maxStudentIntakeInputRef.current.value;
    const enteredchoiceFillingHours = choiceFillingHoursInputRef.current.value;
    const enteredproffSelectionHours =
      proffSelectionHoursInputRef.current.value;
    const newDetails = {
      maxStudentIntake: enteredmaxStudentIntake,
      choiceFillingHours: enteredchoiceFillingHours,
      proffSelectionHours: enteredproffSelectionHours,
    };
    props.onUpdateAdminDetails(newDetails);
  }
  return (
    <>
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
                  Max Student Intake for Each Proffessor{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="NUmber"
                name="maxStudentIntake"
                id="maxStudentIntake"
                min="0"
                required
                defaultValue={props.adminData.maxStudentIntake}
                ref={maxStudentIntakeInputRef}
              />
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  Number of hours for choice filling by students{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="Number"
                name="choiceFillingHours"
                id="choiceFillingHours"
                step="any"
                required
                defaultValue={props.adminData.choiceFillingHours}
                ref={choiceFillingHoursInputRef}
              />
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  Number of hours for selecting students by Proffs{" "}
                </span>
              </div>
              <input
                className="form-control"
                type="Number"
                name="proffSelectionHours"
                id="proffSelectionHours"
                required
                step="any"
                defaultValue={props.adminData.proffSelectionHours}
                ref={proffSelectionHoursInputRef}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success">
            SAVE
          </button>

          <br />
        </form>
      </div>
    </>
  );
}
