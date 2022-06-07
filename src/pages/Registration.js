import { Link } from "react-router-dom";
import { useState, useReducer, useEffect } from "react";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import FormControl from "../components/FormControl";
import Typography from "../components/Typography";
import "./css/registration.css";
import BackArrowSvg from "../icons/BackArrowSvg";
import Toggle from "../components/Toggle";
import AOS from "aos";

const init = {
  signInEmail: "",
  signInPassword: "",
  singInRemember: false,
  singUpEmail: "",
  signUpPassword: "",
  signUpRemember: false,
};

const ACTIONS = {
  UPDATE_IN_EMAIL: "update-in-email",
  UPDATE_UP_EMAIL: "update-up-email",
  UPDATE_IN_PASSWORD: "update-in-password",
  UPDATE_UP_PASSWORD: "update-up-password",
  UPDATE_IN_REMEMBER: "update-in-remember",
  UPDATE_UP_REMEMBER: "update-up-remember",
  RESET: "reset",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_IN_EMAIL:
      return { ...state, signInEmail: action.payload };
    case ACTIONS.UPDATE_UP_EMAIL:
      return { ...state, singUpEmail: action.payload };
    case ACTIONS.UPDATE_IN_PASSWORD:
      return { ...state, signInPassword: action.payload };
    case ACTIONS.UPDATE_UP_PASSWORD:
      return { ...state, signUpPassword: action.payload };
    case ACTIONS.UPDATE_IN_REMEMBER:
      return { ...state, singInRemember: action.payload };
    case ACTIONS.UPDATE_UP_REMEMBER:
      return { ...state, signUpRemember: action.payload };
    case ACTIONS.RESET:
      return init;
  }
};

const Registration = () => {
  const [state, dispatch] = useReducer(reducer, init);
  const [registerState, setRegisterState] = useState("sign-in");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSignInSubmit = (event) => {
    event.preventDefault();
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
  };

  const handleToggleRegisterState = (event) => {
    dispatch({ type: ACTIONS.RESET });
    switch (event.target.checked) {
      case true:
        setRegisterState("sign-up");
        break;
      case false:
        setRegisterState("sign-in");
        break;
      default:
        setRegisterState("sign-in");
    }
  };

  return (
    <div id="registration" data-aos="fade-in">
      <div className="flex-center">
        <div className="toggle-wrapper">
          <p>Sign In</p>
          <Toggle onToggle={handleToggleRegisterState} />
          <p>Sign Up</p>
        </div>
        <div
          className="flex__wrapper-rows"
          style={{ width: "100%", position: "relative" }}
        >
          <div className="backarrow-wrapper">
            <Link to={-1}>
              <BackArrowSvg />
            </Link>
          </div>
          {/* ---------------- */}
          {registerState === "sign-in" && (
            <form
              onSubmit={handleSignInSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                width: "100%",
              }}
              data-aos="fade-right"
            >
              <Typography varient="pageHeader">Sign in</Typography>
              <Typography varient="sectionContent">
                Sign in to your account
              </Typography>
              <FormControl
                type="email"
                label="E-mail"
                onChange={(event) =>
                  dispatch({
                    type: ACTIONS.UPDATE_IN_EMAIL,
                    payload: event.target.value,
                  })
                }
                value={state.signInEmail}
              />
              <FormControl
                type="password"
                label="Password"
                onChange={(event) =>
                  dispatch({
                    type: ACTIONS.UPDATE_IN_PASSWORD,
                    payload: event.target.value,
                  })
                }
                value={state.signInPassword}
              />
              <div className="flex-rows-between">
                <CheckBox
                  label="Remember Me"
                  onChange={(event) =>
                    dispatch({
                      type: ACTIONS.UPDATE_IN_REMEMBER,
                      payload: event.target.checked,
                    })
                  }
                  value={state.signInRemember}
                />
                <Link to="" style={{ color: "white", textDecoration: "none" }}>
                  Forgot your password?
                </Link>
              </div>
              <div className="submit-button-wrapper">
                <Button varient="primary">Sign in</Button>
              </div>
            </form>
          )}
          {registerState === "sign-up" && (
            <form
              onSubmit={handleSignUpSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                width: "100%",
              }}
              data-aos="fade-left"
            >
              <Typography varient="pageHeader">Create account</Typography>
              <Typography varient="sectionContent">
                Create an account and join the game!
              </Typography>
              <FormControl
                type="email"
                label="E-mail"
                onChange={(event) =>
                  dispatch({
                    type: ACTIONS.UPDATE_UP_EMAIL,
                    payload: event.target.value,
                  })
                }
                value={state.signUpEmail}
              />
              <FormControl
                type="password"
                label="Password"
                onChange={(event) =>
                  dispatch({
                    type: ACTIONS.UPDATE_UP_PASSWORD,
                    payload: event.target.value,
                  })
                }
                value={state.signUpPassword}
              />
              <div>
                <CheckBox
                  label="Remember Me"
                  onChange={(event) =>
                    dispatch({
                      type: ACTIONS.UPDATE_UP_REMEMBER,
                      payload: event.target.checked,
                    })
                  }
                  value={state.signUpRemember}
                />
              </div>
              <div className="submit-button-wrapper">
                <Button varient="primary">Sign Up</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
