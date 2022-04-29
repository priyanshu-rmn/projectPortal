import "./SelectStudentCard.css"
import { AiOutlinePlusCircle } from 'react-icons/ai';
function SelectStudentCard(props){
    return (
        <div className='card in'>
            <span> {props.text} </span>    
          <span><AiOutlinePlusCircle style={{fontSize:"25px" ,color: "green" ,cursor:"pointer"}} onClick={()=> props.func(props.text) }/></span>
        </div>
    );
}
export default SelectStudentCard;