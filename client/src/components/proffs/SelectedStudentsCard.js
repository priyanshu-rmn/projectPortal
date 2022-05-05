import "./SelectedStudentsCard.css";
function SelectedStudentsCard(props) {
  console.log(props);
  let i = 1;
  return (
    <div className="card in">
      <div>
        <span> {i++} </span> &nbsp;&nbsp;
        <span > {props.studentDetails.fName + " " + props.studentDetails.lName} </span>
      </div>
    </div>
  );
}

export default SelectedStudentsCard;
