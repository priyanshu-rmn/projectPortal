function ProffSelect(props){

    return (
        <div className='card in'>
           <span> {props.text} </span>
          <span> <i className="fas fa-plus-circle fa-lg" onClick={()=> props.func(props.text)}></i></span>
        </div>
    );
}
export default ProffSelect;