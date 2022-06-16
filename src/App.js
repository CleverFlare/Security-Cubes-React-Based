import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./uikit/complex/Navbar";
import Courses from "./pages/Courses";
import CyberGames from "./pages/CyberGames";
import CyberTraining from "./pages/CyberTraining";
import Hall from "./pages/Hall";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Registration from "./pages/Registration";
import TestPage from "./pages/TestPage";
import Terminal from "./pages/Terminal";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import AccountDetails from "./pages/AccountDetails";

function App({ token }) {
  const [plansData, setPlansData] = useState(null);
  const [tracksData, setTracksData] = useState(null);
  const [userData, setUserData] = useState("");
  const [gamesData, setGamesData] = useState(null);

  useEffect(() => {
    if (token) {
      fetch("https://securitycubes.com/api/plans/", {
        headers: { Authorization: "Token" + " " + token },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPlansData(data.plans);
        });
    } else {
      fetch("https://securitycubes.com/api/plans/")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPlansData(data.plans);
        });
    }

    if (!token) return;

    fetch("https://securitycubes.com/api/tracks/", {
      headers: { Authorization: "Token" + " " + token },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTracksData(data);
      });

    fetch("https://securitycubes.com/api/user/", {
      method: "GET",
      headers: { Authorization: "Token" + " " + token },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      });

    fetch("https://securitycubes.com/api/getGames/", {
      headers: {
        Authorization: "Token " + token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGamesData(data);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar name={userData?.fullName} />
        <Routes>
          <Route path="/" element={<Home plans={plansData} />} />
          <Route path="/hall" element={<Hall />} />
          {token && (
            <Route
              path="/training"
              element={<CyberTraining tracks={tracksData} />}
            />
          )}
          {token && (
            <Route
              path="/training/:id"
              element={<Courses data={{ title: "" }} />}
            />
          )}
          {token && (
            <Route path="/games" element={<CyberGames data={gamesData} />} />
          )}
          <Route
            path="/account"
            element={
              token ? <AccountDetails data={userData} /> : <Registration />
            }
          />
          {token && (
            <Route path="/training/:id/:lesson" element={<Lessons />} />
          )}
          {token && <Route path="/terminal/:id" element={<Terminal />} />}
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Router>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    token: state.token,
  };
}

export default connect(mapStateToProps)(App);
