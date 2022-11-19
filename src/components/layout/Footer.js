import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <p className={classes.name}>
        CHANUKA GOONETILLEKE <span className={classes.date}>@{year}</span>
      </p>
    </footer>
  );
};

export default Footer;
