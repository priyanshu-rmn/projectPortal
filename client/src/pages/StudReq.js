import ProffSelect from '../components/pselect';
import AppliedProffs from '../components/pdeselect';
import SideNavbar from "../components/sidenavbar";
import {useState} from 'react';

let stud1 = [ "RS", "Raman", "Deva", "Vams"];
let stud2 = ["Kumshagra", "Shivam"];

function Sreq(){ 

    const [old , updated] = useState([]);

    function addproffs(name){
        console.log(`clicked ${name}`);
        let index = stud1.indexOf(name);
        stud2.push(name);
        stud1.splice(index,1);
        updated([stud1,stud2]);
    }

    function removeproffs(name){
        console.log(`clicked ${name}`);
        let index = stud2.indexOf(name);
        stud1.push(name);
        stud2.splice(index,1);
        updated([stud1,stud2]);
    }

    function upvoteproff(name){
        console.log(`clicked ${name}`);
        let index = stud2.indexOf(name);
        if(index>0){
            let up = stud2[index-1];
            stud2[index-1]=stud2[index];
            stud2[index]=up;
        }
        updated([stud1,stud2]);
    }

    let list2=[];
    let i = 1;
    for(let p2 of stud2){
        console.log(p2);
        list2.push(<AppliedProffs text = {p2} slNo={i++} func={removeproffs} func2={upvoteproff}/>);
    }

    let list1=[];
    for(let p1 of stud1){
        console.log(`1- ${p1}`);
        list1.push(<ProffSelect text={p1} func={addproffs}/>);
    }

    return(
    <div>
    <SideNavbar />

    <div className='card-group'>
        <div className='card out' >
            <h4>Student Requests</h4>
            {list1}
        </div>

        <div className='card out'>
            <span><h4>Selected</h4></span>
            {list2}
        </div>
    </div>
    </div>
    );
}

export default Sreq;