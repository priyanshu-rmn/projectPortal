const mongoose = require('mongoose')

const proffSchema = mongoose.Schema({
    id: {
        type: String,
        requierd: true
    },
    fName: String,
    mName : String,
    lName : String,
    total: {
        type : Number,
        deafult : 10,
    },
    selectedStudents: {
        type: [Number]
    }

});
//proffs collection created
const Proff = mongoose.model("userProffs", proffSchema);
export default Proff;