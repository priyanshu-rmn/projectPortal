const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    fName: String,
    mName: String,
    lName: String,
    contactNo: Number,
    resumeLink : String,
    email: {
        type: String,
        required: true
    },
    rollNo: { // will serve as primary key
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
    email : String,
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

const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    googleId: String,
    secret: String,
    email: String,
    profileURL : String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// const User = new mongoose.model("User", userSchema);

const db = { 
    Student : mongoose.model("Student", studentSchema),
    Proff: mongoose.model("Proff", proffSchema),
    User : mongoose.model("User", userSchema),
    // Preference: mongoose.model("Preference", preferenceSchema),
} 

module.exports = db;