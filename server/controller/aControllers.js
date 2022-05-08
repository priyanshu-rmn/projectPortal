const express = require("express");
const { Admin } = require("../models/db");
const app = express();

const db = require("../models/db");

async function GETdashboard(req, res) {
  console.log("GET /a/dashboard ", req.user);
  const adminData = await db.Admin.find();
  console.log(...adminData);
    res.status(200).json(...adminData);
}
async function POSTdashboard(req, res) {
  console.log("POST /a/dashboard ", req.user);
  const newAdminData = req.body;
  const adminData = await db.Admin.find();
  console.log(newAdminData);
  if (adminData.length === 0) {
    const newEntry = new Admin(newAdminData);
    await newEntry.save();
  } else {
    const updatedAdminData = await db.Admin.findOneAndUpdate(
      { ...adminData },
      { ...newAdminData },
      { new: true }
    );
    console.log(updatedAdminData);
  }
  res.status(201);
}
async function GETfaculties(req, res) {
  const allProffs = await db.Proff.find();
  res.status(200).json(allProffs);
}

async function POSTstartProcess(req, res) {
  console.log("/startProcess", req.user);
  const adminData = await db.Admin.find();
  if (adminData.length !== 0) {
    const updatedAdminData = await db.Admin.findOneAndUpdate(
      { ...adminData },
      { ...adminData, startAllocationTime: Date.now() },
      { new: true }
    );
    console.log(updatedAdminData);
  }
  res.status(201);
}
module.exports = { GETdashboard, POSTdashboard, GETfaculties, POSTstartProcess };
