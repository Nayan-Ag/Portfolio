import React from "react";
import "../App.css";
import "../css/About.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";

const About = () => {
  return (
    <div className="About_page" id="About">
      <div className="about_content">
        <div className="title">
          <h1>About Me</h1>
        </div>
        <div className="about">
          <p>
            Hey, Hi I'm <span> Nayan </span> and I am a Creator, Developer & Designer. I
            create content on <span> YouTube </span> and post some cool photos about current
            bike trend.. Also, I'm a  <span>Frontend developer </span> specialising in <span> React Js </span> and Next Js. I'm also a digital artist by
            night, I like to poke around with colours and bring my ideas to
            life.
          </p>
          <br />
          <p>
            Currently I'm a Pre-Final year student pursuing B.Tech in Computer
            Science and Engineering at <span> Vellore Institute Of Technology, Bhopal, India </span>. I
            have built accessible, inclusive products at start-ups like Raven &
            DS Dairy Systems. Also a community evangelist currently leading the
            local GDSC (Google Developers Club) chapter at my university with
            over 1K+ community members.
          </p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ul>
          <li>
            <i>
              <AiFillHtml5 />
            </i>{" "}
            <span>HTML</span>
          </li>
          <li>
            <i>
              <FaCss3Alt />
            </i>{" "}
            <span>CSS</span>
          </li>
          <li>
            <i>
              <FaReact />
            </i>{" "}
            <span>React Js</span>
          </li>
          <li>
            <i>
              <SiMysql />
            </i>{" "}
            {/* <span>MySql</span> */}
          </li>
          <li>
            <i>
              <DiJavascript1 />
            </i>{" "}
            {/* <span>JavaScript</span> */}
          </li>
          <li>
            <i>
              <DiJava />
            </i>{" "}
            <span>Java</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
