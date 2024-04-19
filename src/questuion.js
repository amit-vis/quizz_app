// question data
const questions = [
    {
        id:1,
        question:"What is Node.js primarily used for?",
        options: ['Creating server-side applications', 
        'Developing client-side scripts', 
        'Programming embedded systems', 
        'Designing user interfaces'],
        answer: "Creating server-side applications",
    },
    {
        id:2,
        question:"What does the Node.js event loop do?",
        options: ["Executes asynchronous callbacks", 
        "Manages all user events in an application", 
        "Directly handles thread management", 
        "Optimizes synchronous code execution"],
        answer: "Executes asynchronous callbacks"
    },
    {
        id:3,
        question:"Which of the following core modules is used to create a HTTP server in Node.js?",
        options:['http', 'url', 'fs', 'query'],
        answer: "http"
    },
    {
        id:4,
        question:"How do you import a local module called math-functions using require?",
        options:["require('math-functions')", 
        "require('./math-functions')", 
        "import math-functions from 'math-functions'", 
        "include './math-functions'"],
        answer: "require('./math-functions')"
    },
    {
        id:5,
        question:"What is a callback function in Node.js?",
        options:["A function that executes synchronously", 
        "A function passed as an argument to another function",
        "A function that calls itself", 
        "A function that can only be used once"],
        answer: "A function passed as an argument to another function"
    },
    {
        id:6,
        question:"What is npm?",
        options:["Node.js performance monitor",
        "Node.js package manager", "Network protocol module", "Node.js protocol manager"],
        answer: "Node.js package manager"
    },
    {
        id:7,
        question:"What is callback hell?",
        options:["A specific error in Node.js", 
        "A large number of callbacks nested inside each other", 
        "A library in Node.js for handling requests", "The Node.js debugger"],
        answer: "A large number of callbacks nested inside each other"
    },
    {
        id:8,
        question:"Which method is used to read files asynchronously in Node.js?",
        options:["fs.readFile", "fs.readFileSync", "fs.writefile","fs.writeFileSync"],
        answer: "fs.readFile"
    },
    {
        id:9,
        question:"What is an EventEmitter in Node.js?",
        options: ["A module that allows you to manage events",
                "A function that emits the events in an application",
                "A global variable accessible by any module",
                "A type of stream"],
        answer: "A module that allows you to manage events"
    },
    {
        id:10,
        question:"In Node.js, what will process.nextTick() do?",
        options:["Immediately terminate the current process", 
                "Delay a function until the next loop iteration",
                "Call a function after a set amount of milliseconds",
                "Add a function to the 'next tick' queue"],
        answer: "Add a function to the 'next tick' queue"
    }
]

module.exports = questions;