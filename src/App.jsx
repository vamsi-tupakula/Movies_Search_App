import { useState, useEffect } from "react";
import MoviePane from "./components/MoviePane";
import "./App.css";
import axios from "axios";

function App() {
  const [input, setInput] = useState("Tenet");
  const [movie, setMovie] = useState(null);

  const changeInput = (e) => {
    setInput(e.target.value);
  }

  const changeMovie = () => {
    axios.get(`http://www.omdbapi.com/?apikey=56546cdc&t=${input}`)
      .then(res => {
        if (res.data.Response === "True") {
          setMovie(res.data);
          setInput("");
        } else {
          window.alert("Movie not found");
        }
      })
  }

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=56546cdc&t=tenet`).then(res => setMovie(res.data));    
  }, [])

  return (
      <div className="container">
        <h1 className="websiteName">Movies DataBase - Search Movie Get Details</h1>
        <div className="searchBar">
          <input type="text" className="searchInput" onChange={changeInput} placeholder="Type to search....." spellCheck='false'/>
          <button className="searchBtn" onClick={changeMovie}>Search</button>
        </div>
        <MoviePane movie={movie} />
      </div>
  );
}

export default App;
