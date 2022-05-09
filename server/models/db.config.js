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
    });
