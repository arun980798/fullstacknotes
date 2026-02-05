import { useState ,useEffect} from "react";
import "./App.scss";
import axios from "axios";


function App() {
  const [notes, setnotes] = useState([]);
  
async function getData() {
  try {
    let responce = await axios.get("http://localhost:3000/api/notes/");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
getData()


  return (
    <>
      <div className="contaner">
       {notes.map((note) =>{
       return  <div className="cont">
          <h1 className="title">{note.title}</h1>
          <p className="desc">{note.discription}</p>
        </div>
      })}
      </div>
      
    </>
  );
}

export default App;
