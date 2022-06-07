import { Link } from "react-router-dom";
import CardStyles from "./css modules/card.module.css";

const Card = ({ picture, src, title, name, lessons, style }) => {
  return (
    <Link
      to={src ? src : ""}
      className={CardStyles.card}
      style={style && style}
    >
      <div className={CardStyles.cardWrapper}>
        <h2>{title}</h2>
        {lessons && <p>lessons {lessons}</p>}
        <img src={picture} alt="course's picture" />
      </div>
      {name && <h4>{name}</h4>}
      {lessons && <p>lessons {lessons}</p>}
    </Link>
  );
};

export default Card;
