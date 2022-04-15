const mongoose = require('mongoose')

const proffSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    fName: String,
    lName: String,
    email: {
        type: String,
        required:true,
    },
    total: {
        type : Number,
        default: 10,
    },
    selectedStudents: {
        type: [Number]
    },
    tempSavedStudents: {
        type : [Number]
    }

});

proffSchema.virtual('fullName').get(function () {
    return `${this.fName} ${this.lName}`;
})
proffSchema.virtual('left').get(function () {
    return this.total - this.selectedStudents.length;
})


const studentSchema = mongoose.Schema({
    fName: String,
    lName: {
        type: String,
        default: "",
    },
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
        default: null,
    },
    currentCPI: {
        type: Number,
        required : true
    },
    proffOrder: {
        //FEATURE : ADD TIME SO THAT FCFS SORTING CAN BE DONE
        type: [String] // stroresId
    }
});

studentSchema.virtual('fullName').get(function () {
    return `${this.fName} ${this.lName}`;
})


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


const db = { 
    Student : mongoose.model("Student", studentSchema),
    Proff: mongoose.model("Proff", proffSchema),
    User : mongoose.model("User", userSchema),
} 

module.exports = db;