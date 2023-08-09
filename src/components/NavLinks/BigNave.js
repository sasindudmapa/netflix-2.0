import React from "react";
import "./BigNav.css";
import { Link } from "react-router-dom";

function BigNave() {
  return (
    <div className="">
      <ul className="nav__list">
        <li>Account</li>
        <li>Watch List</li>
        <li>Payments</li>
      </ul>
    </div>
  );
}

export default BigNave;

{
  /* <Link to="/user">Account</Link>; */
}
