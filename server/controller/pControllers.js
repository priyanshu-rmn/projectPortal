const express = require("express");
const app = express();

const db = require("../models/db");

async function getStudentList(id) {
  try {
    const allList = await db.Student.find({});
    const reqList = allList.filter((s) => {
      return s.proffOrder.includes(id);
    });
    console.log("reqList", reqList);
    return reqList;
  } catch (e) {
    console.log("Error", e);
  }
}

async function getProffDetails(id) {
  try {
    const data = await db.Proff.findById(id);
    return data;
  } catch (e) {
    console.log("Error", e);
  }
}

const GETdashboard = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("/dashboard : ", req.user);
    const allStudentRequests = await getStudentList(id);
    const proffDetails = await getProffDetails(id);
    const tempSavedStudentsIds = proffDetails.tempSavedStudents;
    const tempSavedStudents = [];
    for (let sId of tempSavedStudentsIds) {
      for (let s of allStudentRequests) {
        if (s.id === sId) {
          tempSavedStudents.push(s);
        }
      }
    }
    const leftStudentRequests = allStudentRequests.filter(
      (s) => !tempSavedStudentsIds.includes(s.id)
    );
    console.log("proffDetails", proffDetails);
    res
      .status(200)
      .json({ leftStudentRequests, tempSavedStudents, proffDetails });
  } catch (error) {
      res.status(404);
  }
};

const POSTdashboard = async (req, res) => {
  const { id } = req.params;
  const newTempStudents = req.body.newTempStudents;
  // console.log(newTempStudents);
  const updatedData = await db.Proff.findByIdAndUpdate(
    id,
    { tempSavedStudents: newTempStudents },
    { new: true }
  );
  console.log(updatedData);
  res.status(201).json({ updatedData });
};

const GETprofileData = async (req, res) => {
  console.log("/GETprofile in : ", req.user);
  const { id } = req.params;
  const proffDetails = await getProffDetails(id);
  console.log("/GETprofile proffDetails", proffDetails);
  res.status(200).json(proffDetails);
};

const POSTprofileData = async (req, res) => {
  console.log("/POSTprofile ", req.user);
  const { id } = req.params;
  const newProfileData = req.body;
  const updatedData = await db.Proff.findByIdAndUpdate(
    id,
    { ...newProfileData },
    { new: true }
  );
  console.log(updatedData);
  res.status(201).json(updatedData);
};

const GETselectedStudents = async (req, res) => {
  console.log("/GETselectedStudents ", req.user);
  const { id } = req.params;
  const allStudents= await db.Student.find({});
    const selectedStudents = [];

    for (let s of allStudents) {
        console.log(s);
        if (s.selectedProff!=null && s.selectedProff == id) {
            selectedStudents.push(s);
        }
    }
    console.log(selectedStudents);
  res.status(200).json(selectedStudents);
};

const pControllers = {
  GETdashboard: GETdashboard,
  POSTdashboard: POSTdashboard,
  GETprofileData: GETprofileData,
  POSTprofileData: POSTprofileData,
  GETselectedStudents: GETselectedStudents,
};
module.exports = pControllers;
