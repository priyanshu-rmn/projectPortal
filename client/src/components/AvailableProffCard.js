import "./AppliedProffCard.css"
function AvailableProffCard(props){

    return (
        <div className='card in'>
            <span> {props.text} </span>         
          <span><i className="fas fa-plus-circle fa-2x" onClick={()=> props.func(props.text)}></i></span>
        </div>
    );
}
export default AvailableProffCard;