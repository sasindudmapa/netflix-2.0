import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";
import "./Banner.css";

const baseImageUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchingTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  // console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseImageUrl}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;

{
  /* <img src={`${baseImageUrl}${movie.backdrop_path}`} alt="" /> */
}
