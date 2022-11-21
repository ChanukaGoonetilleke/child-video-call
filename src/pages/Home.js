import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <form action="/call">
        <input type="submit" value="Join Class" />
      </form>
    </React.Fragment>
  );
};

export default Home;
