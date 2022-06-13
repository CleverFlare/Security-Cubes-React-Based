import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "../uikit/simple/Card";
import Pagination from "../uikit/simple/Pagination";
import Typography from "../uikit/simple/Typography";

const testingArray = [
  {
    title: "Web Security 1",
    name: "Web Security 1",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },
  {
    title: "Web Security 1",
    name: "Web Security 1",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },
  {
    title: "Web Security 1",
    name: "Web Security 1",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },
  {
    title: "Web Security 1",
    name: "Web Security 1",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },

  {
    title: "Web Security 2",
    name: "Web Security 2",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },
  {
    title: "Web Security 2",
    name: "Web Security 2",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },
  {
    title: "Web Security 2",
    name: "Web Security 2",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },
  {
    title: "Web Security 2",
    name: "Web Security 2",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },

  {
    title: "Web Security 3",
    name: "Web Security 3",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },
  {
    title: "Web Security 3",
    name: "Web Security 3",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },
  {
    title: "Web Security 3",
    name: "Web Security 3",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },
  {
    title: "Web Security 3",
    name: "Web Security 3",
    src: "/lessons",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    lessons: 5,
  },
];

const Courses = () => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);

  return (
    <div className="sector columns gap-50" style={{ gap: "20px" }}>
      <Link to="/training" style={{ color: "white", textDecoration: "none" }}>
        &lt; All Paths
      </Link>
      <Typography varient="section-content">Web Security Knowledge</Typography>
      <Typography varient="caption">Web Security Knowledge</Typography>
      <Typography varient="button-labels">Courses</Typography>
      <hr style={{ width: "100%" }} />
      <div className="cards-grid-1">
        {testingArray.slice(startPoint, endPoint).map((card, index) => (
          <Card
            key={index}
            title={card.title}
            name={card.name}
            picture={card.picture}
            lessons={card.lessons}
            src={card.src}
          />
        ))}
      </div>
      <div className="rows justify-center">
        <Pagination
          startPointSetter={setStartPoint}
          endPointSetter={setEndPoint}
          array={testingArray}
          amount={4}
        />
      </div>
    </div>
  );
};

export default Courses;
