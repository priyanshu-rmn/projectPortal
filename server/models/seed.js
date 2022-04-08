const db = require('./db')
const { uuid } = require('uuidv4');

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
    });

const proffs = [
    {
        id: uuid(),
        fName: "AKT",
    },
    {
        id: uuid(),
        fName: "Mayank",
    },
    {
        id: uuid(),
        fName: "KKS",
    },
    {
        id: uuid(),
        fName: "BB",
    },
    {
        id: uuid(),
        fName: "RSS",
    },
    {
        id: uuid(),
        fName: "Laxmanan",
    },
    {
        id: uuid(),
        fName: "Tanima",
    },
    {
        id: uuid(),
        fName: "PC",
    },
    {
        id: uuid(),
        fName: "SKS",
    }
]


const students = [
    {
        fname: 'Priyanshu',
        email: 'priyanshu.cse20@itbhu.ac.in',
        roll: 20074026,
        currentCPI: 9.76
    },
    {
        fname: 'Deepanshu',
        email: 'deepanshu.cse20@itbhu.ac.in',
        roll: 20075014,
        currentCPI: 9.66
    },
    {
        fname: 'Rahul',
        email: 'rahul.cse20@itbhu.ac.in',
        roll: 20075024,
        currentCPI: 9.79
    },
    {
        fname: 'Manvi',
        email: 'manvi.cse20@itbhu.ac.in',
        roll: 20075054,
        currentCPI: 9.96
    },
    {
        fname: 'Shalini',
        email: 'shalini.cse20@itbhu.ac.in',
        roll: 20074029,
        currentCPI: 9.56
    }
]

db.Proff.insertMany(proffs)
    .then(res => console.log(res))
    .catch(e => console.log("error", e));

db.Student.insertMany(students)
    .then(res => console.log(res))
    .catch(e => console.log("error", e));


