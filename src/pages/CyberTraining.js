import { useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Typography from "../components/Typography";

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
      <div className="flex">
        <div className="flex__wrapper-columns" style={{ gap: "20px" }}>
          <Typography varient="sectionContent">Recommended paths</Typography>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            startPointSetter={setRecommendedStartPoint}
            endPointSetter={setRecommendedEndPoint}
            array={testingArray}
            amount={4}
          />
        </div>

        <div className="flex__wrapper-columns" style={{ gap: "20px" }}>
          <Typography varient="sectionContent">Popular Courses</Typography>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
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
