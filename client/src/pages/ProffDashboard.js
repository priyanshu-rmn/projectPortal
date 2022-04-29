import "./ProffDashboard.css";
import {useState} from 'react';
import SelectStudentCard from '../components/SelectStudentCard';
import RemoveStudentCard from '../components/RemoveStudentCard';

let stud1 = [ "Rahul", "Deva", "Kush", "Shim"];      //stud1 - available proff
let stud2 = ["Raman", "Vans","Ans"];                 //stud2 - applied proff

function ProffDashboard(){ 
    const [old , updated] = useState([]);

    function selectStudent(name){
        console.log(`clicked ${name}`);
        let index = stud1.indexOf(name);
        stud2.push(name);
        stud1.splice(index,1);
        updated([stud1,stud2]);
    }

    function removeStudent(name){
        console.log(`clicked ${name}`);
        let index = stud2.indexOf(name);
        stud1.push(name);
        stud2.splice(index,1);
        updated([stud1,stud2]);
    }

    let StudentsRequested=[];
    for(let p1 of stud1){
        console.log(`1- ${p1}`);
        StudentsRequested.push(<SelectStudentCard text={p1} func={selectStudent}/>);
    }

    let StudentsSelected=[];
    for(let p2 of stud2){
        console.log(p2);
        StudentsSelected.push(<RemoveStudentCard text = {p2} func={removeStudent}/>);
    }
    return(
    <div>
    <div className='card-group'>
        <div className='card out' >
            <h4 >Available Proffs</h4>
            {StudentsRequested}
        </div>
        <div className='card out'>
            <h4>Applied Proffs</h4>
            {StudentsSelected}
        </div>
    </div>
    </div>
    );
}

export default ProffDashboard; 