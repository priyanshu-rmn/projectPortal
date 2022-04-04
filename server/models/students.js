const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    fname: String,
    mname: String,
    lname: String,
    contact: Number,
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
});
const Student = mongoose.model("Student", studentSchema);
export default Student;

