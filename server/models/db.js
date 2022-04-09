const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    fname: String,
    mname: String,
    lname: String,
    contact: Number,
    googleId: String,
    secret: String,
    resumeLink : String,
    email: {
        type: String,
        required: true
    },
    roll: { // will serve as primary key
        type: Number,
        required: true
    },
    selectedProff: {
        type: String,
        default: null
    },
    currentCPI: {
        type: Number,
        required : true
    },
    proffOrder: {
        type: [String] // stroresId
    }
});


const proffSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    fName: String,
    mName : String,
    lName: String,
    googleId: String,
    secret: String,
    total: {
        type : Number,
        default: 10,
    },
    selectedStudents: {
        type: [Number]
    }

});


// const preferenceSchema = mongoose.Schema({
//     roll: {
//         type: Number,
//         required: true
//     },
//     order: {
//         type: [String] // stroresId
//     }
// });


const db = { 
    Student : mongoose.model("Student", studentSchema),
    Proff : mongoose.model("Proff", proffSchema),
    // Preference: mongoose.model("Preference", preferenceSchema),
} 

module.exports = db;