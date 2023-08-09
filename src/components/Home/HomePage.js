import React from "react";
import Row from "./Row";
import requests from "../utils/requests";
import Nav from "../Nav";
import Banner from "./Banner";

function HomePage() {
  //loged path = /
  return (
    <div>
      <Nav />
      <Banner />
      {/* <Row
        isLargeRow={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      /> */}
      <Row
        isLargeRow={window.innerWidth > 900 ? false : true}
        title="Trending Now"
        fetchUrl={requests.fetchingTrending}
      />
      {/* <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMoves} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Horror Moives" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default HomePage;
