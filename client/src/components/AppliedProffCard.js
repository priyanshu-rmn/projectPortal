import "./AppliedProffCard.css"
function AppliedProffCard(props){
    return (
        <div className='card in'>
         <span>
         <span> {props.slNo} </span> &nbsp;&nbsp;
           <span> {props.text} </span>
         </span>
          <span><i className="fa fa-arrow-up fa-2x" onClick={()=> props.func2(props.text)}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-times fa-2x" onClick={()=> props.func(props.text)}></i></span>
            </div>
    );
}

export default AppliedProffCard; 