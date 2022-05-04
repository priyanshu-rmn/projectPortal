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

const GETprofileData = async (req, res) => {
    console.log("/profile : ",req.user);
    const { rollNo } = req.params;        
    const studentDetails = await getStudentDetails(rollNo);
    // console.log( { ...studentDetails._doc });
    res.render('profileStudent', { ...studentDetails._doc, });
}

const POSTprofileData = async (req, res) => {
    const { rollNo } = req.params;
    const newData = req.body;
    //MISTAKE : SELECTED PROFF LIST WILL BE REMOVED
    const updatedDoc = await db.Student.findOneAndReplace({ rollNo: rollNo }, newData, { new: true })
    // console.log(updatedDoc);
    res.redirect(`/s/${rollNo}/dashboard`);
}




const sControllers = {
    GETdashboard: GETdashboard,
    POSTdashboard: POSTdashboard,
    GETprofileData: GETprofileData,
    POSTprofileData: POSTprofileData,
}
module.exports = sControllers;




