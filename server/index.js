const express = require('express')  //loading express framework
const app = express()
const passport = require("passport"); // require passport for authentication and authorization
require('./auth') //load auth files
const session = require("express-session"); // for storing logged in user info
const path = require('path');   
const mongoose = require('mongoose'); //mongoose for mongo db
const port = 8000



//settings for using express sessions
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//settings for using ejs templating
app.set('view engine', 'ejs');
// use views directory
app.set('views', path.join(__dirname, 'views'));




//mongoDB connection
async function connectDB() {
    await mongoose.connect('mongodb://0.0.0.0:27017/projectPortal'); //port = 27017 and database = projectPortal
}
connectDB()
    .then(() => {
        console.log("Connection Opened");
    }).
    catch(e => {
        console.log('Error', e);
    });


//routes
const firstTime = require('./routes/basicRoutes');
const sRoutes = require('./routes/sRoutes');
const pRoutes = require('./routes/pRoutes');
const aRoutes = require('./routes/aRoutes');
const authRoutes = require('./routes/authRoutes');
app.get('/', (req, res) => {
    res.send("<h1>HOME</h1><ul> ROUTES ARE : <li>/login</li> <li>/profile-reg</li> <li>/s/:roll-number/dashboard/</li> <li>/s/:roll-number/profile/</li> <li>/p/:proff-id/dashboard </li> <li>/p/:proff-id/selected-students</li> <li>/a/dashboard  </li> <li>/a/faculties</li></ul>")
})
app.use('/', firstTime);
app.use('/s', sRoutes); // use the sRoutes.js file to handle endpoints starting with /s 
app.use('/p', pRoutes);
app.use('/a', aRoutes);
app.use('/auth', authRoutes);



app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})