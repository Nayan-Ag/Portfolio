import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import style from "../css/Experience.css";
import constant from "../files/Constant.json";

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="exp" id="experience">
      <div className="heading_con">
        <h1 className="heading">Where I've Worked</h1>
      </div>

      <div className="expcontainer">
        <div className="container_left">
          {constant.experiences.map((experience, index) => (
            <div
              key={index}
              className="exptab"
              onClick={() => setCurrentIndex(index)}
            >
              {experience.company}
            </div>
          ))}
        </div>

        <div className="container_right">
          <h1 className="companytitle">
            {constant.experiences[currentIndex].title}{" "}
            <a
              href={constant.experiences[currentIndex].link}
              target="_blank"
              rel="noreferrer"
            >
              @ {constant.experiences[currentIndex].company}
            </a>
          </h1>
          <p className="duration">
            {constant.experiences[currentIndex].duration}
          </p>
          {constant.experiences[currentIndex].desc.map((point) => (
            <p className="desc">
              {" "}
              <PlayArrowIcon /> {point}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
