import { Link, useNavigate } from "react-router-dom";
import { useState, useReducer, useEffect } from "react";
import Button from "../uikit/simple/Button";
import CheckBox from "../uikit/simple/CheckBox";
import FormControl from "../uikit/simple/FormControl";
import Typography from "../uikit/simple/Typography";
import "./css/registration.css";
import BackArrowSvg from "../icons/BackArrowSvg";
import Toggle from "../uikit/simple/Toggle";
import AOS from "aos";
import { connect } from "react-redux";

const init = {
  signInEmail: "",
  signInPassword: "",
  singInRemember: false,
  signUpEmail: "",
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
      return { ...state, signUpEmail: action.payload };
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

const Registration = ({ setToken }) => {
  const [state, dispatch] = useReducer(reducer, init);
  const [registerState, setRegisterState] = useState("sign-in");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    const singInData = {
      username: state.signInEmail,
      password: state.signInPassword,
    };
    fetch("https://securitycubes.com/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(singInData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          localStorage.setItem("token", data.token);
          navigate(-1);
        } else if (data.error) {
          setError(data.error);
        }
      });
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const singUpData = {
      email: state.signUpEmail,
      first_name: "",
      last_name: "",
      password: state.signUpPassword,
      username: state.signUpEmail.split("@")[0],
    };
    fetch("https://securitycubes.com/api/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(singUpData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          localStorage.setItem("token", data.token);
          navigate(-1);
        } else if (data.error) {
          setError(data.error);
        }
      });
  };

  const handleToggleRegisterState = (event) => {
    dispatch({ type: ACTIONS.RESET });
    setError("");
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
      <div className="sector columns justify-center gap-50">
        <div className="toggle-wrapper">
          <p>Sign In</p>
          <Toggle onToggle={handleToggleRegisterState} />
          <p>Sign Up</p>
        </div>
        <div
          className="rows gap-10"
          style={{ width: "100%", position: "relative", flexWrap: "nowrap" }}
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
              <Typography varient="page-header">Sign in</Typography>
              <Typography varient="section-content">
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
                <div style={{ display: "flex", gap: "10px" }}>
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
                  <Typography
                    varient="caption"
                    style={{ color: "red", cursor: "default" }}
                  >
                    {error}
                  </Typography>
                </div>
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
              <Typography varient="page-header">Create account</Typography>
              <Typography varient="section-content">
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
                <div style={{ display: "flex", gap: "10px" }}>
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
                  <Typography
                    varient="caption"
                    style={{ color: "red", cursor: "default" }}
                  >
                    {error}
                  </Typography>
                </div>
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

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (value) => dispatch({ type: "set-token", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
