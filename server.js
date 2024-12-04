const express = require("express")
const db = require("./db.js")
const app = express();
const instructor = require("./model/instructor.js");
const student = require("./model/student.js");
const course = require("./model/course.js");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("hello")
})


app.listen(3000, ()=>{
    console.log("server is running at 3000")
})

app.post('/student', async (req, res) => {
    try {
        const data = req.body;
        const newStudent = new student(data);
        const response = await newStudent.save();
        console.log("Data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/student',  async (req, res) => {
    try {
        const data = await student.find();
        console.log("Data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})



app.post('/instructor', async (req, res) => {
    try {
        const data = req.body;
        const newinstructor = new instructor(data);
        const response = await newinstructor.save();
        console.log("Data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/instructor',  async (req, res) => {
    try {
        const data = await instructor.find();
        console.log("Data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.post('/course', async (req, res) => {
    try {
        const data = req.body;
        const newcourse = new course(data);
        const response = await newcourse.save();
        console.log("Data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.get('/course',  async (req, res) => {
    try {
        const data = await course.find();
        console.log("Data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})