//ye file apne surver ko db se connect karte h 


const mongoose  = require("mongoose"); //t requre the mongoose package 



function connecttodb(){ // this functon conect to db 
  // WE ACCES THE ENV URI WRITE SAME IN .ENV FILE  
 mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("connected to db ")
  })

}


module.exports = connecttodb