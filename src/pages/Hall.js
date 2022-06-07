import Button from "../components/Button";
import "./css/hall.css";
import AOS from "aos";
import { useEffect } from "react";

const Hall = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200, once: true });
  }, []);
  return (
    <div className="flex-center" id="hall">
      <div className="flex-center__wrapper-rows">
        <div data-aos="flip-left" className="hall__card" id="cyber-games-card">
          <div className="hall__card__picture-wrapper">
            <img src="./illustrations/Games.png" />
          </div>
          <Button varient="primary" to="/games">
            Cyber Games
          </Button>
        </div>
        <div
          data-aos="flip-right"
          className="hall__card"
          id="cyber-training-card"
        >
          <div className="hall__card__picture-wrapper">
            <img src="./illustrations/Training.png" />
          </div>
          <Button varient="primary" to="/training">
            Cyber Training
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hall;