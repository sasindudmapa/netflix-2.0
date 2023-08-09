import React from "react";
import "./Details.css";
import Nav from "../Nav";
import store from "../utils/ReduxStore/store";

const baseURL = "https://image.tmdb.org/t/p/original";

function Details() {
  // console.log("Details store is ", store.getState().poster);
  const WidthNow = window.innerWidth;
  const poster = store.getState().poster;
  console.log("Store in detailed page is ", store.getState());
  return (
    <div className="movie">
      <Nav />
      <div
        className="movie__content"
        style={{
          backgroundImage: `url(${baseURL}${poster})`,
        }}
      >
        {/* {WidthNow < 900 ? (
          <img className="movie__poster" src={`${baseURL}${poster}`} alt="" />
        ) : null} */}
        <div className="movie__details">
          <h1>{store.getState().title}</h1>
          <div className="buttons">
            <button className="playButton">
              <i className="fas fa-play"></i> Play
            </button>
            <button className="trailerButton">
              <i className="far fa-play-circle"></i> Trailer
            </button>
          </div>
          <div className="movie__des">
            <p>{store.getState().des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
