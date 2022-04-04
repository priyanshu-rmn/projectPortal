//mongoose for mongo db
const mongoose = require('mongoose');
//mongoDB connection
async function connectDB() {
    await mongoose.connect('mongodb://0.0.0.0:27017/projectPortal');
}
connectDB()
    .then(() => {
        console.log("Connection Opened");
    })
    .catch(e => {
        console.log('Error', e);
    })


const students = require('./models/students');
const proffs = require('./models/proffs');
const preferences = require('./models/preferences');

const studentList = [
    {
        fname: 'Shivam',
        lName: 'Kulhari',
        email: 'shivam.kulhari.cse20@itbhu.ac.in',
        roll: 20075083,
        currentCPI: 9.40,
    },
    {
        fname: 'Priyanshu',
        lName: 'Raman',
        email: 'priyanshu.raman.cse20@itbhu.ac.in',
        roll: 20074026,
        currentCPI: 9.76,
    },
    {
        fname: 'Nitin',
        email: 'nitin.student.cse20@itbhu.ac.in',
        roll: 20075056,
        currentCPI: 9.46,
    },
    {
        fname: 'Yogesh',
        lName: 'Singh',
        email: 'yogi.chotu.cse20@itbhu.ac.in',
        roll: 20075099,
        currentCPI: 9.03,
    }
];
students.insertMany(studentList)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    });
students.save();