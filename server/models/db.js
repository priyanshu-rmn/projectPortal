const mongoose = require("mongoose");

const proffSchema = mongoose.Schema({
  fName: String,
  lName: {
    type: String,
    default : "",
  },
  email: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    default: 10,
  },
  selectedStudents: {
    type: [String],
  },
  tempSavedStudents: {
    type: [String],
  },
  googleId: Number
});

proffSchema.virtual("fullName").get(function () {
  return `${this.fName} ${this.lName}`;
});
proffSchema.virtual("left").get(function () {
  return this.total - this.selectedStudents.length;
});

const studentSchema = mongoose.Schema({
  fName: String,
  lName: {
    type: String,
    default: "",
  },
  contactNo: Number,
  resumeLink: String,
  email: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  selectedProff: {
    type: String,
    default: null,
  },
  currentCPI: {
    type: Number,
    required: true,
  },
  proffOrder: {
    //FEATURE : ADD TIME SO THAT FCFS SORTING CAN BE DONE
    type: [String], // stroresId
  },
  googleId: Number,
  isLocked: {
    type: Boolean,
    default: false,
  },
});

const adminSchema = mongoose.Schema({
  fName: {
    type: String,
    default: "ADMIN"
  },
  maxStudentIntake : {
    type: Number,
    default: 8,
  }
});

studentSchema.virtual("fullName").get(function () {
  return `${this.fName} ${this.lName}`;
});

const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  googleId: Number,
  secret: String,
  email: String,
  profileURL: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const db = {
  Student: mongoose.model("Student", studentSchema),
  Proff: mongoose.model("Proff", proffSchema),
  User: mongoose.model("User", userSchema),
  Admin: mongoose.model("Admin", adminSchema),
};

module.exports = db;