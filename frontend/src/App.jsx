import { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [notes, setnotes] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  let [pach, setpach] = useState("");
  let [titlevalue, settitlevalue] = useState("");
  let [discriptionvalueo, setdiscriptionvalueo] = useState("");

  function notesdata() {
    let responce = axios.get("http://localhost:3000/api/notes").then((res) => {
      setnotes(res.data.notes);
    });
  }

  function upnote(note) {
    setpach(note._id);
    console.log(pach)
    settitlevalue(note.title);
    setdiscriptionvalueo(note.discription);
  }

 
  const deleteData = async (id) => {
    const response = await fetch(`http://localhost:3000/api/notes/${id}`, {
      method: "DELETE",
    });
    notesdata();
  }; //delete api

  useEffect(() => {
    notesdata();
  }, [submitted]); //useeffect

  function handleSubmit(event) {
    event.preventDefault();

    const title = event.target.title.value;
    const discription = event.target.discription.value;
    console.log(title, discription);


if(pach){

    axios.patch(`http://localhost:3000/api/notes/${pach}`, {
        "title" :titlevalue,
        "discription" :discriptionvalueo,
      }).then((res) => {
        console.log(res.data);
        setdiscriptionvalueo("");
        settitlevalue("");
        setSubmitted(!submitted);
      });
  
}

    else{
      axios.post("http://localhost:3000/api/notes", {
        title: title,
        discription: discription,
      }) //isme phele to api ko call karo to post ya note create karne then api ke bad koma laga ke jo data dena  h vo de do
      .then((res) => {
        console.log(res.data);
        setdiscriptionvalueo("");
        settitlevalue("");
        setSubmitted(!submitted);
      });
    }
  } //submi button

  return (
    <>
      <main className="fullbodycover">
        <nav className="navbar">
          <h1 className="hading">notes</h1>
          <button>create notes</button>
        </nav>
        <div className="body">
          <div className="contaner" onDoubleClick={()=>{ }}>
            {notes.map((note) => {
              return (
                <div
                  className="cont"
                  onDoubleClick={() => {
                    upnote(note);
                  }}
                >
                  <button
                    id={note._id}
                    onClick={() => deleteData(note._id)}
                    className="deleteelemet"
                  >
                    delete
                  </button>
                  <h1 className="title">{note.title}</h1>
                  <p className="desc">{note.discription}</p>
                </div>
              );
            })}
          </div>
          <div className="addnotessec">
            <form className="notecreateform" onSubmit={handleSubmit}>
              <input
                required
                name="title"
                type="text"
                value={titlevalue}
                onChange={(e) => settitlevalue(e.target.value)}
                placeholder="title"
              />
              <input
                required
                name="discription"
                value={discriptionvalueo}
                onChange={(e) => setdiscriptionvalueo(e.target.value)}
                type="text"
                placeholder="discription"
              />
              <button>add note</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
