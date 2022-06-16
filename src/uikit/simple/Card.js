import { Link } from "react-router-dom";
import CardStyles from "./css modules/card.module.css";

export const SkeletonCard = ({ type }) => {
  return (
    <div className={CardStyles["skeleton-card"]}>
      <div className={CardStyles["skeleton-card-img-wrapper"]}></div>
      {type !== "game" && (
        <div className={CardStyles["skeleton-card-name"]}></div>
      )}
      {type !== "game" && (
        <div className={CardStyles["skeleton-card-lessons"]}></div>
      )}
    </div>
  );
};

const Card = ({ picture, src, title, href, name, lessons, style }) => {
  return (
    <>
      {!href && (
        <Link
          to={src ? src : ""}
          className={CardStyles["card"]}
          style={style && style}
        >
          <div className={CardStyles["card-wrapper"]}>
            <h2>{title}</h2>
            {lessons && <p>lessons {lessons}</p>}
            <img src={picture} alt="course's picture" />
          </div>
          {name && <h4>{name}</h4>}
          {lessons && <p>lessons {lessons}</p>}
        </Link>
      )}
      {href && (
        <a href={href} className={CardStyles["card"]} style={style && style}>
          <div className={CardStyles["card-wrapper"]}>
            <h2>{title}</h2>
            {lessons && <p>lessons {lessons}</p>}
            <img src={picture} alt="course's picture" />
          </div>
          {name && <h4>{name}</h4>}
          {lessons && <p>lessons {lessons}</p>}
        </a>
      )}
    </>
  );
};

export default Card;
