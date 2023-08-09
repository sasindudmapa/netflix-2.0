import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import "./Row.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Details from "../Routes/Details";
import HomePage from "./HomePage";
import store from "../utils/ReduxStore/store";
import reducer from "../utils/ReduxStore/reducer";

const baseImageUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  // const { id } = useParams();
  // console.log("id is ", id);
  const [movies, setMovies] = useState([]);
  const [isClicked, setClick] = useState(false);
  const [movieName, setMovieName] = useState();

  const history = useHistory();

  let { path, url } = useRouteMatch(); //Default path(Main Path)

  // console.log("Path is ", path);

  useEffect(() => {
    // console.log("Movie name is ", isClicked);
  }, [isClicked]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request.data);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // function makingMovieRoute(movie) {
  // <Router>
  //   <Switch>
  //     <Route path={`${path}/:${movie.name || movie.original_title}`}>
  //       <Details />
  //     </Route>
  //   </Switch>
  // </Router>;
  // console.log(`${path}/:${movie.name || movie.original_title}`);
  // }

  // console.log(path);
  console.log("windows inner width is ", window.innerWidth);
  let WidthNow = window.innerWidth;

  function handleClick(movie) {
    store.dispatch({
      type: "Add",
      title: movie.name || movie.original_title,
      des: movie.overview,
      poster: movie.backdrop_path || movie.poster_path,
      mobilePoster: movie.poster_path,
    });
    console.log("Redux title in row file is ", store.getState().title);
    // console.log(movieName);
  }

  <Router>
    <Switch>
      <Route path={`${path}/movie/:id`}>
        <Details />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>;

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => {
              setClick(true);
              handleClick(movie);
              // console.log(movie);

              history.push(`/movie/${movie.id || movie.original_title}`);
            }}
            key={movie.id}
            className={`row__poster
            ${isLargeRow && "row__posterLarge"}`}
            src={`${baseImageUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}
export default Row;

// results[0].original_title;
// results[0].poster_path

/* className={`row__poster 
            ${isLargeRow && "row__posterLarge"}`}*/

// onClick={() => {
//   <Router>
//     <Link to="/movie"></Link>
//     <Switch>
//       <Route path="/movie">
//         <Details name={movie.name || movie.original_title} />
//       </Route>
//     </Switch>
//   </Router>;
//   console.log(movie);
// }}

{
  /* <img
  key={movie.id}
  className={`row__poster
            ${isLargeRow && "row__posterLarge"}`}
  src={`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
  alt={movie.name}
/>; */
}
