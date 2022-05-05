import "./TempSavedStudentsCard.css";
import { IoMdRemoveCircleOutline } from "react-icons/io";

function TempSavedStudents(props) {
  return (
    <div className="card in">
      <span> {props.studentDetails.fName + " " +  props.studentDetails.lName}</span>
      
      <span>
      <IoMdRemoveCircleOutline
          style={{ fontSize: "25px", color: "red", cursor: "pointer" }}

          onClick={() => props.func(props.studentDetails)}
        />
      </span>
    </div>
  );
}
export default TempSavedStudents;
