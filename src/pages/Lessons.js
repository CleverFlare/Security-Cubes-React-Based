import { Link } from "react-router-dom";
import Typography from "../components/Typography";
import PlaySvg from "../icons/PlaySvg";
import "./css/lessons.css";

const LessonItem = ({ name, src, watched }) => {
  return (
    <Link to={src} className="lesson-item">
      <div className="lesson-button-wrapper">
        <PlaySvg />
        <p style={{ fontWeight: "bold" }}>{name}</p>
      </div>
      {watched && <div className="watched">✓</div>}
    </Link>
  );
};

const Lessons = () => {
  return (
    <div id="lessons">
      <div className="section-one">
        <Typography varient="sectionContent">
          Introduction to information security
        </Typography>
        <Typography varient="labels" style={{ fontSize: "13px" }}>
          this course is a part of Cloud security knowledge path
        </Typography>
        {/* <Typography varient="labels">
          An information-gathering mission in cybersecurity is the act of
          collecting information about a potential target. This could be done
          for penetration testing, network security monitoring or other
          cybersecurity tasks.
        </Typography> */}
        <div className="flex-rows-between">
          <Link to="" className="start-button">
            <PlaySvg /> Start Course
          </Link>
          <div className="progress-wrapper">
            <p>progress</p>
            <div className="progress"></div>
            <p>0%</p>
          </div>
        </div>
      </div>
      <div className="section-two">
        <div className="courses-header">
          <p>Table of content</p>
        </div>
        <div className="courses-table">
          <LessonItem name="Arabic" src="" watched={true} />
          <LessonItem name="Arabic" src="" watched={true} />
        </div>
      </div>
      <div className="section-three">
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
          <div className="flex-rows-between">
            <p style={{ fontSize: ".8rem", fontWeight: "bold" }}>Level</p>
            <p style={{ color: "#afafaf" }}>Easy</p>
          </div>
          <hr />
          <div className="flex-rows-between">
            <p style={{ fontSize: ".8rem", fontWeight: "bold" }}>Rating</p>
            <span className="stars-wrapper">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </span>
          </div>
          <hr />
          <div className="flex-rows-between">
            <p style={{ fontSize: ".8rem", fontWeight: "bold" }}>Duration</p>
            <p style={{ color: "#afafaf" }}>60 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
