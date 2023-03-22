import React from "react";
import Typed from "react-typed";
import "../css/Home.css";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="Home_page" id="Home">
        <div className="container">
          <h1 className="title">Nayan Agrawal</h1>
          <div className="profession">
            <span>I'm a</span>
            <span>&nbsp;</span>
            <span className="animated">
              <Typed
                strings={[
                  "Frontend Developer.",
                  "Software Developer.",
                  "Content Creator.",
                ]}
                typeSpeed={80}
                backSpeed={80}
                loop
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
