import { Link } from "react-router-dom";
import ButtonStyles from "./css modules/button.module.css";

const Button = ({ varient, children, onClick, to }) => {
  return (
    <>
      {!to && (
        <button
          className={
            varient
              ? Object.keys(ButtonStyles).includes(varient)
                ? ButtonStyles[varient]
                : ButtonStyles["primary"]
              : ButtonStyles["primary"]
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
              ? Object.keys(ButtonStyles).includes(varient)
                ? ButtonStyles[varient]
                : ButtonStyles["primary"]
              : ButtonStyles["primary"]
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
