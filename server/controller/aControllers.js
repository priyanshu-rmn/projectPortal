const express = require('express');
const app = express();

const db = require("../models/db");

const allProffs = [];

const dashboardData = (req, res) => {
    res.send("dashboard data");
    
}

module.exports = dashboardData;




