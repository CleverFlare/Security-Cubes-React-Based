import { Link } from "react-router-dom";
import Typography from "../uikit/simple/Typography";
import FacebookSvg from "../icons/FacebookSvg";
import PlaySvg from "../icons/PlaySvg";
import TwitterSvg from "../icons/TwitterSvg";
import "./css/lessons.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Lesson = ({ name, id, watched }) => {
  return (
    <Link to={"/terminal/" + id} className="lesson">
      <div className="lesson-button-wrapper">
        <PlaySvg />
        <p style={{ fontWeight: "bold" }}>{name}</p>
      </div>
      {watched && <div className="watched">✓</div>}
    </Link>
  );
};

const Lessons = ({ token }) => {
  const [currentHoveredStar, setCurrentHoveredStar] = useState(0);
  const stars = Array(5).fill(0);
  const [lessonsData, setLessonsData] = useState(null);
  const [progress, setProgress] = useState(0);
  const { lesson } = useParams();

  useEffect(() => {
    fetch(
      "https://securitycubes.com/api/challangeDetail/?Challangeid=" + lesson,
      { headers: { Authorization: "Token " + token } }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLessonsData(data);
        setProgress(
          (data[0].examples.filter((example) => example.IsSolved).length /
            data[0].examples.length) *
            100
        );
      });
  }, []);

  return (
    <div id="lessons">
      <div className="course-header">
        <Typography varient="section-content" style={{ fontWeight: "bold" }}>
          {lessonsData && lessonsData[0].BigTitle}
          {!lessonsData && "Loading..."}
        </Typography>
        <Typography varient="labels" style={{ fontSize: "13px" }}>
          {lessonsData && lessonsData[0].Hint}
          {!lessonsData && "Loading..."}
        </Typography>
        <div className="rows space-between align-center gap-30" id="wrapper">
          <Link to="" className="start-button">
            <PlaySvg /> Start Course
          </Link>
          <div className="progress-wrapper">
            <p>progress</p>
            <div
              className="progress"
              style={{ "--progress": progress + "%" }}
            ></div>
            <p>{progress}%</p>
          </div>
        </div>
      </div>
      <div className="lessons-section">
        <div className="lessions-header">
          <p>Table of content</p>
        </div>
        <div className="lessions-table">
          {lessonsData &&
            lessonsData[0].examples.map((item, index) => (
              <Lesson
                key={index}
                id={item.id}
                name={item.title}
                watched={item.IsSolved}
              />
            ))}
          {!lessonsData && (
            <p
              style={{
                color: "black",
                margin: "10px 30px",
                fontWeight: "bold",
              }}
            >
              Loading...
            </p>
          )}
        </div>
      </div>
      <div className="course-details">
        <div className="description">
          <h4>Description</h4>
          <p>
            {lessonsData && lessonsData[0].ChallangeDescription}
            {!lessonsData && "Loading..."}
          </p>
        </div>
        <div className="info">
          <h4>Course Info</h4>
          <div className="rows space-between align-center">
            <p style={{ fontSize: ".8rem", fontWeight: "bold" }}>Level</p>
            <p style={{ color: "#afafaf" }}>
              {lessonsData
                ? (lessonsData[0].Easy && "Easy") ||
                  (lessonsData[0].Hard && "Hard") ||
                  (lessonsData[0].Medium && "Medium")
                : "Loading..."}
            </p>
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
            <p style={{ color: "#afafaf" }}>
              {lessonsData && lessonsData[0].Duration + " " + "mins"}
              {!lessonsData && "Loading..."}
            </p>
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

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(Lessons);

// [
//   {
//       "id": 3,
//       "BigTitle": "BurpSuite",
//       "SmallTitle": "burp2",
//       "ChallangeDescription": "bla bla bla bla bla",
//       "Hint": "open burp from terminal",
//       "Easy": true,
//       "Medium": false,
//       "Hard": false,
//       "Duration": "40",
//       "examples": [
//           {
//               "id": 5,
//               "title": "using burp",
//               "IsSolved": true,
//               "IsMarked": false,
//               "markId": null
//           }
//       ],
//       "paid": true
//   }
// ]
