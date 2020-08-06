import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>VillageDukaan Administration</h1>
    <p>React, Redux and React Router Setup for VillageDukaan apps</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
