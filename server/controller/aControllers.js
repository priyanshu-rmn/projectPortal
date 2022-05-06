const express = require("express");
const app = express();

const db = require("../models/db");

async function GETdashboard(req,res) {}
async function POSTdashboard(req,res) {}
async function GETfaculties(req,res) {
    const allProffs = await db.Proff.find();
    res.status(200).json(allProffs);
}

module.exports = { GETdashboard, POSTdashboard, GETfaculties };
