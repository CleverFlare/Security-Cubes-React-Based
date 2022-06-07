import Form from "./css modules/formControl.module.css";
import { useState, useEffect } from "react";
import ShownSvg from "../icons/ShownSvg";
import HiddenSvg from "../icons/HiddenSvg";

const FormControl = ({ type, label, onChange, value, pattern }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className={Form.wrapper}>
      {label && <label htmlFor="">{label}</label>}
      {type !== "textarea" && (
        <div className={Form.formControlWrapper}>
          <input
            type={
              type
                ? type === "password"
                  ? showPass
                    ? "text"
                    : "password"
                  : type
                : "text"
            }
            className={Form.formControl}
            onChange={onChange}
            value={value}
            minLength={type === "password" ? "8" : "524288"}
          />
          {type === "password" && (
            <button
              className={Form.showAndHideButton}
              onClick={(event) => {
                event.preventDefault();
                setShowPass(!showPass);
              }}
            >
              {showPass ? <ShownSvg /> : <HiddenSvg />}
            </button>
          )}
        </div>
      )}
      {type === "textarea" && (
        <textarea
          className={Form.formControl}
          cols="30"
          rows="10"
          onChange={onChange}
          value={value}
          // onInvalid={(event) => event.preventDefault()}
        ></textarea>
      )}
    </div>
  );
};

export default FormControl;
