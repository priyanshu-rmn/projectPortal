const express = require('express')
const app = express()
const path = require('path');

const port = 8000


//settings for using ejs templating
app.set('view engine', 'ejs');
// use views directory
app.set('views', path.join(__dirname, 'views'));


//mongoose for mongo db
const mongoose = require('mongoose');
//mongoDB connection
async function connectDB() {
    await mongoose.connect('mongodb://0.0.0.0:27017/projectPortal');
}
connectDB().
    then(() => {
        console.log("Connection Opened");
    }).
    catch(e => {
        console.log('Error', e);
    });
    
    const db = require('./models/db');
    

//routes
const router = require('./routes/sRoutes');
const firstTime = require('./routes/first-time');
const sRoutes = require('./routes/sRoutes')
const pRoutes = require('./routes/pRoutes')
const aRoutes = require('./routes/aRoutes')
// use the s.js file to handle endpoints starting with /s 
app.get('/', (req, res) => {
    res.send("<h1>HOME</h1><ul> ROUTES ARE : <li>/login</li> <li>/profile-reg</li> <li>/s/:roll-number/dashboard/</li> <li>/s/:roll-number/profile/</li> <li>/p/:proff-id/dashboard </li> <li>/p/:proff-id/selected-students</li> <li>/a/dashboard  </li> <li>/a/faculties</li></ul>")
})
app.use('/', firstTime);
app.use('/s', sRoutes);
app.use('/p', pRoutes);
app.use('/a', aRoutes);


//passport js for google oauth
const passport = require('passport')





app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})