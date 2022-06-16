import { useState } from "react";
import Card, { SkeletonCard } from "../uikit/simple/Card";
import Pagination from "../uikit/simple/Pagination";
import Typography from "../uikit/simple/Typography";

const CyberTraining = ({ tracks }) => {
  const [recommendedStartPoint, setRecommendedStartPoint] = useState(null);
  const [recommendedEndPoint, setRecommendedEndPoint] = useState(null);

  const [popularStartPoint, setPopularStartPoint] = useState(null);
  const [popularEndPoint, setPopularEndPoint] = useState(null);

  return (
    <div className="cyber-training">
      <div className="sector columns gap-50">
        <div className="columns gap-10" style={{ gap: "20px" }}>
          <Typography varient="section-content" style={{ fontWeight: "bold" }}>
            Recommended paths
          </Typography>
          <div className="cards-grid-1">
            {tracks &&
              tracks
                .slice(recommendedStartPoint, recommendedEndPoint)
                .map((track, index) => (
                  <Card
                    key={index}
                    picture={track.TrackPhoto}
                    title={track.TrackName}
                    name={track.Description}
                    lessons={track.num}
                    src={`/training/${track.id}`}
                  />
                ))}
            {!tracks && (
              <>
                <SkeletonCard type="track" />
                <SkeletonCard type="track" />
                <SkeletonCard type="track" />
                <SkeletonCard type="track" />
              </>
            )}
          </div>
        </div>
        <div className="rows justify-center">
          <Pagination
            startPointSetter={setRecommendedStartPoint}
            endPointSetter={setRecommendedEndPoint}
            array={tracks ? tracks : [0]}
            amount={4}
          />
        </div>

        <div className="columns gap-10" style={{ gap: "20px" }}>
          <Typography varient="section-content" style={{ fontWeight: "bold" }}>
            Popular Courses
          </Typography>
          <div className="cards-grid-1">
            {/* {testingArray
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
              ))} */}

            <SkeletonCard type="track" />
            <SkeletonCard type="track" />
            <SkeletonCard type="track" />
            <SkeletonCard type="track" />
          </div>
        </div>
        <div className="rows justify-center">
          <Pagination
            startPointSetter={setPopularStartPoint}
            endPointSetter={setPopularEndPoint}
            array={[0]}
            amount={4}
          />
        </div>
      </div>
    </div>
  );
};

export default CyberTraining;
