const express = require('express')
const app = express()
const path = require('path');

//passport js for google oauth
const passport = require('passport')
const port = 8000


//settings for using ejs templating
app.set('view engine', 'ejs');
// use views directory
app.set('views', path.join(__dirname, 'views'));


//routes
app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/', (req, res) => {
    res.render('home');
})
app.get('/success', (req, res) => {
    res.send("logged in ");
})
app.get('/failed', (req, res) => {
    res.send("failed");
})
// app.get('/failed', (req, res) => {
//     res.send('Failed');
// })
// app.get('/good', (req, res) => {
    //     res.send('Logged In');
    // })

// //passport js copied
// app.get('/auth/google',
//     passport.authenticate('google', { scope: ['profile', 'username'] }));

// app.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/failed' }),
//     function (req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('/');
//     });








app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})