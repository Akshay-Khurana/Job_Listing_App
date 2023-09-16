const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// create an express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// connect with mongodb
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})