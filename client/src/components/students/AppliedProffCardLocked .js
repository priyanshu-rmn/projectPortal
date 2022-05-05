import "./AppliedProffCardLocked.css";
function AppliedProffCardLocked(props) {
  return (
    <div className="card in">
      <div>
        <span> {props.slNo} </span> &nbsp;&nbsp;
        <span > {props.proffData.fName + " " + props.proffData.lName} </span>
      </div>
    </div>
  );
}

export default AppliedProffCardLocked;
