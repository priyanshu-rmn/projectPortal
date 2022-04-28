import AvailableProffCard from '../components/AvailableProffCard';
import AppliedProffCard from '../components/AppliedProffCard';
import SideNavbar from "../components/SideNavbar";
import "./StudentDashboard.css";
import {useState} from 'react';

let proff1 = [ "AKT", "RNC", "KKS", "BB"];
let proff2 = ["PC", "BSDK"];

function StudentDashboard(){ 
    const [old , updated] = useState([]);

    function addproffs(name){
        console.log(`clicked ${name}`);
        let index = proff1.indexOf(name);
        proff2.push(name);
        proff1.splice(index,1);
        updated([proff1,proff2]);
    }

    function removeproffs(name){
        console.log(`clicked ${name}`);
        let index = proff2.indexOf(name);
        proff1.push(name);
        proff2.splice(index,1);
        updated([proff1,proff2]);
    }

    function upvoteproff(name){
        console.log(`clicked ${name}`);
        let index = proff2.indexOf(name);
        if(index>0){
            let up = proff2[index-1];
            proff2[index-1]=proff2[index];
            proff2[index]=up;
        }
        updated([proff1,proff2]);
    }

    let list1=[];
    for(let p1 of proff1){
        console.log(`1- ${p1}`);
        list1.push(<AvailableProffCard text={p1} func={addproffs}/>);
    }

    let list2=[];
    let i = 1;
    for(let p2 of proff2){
        console.log(p2);
        list2.push(<AppliedProffCard text = {p2} slNo={i++} func={removeproffs} func2={upvoteproff}/>);
    }

    console.log("list1", list1);
    console.log("list2", list2);
    return(
    <div>
    {console.log('POORA CHAL RHA H')}
    <SideNavbar/>
    <div className='card-group'>
        <div className='card out' >
            <h4 >Available Proffs</h4>
            {list1}
        </div>
        <div className='card out'>
            <h4>Applied Proffs</h4>
            {list2}
        </div>
    </div>
    </div>
    );
}

export default StudentDashboard; 