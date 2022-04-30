import React from 'react'
import { useState } from "react";
import  './SelectedStudents.css';
import {Link} from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup'

function SelectedStudents() {

const [step , setStep] = useState(false)


const selectedStudents = () => {

  return(
  <div><SelectedStudents></SelectedStudents></div>);

}

  return (
    <div className="StudentsContainer">
     Final list of all students selected over all rounds
     <div style={{marginTop:"20px" , marginLeft:"20px"}}> 
     <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">ABC</ListGroup.Item>
        <ListGroup.Item as="li">WER</ListGroup.Item>
        <ListGroup.Item as="li">MNB</ListGroup.Item>
        </ListGroup>
        </div>
          
    </div>
  );
}

export default SelectedStudents;