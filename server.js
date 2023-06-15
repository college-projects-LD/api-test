const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/landon', (req,res) => {res.send("Hello Landon")});

app.get('/ryan', (req,res) => {res.send("Hello Ryan")});

app.get('/samantha', (req,res) => {res.send("Hello Samantha")});

app.get('/grant', (req, res)=> {
    res.send("Hello Grant");
})

app.listen(port, ()=>console.log("Listening"));