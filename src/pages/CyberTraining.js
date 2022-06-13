import { useState } from "react";
import Card from "../uikit/simple/Card";
import Pagination from "../uikit/simple/Pagination";
import Typography from "../uikit/simple/Typography";

const testingArray = [
  {
    name: "Web Security 1",
    title: "Web Security 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
  {
    name: "Web Security 1",
    title: "Web Security 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
  {
    name: "Web Security 1",
    title: "Web Security 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
  {
    name: "Web Security 1",
    title: "Web Security 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
  {
    name: "Web Security 2",
    title: "Web Security 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
  {
    name: "Web Security 2",
    title: "Web Security 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
  {
    name: "Web Security 2",
    title: "Web Security 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
  {
    name: "Web Security 2",
    title: "Web Security 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
  {
    name: "Web Security 3",
    title: "Web Security 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
  {
    name: "Web Security 3",
    title: "Web Security 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
  {
    name: "Web Security 3",
    title: "Web Security 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
  {
    name: "Web Security 3",
    title: "Web Security 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
    src: "/courses",
    lessons: 5,
  },
];

const CyberTraining = () => {
  const [recommendedStartPoint, setRecommendedStartPoint] = useState(null);
  const [recommendedEndPoint, setRecommendedEndPoint] = useState(null);

  const [popularStartPoint, setPopularStartPoint] = useState(null);
  const [popularEndPoint, setPopularEndPoint] = useState(null);

  return (
    <div className="cyber-training">
      <div className="sector columns gap-50">
        <div className="columns gap-10" style={{ gap: "20px" }}>
          <Typography varient="section-content">Recommended paths</Typography>
          <div className="cards-grid-1">
            {testingArray
              .slice(recommendedStartPoint, recommendedEndPoint)
              .map((card, index) => (
                <Card
                  key={index}
                  picture={card.picture}
                  title={card.title}
                  name={card.name}
                  lessons={card.lessons}
                  src={card.src}
                />
              ))}
          </div>
        </div>
        <div className="rows justify-center">
          <Pagination
            startPointSetter={setRecommendedStartPoint}
            endPointSetter={setRecommendedEndPoint}
            array={testingArray}
            amount={4}
          />
        </div>

        <div className="columns gap-10" style={{ gap: "20px" }}>
          <Typography varient="section-content">Popular Courses</Typography>
          <div className="cards-grid-1">
            {testingArray
              .slice(popularStartPoint, popularEndPoint)
              .map((card, index) => (
                <Card
                  key={index}
                  picture={card.picture}
                  title={card.title}
                  name={card.name}
                  lessons={card.lessons}
                  src={card.src}
                />
              ))}
          </div>
        </div>
        <div className="rows justify-center">
          <Pagination
            startPointSetter={setPopularStartPoint}
            endPointSetter={setPopularEndPoint}
            array={testingArray}
            amount={4}
          />
        </div>
      </div>
    </div>
  );
};

export default CyberTraining;
