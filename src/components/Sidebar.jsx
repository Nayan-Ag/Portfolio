import React from "react";
import Logo from "../images/logo_img.jpg";
import "../css/sidebar.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="image">
        <img src={Logo} alt="" />
        <h1>Nayan Agarwal</h1>
      </div>
      <div className="link">
        <ul className="link_items">
          <li>
            <a href="https://www.instagram.com/nayan_.agarwal/" target="_blank">
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/Nayan-Ag" target="_blank">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/Nayan_0403/" target="_blank">
              <SiLeetcode />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nayan-agarwal-46b1a9234/"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Nayan_ag_2003" target="_blank">
              <FiTwitter />
            </a>
          </li>
        </ul>
      </div>
      <div className="menu">
        <ul className="menu_items">
          <li>
            <a href="#Home">
              <i>
                <AiOutlineHome />
              </i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#About">
              <i>
                <AiOutlineUser />
              </i>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#experience">
              <i>
                <AiOutlineHistory />
              </i>
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a href="#Portfolio">
              <i>
                <BsBriefcase />
              </i>
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#Contact">
              <i>
                <AiOutlineMail />
              </i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="resume_button">
        <a href="https://drive.google.com/file/d/1bLqcLw7jvGeQPIQFENXzboWVjfsoOyom/view?usp=share_link" target="_blank"><button>Resume</button></a>
      </div>
    </div>
  );
};

export default Sidebar;
