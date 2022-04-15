const express = require('express');
const app = express();

const db = require("../models/db");

async function getStudentList(id) {
    try {
        const allList = await db.Student.find({});
        const reqList = allList.filter(s => {
            return s.proffOrder.includes(id);
        })
        return reqList; 
    } catch (e) {
        console.log("Error", e);
    }
}

async function getProffDetails(id) {
    try {
        const data = await db.Proff.findOne({ id: id });
        return data;
    } catch (e) {
        console.log("Error", e);
    }
}


const GETdashboard = async (req, res) => {
    const { id } = req.params;
    const proffDetails = await getProffDetails(id);
    // console.log(proffDetails);
    const requests = await getStudentList(id);
    // console.log(requests);
    // const tempSavedStudents = proffDetails.tempSavedStudents;
    
    res.render('dashboardProff', {requests , proffDetails});
}

const POSTdashboard = async (req, res) => {
    const newSelections = req.body;
    const { id } = req.params;
    await db.Proff.updateOne({ id: id }, { tempSavedStudents : newSelections });
    res.send("updated");
}

const GETprofileData = async (req, res) => {
    const { id } = req.params;        
    const proffDetails = await getProffDetails(id);
    console.log( { ...proffDetails._doc});
    res.render('profileProff', { ...proffDetails._doc, });
    // res.send("OK");
}

const POSTprofileData = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    // console.log({ ...newData });
    const updatedDoc = await db.Student.findOneAndUpdate({ id : id }, { ...newData }, { new: true })
    res.redirect(`/p/${id}/dashboard`);
}

const GETselectedStudents = async (req, res) => {
    const { id } = req.params;
    const proffDetails = await getProffDetails(id);
    res.send(proffDetails.selectedStudents);
}



const pControllers = {
    GETdashboard: GETdashboard,
    POSTdashboard: POSTdashboard,
    GETprofileData: GETprofileData,
    POSTprofileData: POSTprofileData,
    GETselectedStudents : GETselectedStudents,
}
module.exports = pControllers;




