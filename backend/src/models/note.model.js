const mongoose  = require("mongoose");  //t requre the mongoose package 


//creating schema like a structe in which our data will save in db 


const noteSchema = new mongoose.Schema({
  title:String,
  discription:String
})//ye schema hota h like a format ke kis formate or kay detail ke sath save hoga ye 1 object leta h and then uske hissab se property leta h 


//model is use to add remvoe or update any kind or chnage or opration done by model 
// modul deside karega ke data kaha jake save hoga 
const noteModel = mongoose.model("notes",noteSchema);
// ye data hoga notes ka jo noteschema formate me notes sectio me save hoga 


module.exports = noteModel ;
