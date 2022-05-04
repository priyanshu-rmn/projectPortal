import { useRef, useState, } from 'react';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function StudentProfileRegForm(props) {
  const [rd, setRedirect] = useState(false);
  const navigate = useNavigate();
  
  console.log(props.user);
  
  const fNameInputRef = useRef();
  const lNameInputRef = useRef();
  const resumeLinkInputRef = useRef();
  const emailInputRef = useRef();
  const currentCPIInputRef = useRef();
  const contactNoInputRef = useRef();
  const rollNoInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredfName = fNameInputRef.current.value;
    const enteredlName = lNameInputRef.current.value;
    const enteredresumeLink = resumeLinkInputRef.current.value;
    const enteredemail = emailInputRef.current.value;
    const enteredcurrentCPI = currentCPIInputRef.current.value;
    const enteredcontactNo = contactNoInputRef.current.value;
    const enteredrollNo = rollNoInputRef.current.value;
    const studentData = {
      _id: props.user._id,
      fName: enteredfName,
      lName: enteredlName,
      resumeLink: enteredresumeLink,
      email: enteredemail,
      currentCPI: enteredcurrentCPI,
      contactNo: enteredcontactNo,  
      rollNo: enteredrollNo,
      googleId: props.user.googleId
    }
    props.onAddStudent(studentData);
    setRedirect(true)
  }
  
  if (rd) {
    navigate('/s/dashboard');
  }
  else {
    return (
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="fName">First Name</label>
          <input type="text" name="fName" id="fName" defaultValue={props.user.username} ref={fNameInputRef} />
        </div>
        <div>
          <label htmlFor="lName">Last Name</label>
          <input type="text" name="lName" id="lName" defaultValue={props.user.username} ref={lNameInputRef} />
        </div>
        <div>
          <label htmlFor="resumeLink">Resume Link</label>
          <input type="text" name="resumeLink" id="resumeLink" ref={resumeLinkInputRef} />
        </div>
        <div>
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={props.user.email} readOnly
            ref={emailInputRef}
          />
        </div>
        <div>
          <label htmlFor="currentCPI">Current CPI</label>
          <input
            type="number"
            name="currentCPI"
            id="currentCPI"
            min="0"
            max="10"
            step="any"
            required
            ref={currentCPIInputRef}
          />
        </div>
        <div>
          <label htmlFor="contactNo">Contact Number</label>
          <input type="tel" name="contactNo" id="contactNo" required ref={contactNoInputRef} />
        </div>
        <div>
          <label htmlFor="rollNo">Roll Number</label>
          <input type="text" name="rollNo" id="rollNo" required ref={rollNoInputRef} />
        </div>
        <button as={Link} to="/s/dashboard" type="submit">CONTINUE</button>
       
        <br />
      </form>
    );
  }
}
export default StudentProfileRegForm;
