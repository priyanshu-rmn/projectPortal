const express = require('express');
const app = express();

const db = require("../models/db");

async function getProffList() {
    try {
        const list = await db.Proff.find({});
        return list;
    } catch (e) {
        console.log("Error", e);
    }
}

async function getStudentDetails(rollNo) {
    try {
        const data = await db.Student.findOne({ rollNo: rollNo });
        return data;
    } catch (e) {
        console.log("Error", e);
    }
}


const GETdashboard = async (req, res) => {
    const { rollNo } = req.params;
    const allProffs = await getProffList();
    const studentData = await getStudentDetails(rollNo);

    const appliedProffs = studentData.proffOrder;
    const availableProffs = allProffs.filter(p => !appliedProffs.includes(p.id));
    const reqDataAvailableProffs = availableProffs.map(p => {
        return { id : p.id, fullName: p.fullName,left :  p.left };
    })
    const reqDataAppliedProffs = appliedProffs.map(p => {
        return { id : p.id, fullName: p.fullName,left :  p.left };
    })
    // console.log(reqDataAvailableProffs);
    res.render('dashboardStudent', {reqDataAvailableProffs,reqDataAppliedProffs, rollNo});
}

const POSTdashboard = async (req, res) => {
    const newProffOrder = req.body;
    const { rollNo } = req.params;
    await db.Student.updateOne({ rollNo: rollNo }, { proffOrder: newProffOrder });
    res.send("updated");
}

const GETprofileData = async (req, res) => {
    const { rollNo } = req.params;        
    const studentDetails = await getStudentDetails(rollNo);
    console.log( { ...studentDetails._doc });
    res.render('profileStudent', { ...studentDetails._doc, });
}

const POSTprofileData = async (req, res) => {
    const { rollNo } = req.params;
    const newData = req.body;
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




