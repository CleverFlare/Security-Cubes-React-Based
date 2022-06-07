import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Typography from "../components/Typography";

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
    <div className="flex" style={{ gap: "20px" }}>
      <Link to="/training" style={{ color: "white", textDecoration: "none" }}>
        &lt; All Paths
      </Link>
      <Typography varient="sectionContent">Web Security Knowledge</Typography>
      <Typography varient="caption">Web Security Knowledge</Typography>
      <Typography varient="buttonLabels">Courses</Typography>
      <hr style={{ width: "100%" }} />
      <div className="cards-grid-1">
        {testingArray.slice(startPoint, endPoint).map((card) => (
          <Card
            title={card.title}
            name={card.name}
            picture={card.picture}
            lessons={card.lessons}
            src={card.src}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
