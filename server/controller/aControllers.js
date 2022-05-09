const express = require("express");
const { Admin } = require("../models/db");
const app = express();
const utils = require("../utils");
const db = require("../models/db");

async function GETdashboard(req, res) {
  console.log("GET /a/dashboard ", req.user);
  const adminData = await db.Admin.find();
  console.log(...adminData);
  res.status(200).json(adminData[0]);
}

async function POSTdashboard(req, res) {
  console.log("POST /a/dashboard ", req.user);
  const newAdminData = req.body;
  console.log(newAdminData);
  const updatedAdminData = await db.Admin.findOneAndUpdate(
    { fName: "ADMIN" },
    newAdminData,
    { new: true }
  );
  console.log(updatedAdminData);
  res.status(201).json(updatedAdminData);
}

async function GETfaculties(req, res) {
  const allProffs = await db.Proff.find();
  res.status(200).json(allProffs);
}

async function POSTstartProcess(req, res) {
  console.log("/startProcessa", req.user);
  const adminData = await db.Admin.find();
  if (adminData.length !== 0) {
    const updatedAdminData = await db.Admin.findOneAndUpdate(
      { fName: "ADMIN" },
      { ...adminData, startAllocationTime: Date.now(), processStage: 1 },
      { new: true }
    );
    console.log(updatedAdminData);
    res.status(201).json(updatedAdminData);
  } else {
    res.status(400).json({ message: "No Admin Data" });
  }
}

async function POSTrandomAllocation(req, res) {
  console.log("/POSTrandomAllocation", req.user);
  res.status(200);
}

// timer ends
async function POSTupdateProcessStage(req, res) {
  console.log("updateProcessStage", req.user);
  const adminData = await db.Admin.find();
  console.log(req.body);
  const { ps } = req.body;
  console.log(ps);

  const updatedAdminData = await db.Admin.findOneAndUpdate(
    { fName: "ADMIN" },
    { ...adminData, processStage: ps },
    { new: true }
  );

  console.log(updatedAdminData);
  if (ps === 2) {
    console.log("entering phase 2");
    await utils.lockAllPreferences();
  }
  else if (ps === 3) {
    console.log("entering phase 3");
    await utils.choiceBasedAllocation();
    await utils.randomAllocation();
  }

  res.status(200).json(updatedAdminData);
}

async function POSTresetProcess(req, res) {
  console.log("resetting process", req.user);
  res.status(200);
}

module.exports = {
  GETdashboard,
  POSTdashboard,
  GETfaculties,
  POSTstartProcess,
  POSTrandomAllocation,
  POSTupdateProcessStage,
  POSTresetProcess
};
