require("dotenv").config({path:"./.env"})
const express = require("express");
const app = express();
// database connection
require("./models/dbconnections").dbconnection(); 
const userRouter = require("./router/userRouter")

//logger
const logger = require("morgan")
app.use(logger("tiny"));
// body pasrser

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//routes
app.use("/api/user",userRouter)
// http://localhost:8080/api/user
// http://localhost:8080/api/user/create


// server
app.listen(process.env.PORT ,()=>{
    console.log(`The Server is running on port ${process.env.PORT}`);
});