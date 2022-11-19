import React from "react";

import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <a href="/" className="siteTitle">
        Home
      </a>
      <ul>
        <li>
          <a href="/schedule">Schedule</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
