// work = start server and connect to server 


require("dotenv").config()//after wrie this line  we can acces .env data anywhere 
const app = require("./src/app")
const connecttodb = require("./src/config/database")//we reure data bade connection file in our surver file 

connecttodb()//this connect to db 


app.listen(3000,()=>{
  console.log("server is running ")
})

