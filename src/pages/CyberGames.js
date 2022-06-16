import { useState } from "react";
import Card, { SkeletonCard } from "../uikit/simple/Card";
import Pagination from "../uikit/simple/Pagination";
import Typography from "../uikit/simple/Typography";

const testingArray = [
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 1",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },

  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 2",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },

  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
  {
    title: "page 3",
    picture: "https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg",
  },
];

const CyberGames = ({ data }) => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  return (
    <div className="flex" id="cyber-games">
      <div className="flex-center__wrapper-columns" style={{ gap: "20px" }}>
        <Typography varient="section-content">Games</Typography>
        <div className="cards-grid-2">
          {data &&
            data
              .slice(startPoint, endPoint)
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.GameName}
                  picture={item.GamePhoto}
                  style={{ width: "100%" }}
                />
              ))}
          {!data && (
            <>
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
              <SkeletonCard type="game" />
            </>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            startPointSetter={setStartPoint}
            endPointSetter={setEndPoint}
            array={data ? data : [0]}
            amount={16}
          />
        </div>
      </div>
    </div>
  );
};

export default CyberGames;
