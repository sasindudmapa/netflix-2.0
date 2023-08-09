import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import MainNav from "./NavLinks/MainNav";

function Nav() {
  const [show, handleShow] = useState(false);
  const [navShowClicked, setnavShowClick] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav>
      <div className={`nav ${show && "nav__black"}`}>
        <Link to="/">
          <img
            className="nav__logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix Logo"
          />
        </Link>
        <MainNav con={navShowClicked} />
        {/* <div className="threeRows" onClick={handleNav}>
          <div className="line1"></div>
          <div className="line1"></div>
          <div className="line1"></div>
        </div> */}
      </div>
    </nav>
  );
}

export default Nav;
// {`${baseImageUrl}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
