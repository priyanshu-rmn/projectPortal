const express = require('express');
const { Proff } = require('../models/db');
const app = express();

const db = require("../models/db");

async function getProffList() {
    return await db.Proff.find({});   
}

async function getStudentDetails(roll) {
    return await db.Student.find({ "roll": roll });
}


const dashboardData = async (req, res) => {
    const { roll } = req.params;
    // const studentData = 
    const allProffs = await getProffList();
    console.log(allProffs);
    const availableProffs = [];
    const appliedProffs = 



    res.send(allProffs);   
}

const GETprofileData = async (req, res) => {
    const {roll} = req.params;
    const studentDetails = await getStudentDetails(roll);
    res.send(studentDetails);   
}

const POSTprofileData = async (req, res) => {
    const { roll } = req.params;
    const studentDetails = await getStudentDetails(roll);


    res.send(studentDetails);   
}




const sControllers = {
    dashboardData: dashboardData,
    GETprofileData : GETprofileData,
    POSTprofileData : POSTprofileData,
}
module.exports = sControllers;




