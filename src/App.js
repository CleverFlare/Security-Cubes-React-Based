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

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hall" element={<Hall />} />
          <Route path="/training" element={<CyberTraining />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/games" element={<CyberGames />} />
          <Route path="/account" element={<Registration />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
