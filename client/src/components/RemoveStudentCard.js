import "./RemoveStudentCard.css"
import { IoMdRemoveCircleOutline } from 'react-icons/io';
function RemoveStudentCard(props){
    return (
        <div className='card in'>
            <span> {props.text} </span>    
          <span><IoMdRemoveCircleOutline style={{fontSize:"25px" ,color: "red" ,cursor:"pointer"}} onClick={()=> props.func(props.text) }/></span>
        </div>
    );
}
export default RemoveStudentCard;