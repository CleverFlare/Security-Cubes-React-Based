import { Link } from "react-router-dom";
import Typography from "../uikit/simple/Typography";
import FacebookSvg from "../icons/FacebookSvg";
import PlaySvg from "../icons/PlaySvg";
import TwitterSvg from "../icons/TwitterSvg";
import "./css/lessons.css";
import { useState } from "react";

const Lesson = ({ name, src, watched }) => {
  return (
    <Link to={src} className="lesson">
      <div className="lesson-button-wrapper">
        <PlaySvg />
        <p style={{ fontWeight: "bold" }}>{name}</p>
      </div>
      {watched && <div className="watched">✓</div>}
    </Link>
  );
};

const Lessons = () => {
  const [currentHoveredStar, setCurrentHoveredStar] = useState(0);
  const stars = Array(5).fill(0);
  return (
    <div id="lessons">
      <div className="course-header">
        <Typography varient="section-content">
          Introduction to information security
        </Typography>
        <Typography varient="labels" style={{ fontSize: "13px" }}>
          this course is a part of Cloud security knowledge path
        </Typography>
        <div className="rows space-between align-center">
          <Link to="" className="start-button" style={{ marginRight: "auto" }}>
            <PlaySvg /> Start Course
          </Link>
          <div className="progress-wrapper" style={{ marginLeft: "auto" }}>
            <p>progress</p>
            <div className="progress"></div>
            <p>0%</p>
          </div>
        </div>
      </div>
      <div className="lessons-section">
        <div className="lessions-header">
          <p>Table of content</p>
        </div>
        <div className="lessions-table">
          <Lesson name="Arabic" src="/terminal" watched={true} />
          <Lesson name="Arabic" src="/terminal" watched={true} />
        </div>
      </div>
      <div className="course-details">
        <div className="description">
          <h4>Description</h4>
          <p>
            An information-gathering mission in cybersecurity is the act of
            collecting information about a potential target. This could be done
            for penetration testing, network security monitoring or other
            cybersecurity tasks.
          </p>
        </div>
        <div className="info">
          <h4>Course Info</h4>
          <div className="rows space-between align-center">
            <p style={{ fontSize: ".8rem", fontWeight: "bold" }}>Level</p>
            <p style={{ color: "#afafaf" }}>Easy</p>
          </div>
          <hr />
          <div className="rows space-between align-center">
            <p style={{ fontSize: ".8rem", fontWeight: "bold" }}>Rating</p>
            <span className="stars-wrapper">
              {stars.map((star, index) => (
                <span
                  key={index}
                  tabIndex={0}
                  onMouseEnter={() => setCurrentHoveredStar(index + 1)}
                  onMouseLeave={() => setCurrentHoveredStar(0)}
                  className={currentHoveredStar >= index + 1 ? "stared" : ""}
                >
                  ★
                </span>
              ))}
            </span>
          </div>
          <hr />
          <div className="rows space-between align-center">
            <p style={{ fontSize: ".8rem", fontWeight: "bold" }}>Duration</p>
            <p style={{ color: "#afafaf" }}>60 mins</p>
          </div>
        </div>
        <div className="share">
          <div className="rows space-between align-center">
            <h4>Share</h4>
            <div className="social-media-wrapper">
              <Link to="">
                <TwitterSvg />
              </Link>
              <Link to="">
                <FacebookSvg />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
