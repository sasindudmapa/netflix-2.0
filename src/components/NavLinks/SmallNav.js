import React, { useState } from "react";
import "./SmallNav.css";

function SmallNav(props) {
  const [isButtonClicked, setButtonClick] = useState(false);

  function handleClick() {
    setButtonClick(true);
  }

  function closeButton() {
    if (isButtonClicked === true) {
      setButtonClick(false);
    }
  }

  return (
    <div className="small__nav">
      <div className="burger" onClick={handleClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={`modal__bg ${isButtonClicked && "visible"}`}>
        <div className="modal">
          <h3>
            {(
              <i onClick={closeButton} className="fas fa-times closeButton"></i>
            ) || "x"}
          </h3>
          <ul>
            <li>
              <a href="/user">Account</a>
            </li>
            <li>
              <a id="middle" href="">
                Watch List
              </a>
              <li>
                <a href="">Payments</a>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SmallNav;
