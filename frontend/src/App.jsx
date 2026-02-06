import { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [notes, setnotes] = useState([]);

  function notesdata() {
    let responce = axios.get("http://localhost:3000/api/notes").then((res) => {
      setnotes(res.data.notes);
    });
  }
  useEffect(() => {
    notesdata();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const title = event.target.title.value;
    const discription = event.target.discription.value;
    console.log(title, discription);
    axios.post("http://localhost:3000/api/notes",{
      title:title,discription:discription
    })//isme phele to api ko call karo to post ya note create karne then api ke bad koma laga ke jo data dena  h vo de do 

  }

  return (
    <>
      <main className="fullbodycover">
        <nav className="navbar">
          <h1 className="hading">notes</h1>
          <button>create notes</button>
        </nav>
        <div className="body">
          <div className="contaner">
            {notes.map((note) => {
              return (
                <div className="cont">
                  <h1 className="title">{note.title}</h1>
                  <p className="desc">{note.discription}</p>
                </div>
              );
            })}
          </div>
          <div className="addnotessec">
            <form className="notecreateform" onSubmit={handleSubmit}>
              <input name="title" type="text" placeholder="title" />
              <input name="discription" type="text" placeholder="discription" />
              <button>add note</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
