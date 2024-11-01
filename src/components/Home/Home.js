import React from "react";
import Type from "./Type.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../../images/Avatar.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div className="HomePage">
      <div className="HomeText">
        <Tilt>
          <img className="Avatar" src={Avatar} alt="Ankit's Avatar" />
        </Tilt>
        <h1>Ankit Sharma</h1>
        <Type />
      </div>
    </div>
  );
};

export default Home;
