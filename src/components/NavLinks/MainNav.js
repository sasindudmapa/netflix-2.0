import React from "react";
import BigNave from "./BigNave";
import SmallNav from "./SmallNav";

function MainNav(props) {
  if (window.innerWidth >= 900) {
    console.log(window.innerWidth);
    return <BigNave />;
  } else if (window.innerWidth < 900) {
    return <SmallNav con={props.con} />;
  }
}

export default MainNav;
