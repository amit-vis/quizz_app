// REQUIRE ALL the neccessary modules
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

const quizzController = require('./src/quizzController')

// use all the neccessary thing for the app
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// showing the html page
app.get('/', (req, res)=>{
    res.sendFile('index.html', {root: './public/views'})
})

// set the route for the get the question and post the answer
app.get('/quizz', quizzController.getquestion)
app.post('/answer', quizzController.submitAnswer)

// setting the server and listening the port
app.listen(port, (err)=>{
    if(err){
        console.log("server is not listening the port", err)
    }
    console.log("server is successfull listen the port", port)
})