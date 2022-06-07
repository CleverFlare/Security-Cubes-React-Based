import { Link } from "react-router-dom";
import Buttons from "./css modules/button.module.css";

const Button = ({ varient, children, onClick, to }) => {
  return (
    <>
      {!to && (
        <button
          className={
            varient
              ? Object.keys(Buttons).includes(varient)
                ? Buttons[varient]
                : Buttons.primary
              : Buttons.primary
          }
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {to && (
        <Link
          to={to}
          className={
            varient
              ? Object.keys(Buttons).includes(varient)
                ? Buttons[varient]
                : Buttons.primary
              : Buttons.primary
          }
          onClick={onClick}
        >
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
