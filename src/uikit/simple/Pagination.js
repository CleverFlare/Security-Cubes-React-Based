import { useState, useEffect } from "react";
import PaginationStyles from "./css modules/pagination.module.css";

const Pagination = ({ startPointSetter, endPointSetter, array, amount }) => {
  const [buttons, setButtons] = useState(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < Math.ceil(array.length / amount); i++) {
      temp.push(i);
    }
    setButtons(temp);
  }, []);

  useEffect(() => {
    startPointSetter(active * amount);
    endPointSetter(active * amount + amount);
  }, [active]);

  const handlePaginating = (number) => {
    setActive(number);
  };

  const handleMoveForward = () => {
    if (active >= buttons.length - 1) return;
    setActive((lastValue) => lastValue + 1);
  };

  const handleMoveBackward = () => {
    if (active <= 0) return;
    setActive((lastValue) => lastValue - 1);
  };
  return (
    <div className={PaginationStyles["pagination-wrapper"]}>
      <button onClick={handleMoveBackward}>◄◄</button>
      {buttons &&
        buttons.map((buttonNumber, index) => (
          <button
            key={index}
            className={
              active === buttonNumber ? PaginationStyles["active"] : ""
            }
            onClick={() => handlePaginating(buttonNumber)}
          >
            {buttonNumber + 1}
          </button>
        ))}
      <button onClick={handleMoveForward}>►►</button>
    </div>
  );
};

export default Pagination;
