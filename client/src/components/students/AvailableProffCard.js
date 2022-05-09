import "./AppliedProffCard.css"
import { AiOutlinePlusCircle } from 'react-icons/ai';
function AvailableProffCard(props){
    return (
        <div className='card in'>
            <span> {props.proffData.fName +" "+ props.proffData.lName  } </span>    
          <span><AiOutlinePlusCircle style={{fontSize:"25px" ,color: "green" ,cursor:"pointer"}} onClick={()=> props.func(props.proffData) }/></span>
        </div>
    );
}
export default AvailableProffCard;