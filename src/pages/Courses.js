import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card, { SkeletonCard } from "../uikit/simple/Card";
import Pagination from "../uikit/simple/Pagination";
import Typography from "../uikit/simple/Typography";
import { useParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const Courses = ({ token }) => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [lessons, setLessons] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://securitycubes.com/api/challanges/?trackid=" + id, {
      headers: {
        Authorization: "Token" + " " + token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLessons(data);
      });
  }, []);

  return (
    <div className="sector columns gap-50" style={{ gap: "20px" }}>
      <Link to="/training" style={{ color: "white", textDecoration: "none" }}>
        &lt; All Paths
      </Link>
      <Typography varient="section-content" style={{ fontWeight: "bold" }}>
        Web 1
      </Typography>
      <Typography varient="caption">Web 2</Typography>
      <Typography varient="button-labels">Courses</Typography>
      <hr
        style={{
          width: "100%",
          border: "none",
          backgroundColor: "#5a5a5a",
          height: "2px",
        }}
      />
      <div className="cards-grid-1">
        {lessons &&
          lessons
            .slice(startPoint, endPoint)
            .map((lesson, index) => (
              <Card
                key={index}
                title={lesson.ChallangeName}
                name={lesson.Description}
                picture={lesson.ChallangePhoto}
                lessons={lesson.num}
                src={"/training" + "/" + id + "/" + lesson.id}
              />
            ))}
        {lessons.length <= 0 && (
          <>
            <SkeletonCard type="track" />
            <SkeletonCard type="track" />
            <SkeletonCard type="track" />
            <SkeletonCard type="track" />
          </>
        )}
      </div>
      <div className="rows justify-center">
        {!lessons.length <= 0 && (
          <Pagination
            startPointSetter={setStartPoint}
            endPointSetter={setEndPoint}
            array={lessons}
            amount={4}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(Courses);
