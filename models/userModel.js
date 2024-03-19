const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
username :{
    type : String,
    trim:true,
    unique : true,
    required:[true , "User name  is required"],
    minLength: [3,"Username should be at least 3 characters"]

} , 

email: {
    type :String,
    lowercase : true,
    required : [true,"Please provide your email address"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid e-mail address'],
   
},
password:{
    type : String,
    required : [true,"Password is required"],
    minLength: [8,"Your password must be at least  8 characters long."],
    select: false,
     // this means that the field will not be included in the response of any query (read or write),
  maxLenghth:[15,"Your password must be at most 15 characters long. "]
},

}, 
{timestamps:true},
// we add on to the schema method called
)

const user = mongoose.model("user",userModel);
module.exports = user;