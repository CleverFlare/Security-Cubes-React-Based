import Pagination from "../uikit/simple/Pagination";
import { useState } from "react";
import Card from "../uikit/simple/Card";

const testingArr = [
  "hello",
  "world",
  "how",
  "are",
  "you",
  "doing",
  "I'm",
  "okay",
  "thanks",
  "for",
  "asking",
];

const TestPage = () => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  return (
    <div className="flex-center-layout">
      {startPoint} / {endPoint}
      <div>
        {testingArr.slice(startPoint, endPoint).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="flex-center-layout__wrapper-columns">
        <Pagination
          startPointSetter={setStartPoint}
          endPointSetter={setEndPoint}
          array={testingArr}
          amount={3}
        />
      </div>
      <Card
        picture="https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg"
        title="Web Security"
        name="Web Security"
        lessons={5}
      />
      <Card
        picture="https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg"
        title="Web Security"
        name="Web Security"
        lessons={5}
      />
      <Card
        picture="https://cdn.securitycubes.com/media/TrackPhoto/garden.jpg"
        title="Web Security"
        name="Web Security"
        lessons={5}
      />
    </div>
  );
};

export default TestPage;
