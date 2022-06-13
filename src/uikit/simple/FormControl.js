import FormControlStyles from "./css modules/formControl.module.css";
import { useState } from "react";
import ShownSvg from "../../icons/ShownSvg";
import HiddenSvg from "../../icons/HiddenSvg";

const FormControl = ({ type, label, onChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={FormControlStyles["wrapper"]}>
      {label && <label htmlFor="">{label}</label>}
      {type !== "textarea" && (
        <div className={FormControlStyles["form-control-wrapper"]}>
          <input
            type={
              type
                ? type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
                : "text"
            }
            className={FormControlStyles["form-control"]}
            onChange={onChange}
            value={value}
            minLength={type === "password" ? "8" : "524288"}
          />
          {type === "password" && (
            <button
              className={FormControlStyles["toggle-button"]}
              onClick={(event) => {
                event.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <ShownSvg /> : <HiddenSvg />}
            </button>
          )}
        </div>
      )}
      {type === "textarea" && (
        <textarea
          className={FormControlStyles["form-control"]}
          cols="30"
          rows="10"
          onChange={onChange}
          value={value}
        ></textarea>
      )}
    </div>
  );
};

export default FormControl;
