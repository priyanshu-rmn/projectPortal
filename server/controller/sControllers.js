const express = require('express');
const app = express();

const db = require("../models/db");
const { all } = require('../routes/sRoutes');

async function getProffList() {
    try {
        const list = await db.Proff.find({});
        return list;
    } catch (e) {
        console.log("Error", e);
    }
}

async function getStudentDetails(id) {
    try {
        const data = await db.Student.findById(id);
        return data;
    } catch (e) {
        console.log("Error", e);
    }
}


const GETdashboard = async (req, res) => {
    console.log("/dashboard : ", req.user);
    const { id } = req.params;
    const allProffs = await getProffList();//[{id=fgh,dsfkjhkdfsh}, {id= dskjfjh, kjsdfhsdf}]
    const studentData = await getStudentDetails(id);
    const appliedProffsIds = studentData.proffOrder;//[sdfjkdsj,sdkjhkdfh,sdfiuhdfh]
    console.log(appliedProffsIds);
    const appliedProffs = []
    for (let pId of appliedProffsIds) {
        for (let p of allProffs) {
            if (p.id === pId) {
                appliedProffs.push(p);
            }
        }       
    }
    const availableProffs = allProffs.filter(p => !appliedProffsIds.includes(p.id));
    console.log("studentData", studentData);
    res.status(200).json({availableProffs,appliedProffs,studentData});
}

const POSTdashboard = async (req, res) => {
    const { id } = req.params;
    const newProffOrderIds = req.body.newAppliedProff;
    // console.log(newProffOrder);
    const updatedData =  await db.Student.findByIdAndUpdate(id, { proffOrder: newProffOrderIds },{new:true});
    console.log(updatedData);
    res.status(201).json(updatedData);
}

const POSTlock = async (req, res) => {
    const { id } = req.params;
    const updatedData = await db.Student.findByIdAndUpdate(id, { isLocked: true },{new:true});
    res.status(201).json({updatedData});
}

const GETprofileData = async (req, res) => {
    console.log("/GETprofile : ",req.user);
    const { id } = req.params;        
    const studentDetails = await getStudentDetails(id);
    console.log( "/GETprofile studentDetails",studentDetails );
    res.status(200).json(studentDetails);
}

const POSTprofileData = async (req, res) => {
    console.log("/POSTprofile ", req.user);
    const { id } = req.params;
    console.log("id", id);
    console.log(req.body);
    const newProfileData = req.body;
    const updatedData = await db.Student.findByIdAndUpdate(id, { ...newProfileData }, { new: true });
    console.log(updatedData);
    res.status(201).json(updatedData);
}




const sControllers = {
    GETdashboard: GETdashboard,
    POSTdashboard: POSTdashboard,
    POSTlock : POSTlock,
    GETprofileData: GETprofileData,
    POSTprofileData: POSTprofileData,
}
module.exports = sControllers;




