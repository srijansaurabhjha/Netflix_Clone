import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./Header.js";
import { request } from "./Api.js";
import axios from "axios";
import Home from "./Home.js";
import Row from "./Row.js";
const App = () => {
  const [popular, setPopular] = useState([]);
  const [horror, setHorror] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [action, setAction] = useState([]);
  const image_base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3${request.fetchTrending}`)
      .then((res) => setPopular(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3${request.fetchHorrorMovies}`)
      .then((res) => setHorror(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3${request.fetchNetflixOriginals}`)
      .then((res) => setNetflixOriginals(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3${request.fetchActionMovies}`)
      .then((res) => setAction(res.data.results));
  }, [setPopular, setHorror, setNetflixOriginals, setAction]);

  return (
    <div className="app">
      <Header />
      <Home />
      <h3>{"Popular On NetFlix"}</h3>
      <div className="app_row">
        {popular.map((popular) => (
          <div>
            <Row img={`${image_base_url}${popular.poster_path}`} />
          </div>
        ))}
      </div>
      <h3>{"Horror Movies"}</h3>
      <div className="app_row">
        {horror.map((horror) => (
          <div>
            <Row img={`${image_base_url}${horror.poster_path}`} />
          </div>
        ))}
      </div>
      <h3>{"Netflix Originals"}</h3>
      <div className="app_row">
        {netflixOriginals.map((netflixOriginals) => (
          <div>
            <Row img={`${image_base_url}${netflixOriginals.poster_path}`} />
          </div>
        ))}
      </div>
      <h3>{"Action"}</h3>
      <div className="app_row">
        {action.map((action) => (
          <div>
            <Row img={`${image_base_url}${action.poster_path}`} />
          </div>
        ))}
      </div>
      <div className="footer">
        <p>Copyright &copy; Srijan Saurabh Jha</p>
      </div>
    </div>
  );
};

export default App;
