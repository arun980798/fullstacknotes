
const express = require("express")
const noteModel = require("./models/note.model")//isse ham db me jo chezz notes add karegi usko use karne leke ayenge 
const cors = require("cors");
const path = require("path")
const app = express();
app.use(cors())
app.use(express.static("./public"))//ye middleware  html ko css or js deta h or  ye iss fole ke andar ka code or file ko publiclaay provide karte h apan baki sare file ko acces nai kar sakte h 
app.use(express.json()) // ye middle ware h jo req lete me help karta h 



// api of notes

//create new notes save data in mongo db
app.post("/api/notes", async (req, res) => {
  const { title, discription } = req.body; //jo  req.body me se data aa raha vo destructure hoga or title or discription alagh alagh hogi 

  // isme db opration kar rahe h jo new note create ka opration h isme new note banega .create se 
  const note = await noteModel.create({
    title, discription // jo title or discription alagh keya tha vo pass kar rahe h 
  })

  res.status(201).json({
    message: "note created ",
    note
  })// isme apan response sand kar rahe h ke data save ho gya h 

})//to post notes 



//fetch all data from the db give to frontend 
app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "notes fetched ",
    notes
  })

})


// api of the delete notes from db 
app.delete("/api/notes/:id", async (req, res) => {
  //we take id in url and then we store id in variable 
  const id = req.params.id;//idd variable 
  await noteModel.findByIdAndDelete(id)//this is a methord in which db opration like findby id and delete will run 

  res.status(200).json({
    message: "note dleleted"
  })

})





// api of update notes 
app.patch("/api/notes/:id", async (req, res) => {
  //we take id in url 
  const id = req.params.id;//store id in variable 
  const updatednote = req.body
  const { title, discription } = req.body; // our updated data will come in body section so we destructire it and then we take all data which we want title discription 

  await noteModel.findByIdAndUpdate(id, { title, discription }); //this pass data to db and we pass pass id then we pass things which we want to update in object 

  res.status(200).json({
    message: "notes fetched ",
    updatednote
  })
})
console.log(path.join(__dirname, "..", "public", "assets", "index.html"))

app.use('*name', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "assets", "index.html"));
})





module.exports = app