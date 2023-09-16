const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// create an express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// connect with mongodb
mongoose
    .connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology,
    })
    .then(()=>{
        console.log("db connected");
    })
    .catch(()=>{
        console.log("failed to connect",error);
    })

// health api 
app.get("/health",(req,res)=>{
    res.status(200).json({
        service:"job-listing-server",
        status : "active",
        time : new Date(),
    })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})
