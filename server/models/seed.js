const db = require('./db')

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
        email: "akt@itbhu.ac.in",
        fName: "AKT",
    },
    {
        email: "mayank@itbhu.ac.in",
        fName: "Mayank",
    },
    {
        email: "kks@itbhu.ac.in",
        fName: "KKS",
    },
    {
        email: "bb@itbhu.ac.in",
        fName: "BB",
    },
    {
        email: "rss@itbhu.ac.in",
        fName: "RSS",
    },
    {
        email: "laxmanan@itbhu.ac.in",
        fName: "Laxmanan",
    },
    {
        email: "tanima@itbhu.ac.in",
        fName: "Tanima",
    },
    {
        email: "pc@itbhu.ac.in",
        fName: "PC",
    },
    {
        email: "sks@itbhu.ac.in",
        fName: "SKS",
    }
]


const students = [
    {
        fName: 'Priyanshu',
        email: 'priyanshu.cse20@itbhu.ac.in',
        rollNo: 20074026,
        currentCPI: 9.76,
        // proffOrder : ["2ad9e24a-a0d1-4d81-ad94-af161167434b" ,"967c7cf3-6ebf-4a48-a7c0-5ad3d312412b","01e17f92-b7f1-4881-8f89-999341e22579", "e3716b50-102e-4330-b8c0-effb1be33d35", "5d6446ba-4bfe-455a-b6b7-8c392e444c14", "5bda1ad9-9cfc-43c4-9391-92a60a6e9de5"]
    },
    {
        fName: 'Deepanshu',
        email: 'deepanshu.cse20@itbhu.ac.in',
        rollNo: 20075014,
        currentCPI: 9.66,
        // proffOrder : ["2ad9e24a-a0d1-4d81-ad94-af161167434b" , "967c7cf3-6ebf-4a48-a7c0-5ad3d312412b","01e17f92-b7f1-4881-8f89-999341e22579", "e3716b50-102e-4330-b8c0-effb1be33d35", "5d6446ba-4bfe-455a-b6b7-8c392e444c14", "5bda1ad9-9cfc-43c4-9391-92a60a6e9de5"]
    },
    {
        fName: 'Rahul',
        email: 'rahul.cse20@itbhu.ac.in',
        rollNo: 20075024,
        currentCPI: 9.79,
        // selectedProff: "2ad9e24a-a0d1-4d81-ad94-af161167434b",
    },
    {
        fName: 'Manvi',
        email: 'manvi.cse20@itbhu.ac.in',
        rollNo: 20075054,
        currentCPI: 9.96,
        // selectedProff : "5d6446ba-4bfe-455a-b6b7-8c392e444c14",
    },
    {
        fName: 'Suhani',
        email: 'suhani.cse20@itbhu.ac.in',
        rollNo: 20074029,
        currentCPI: 9.56,
        // proffOrder : ["967c7cf3-6ebf-4a48-a7c0-5ad3d312412b","01e17f92-b7f1-4881-8f89-999341e22579", "e3716b50-102e-4330-b8c0-effb1be33d35", "5d6446ba-4bfe-455a-b6b7-8c392e444c14", "5bda1ad9-9cfc-43c4-9391-92a60a6e9de5"]
    }
]

db.Proff.insertMany(proffs)
    .then(res => console.log(res))
    .catch(e => console.log("error", e));

db.Student.insertMany(students)
    .then(res => console.log(res))
    .catch(e => console.log("error", e));

    
    