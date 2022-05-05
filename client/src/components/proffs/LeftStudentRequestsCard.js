import "./LeftStudentRequests.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

function LeftStudentRequests(props) {
  return (
    <div className="card in">
      <span> {props.studentDetails.fName +" "+ props.studentDetails.lName} </span>
      <span>
      <AiOutlinePlusCircle
          style={{ fontSize: "25px", color: "green", cursor: "pointer" }}
          onClick={() => props.func(props.studentDetails)}
        />
      </span>
    </div>
  );
}
export default LeftStudentRequests;
