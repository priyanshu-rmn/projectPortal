import "./FacultyCard.css"
import { BsArrowRight } from "react-icons/bs";

function FacultyCard(props){
    return (
        <div className='card in'>
            <span> {props.faculty.fName + " " + props.faculty.lName} </span>    
          <span><BsArrowRight style={{fontSize:"25px" ,color: "black" ,cursor:"pointer"}} onClick={()=> props.getStudentList(props.faculty._id) }/></span>
        </div>
    );
}
export default FacultyCard; 