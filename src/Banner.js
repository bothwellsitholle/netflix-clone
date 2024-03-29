import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";
import request from "./request";

const requests = request;

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let random = Math.floor(Math.random() * request.data.results.length - 1);
      setMovie(request.data.results[random]);
      return request;
    }
    fetchData();
  }, []);

  console.warn(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents ">
        <h1 className="banner_title">
          {/* Optional Chaining or training*/}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button> &nbsp;
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description ">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner

