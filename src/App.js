// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from "./components/Enter";
import Portfolio from "./components/Portfolio";
import Sage from "./components/Sage";
import Sprout from "./components/Sprout";
import FunWithAI from "./components/Fun-with-ai";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Enter />} />
        <Route path="/sasu" element={<Portfolio />} />
        <Route path="/sage" element={<Sage />} />
        <Route path="/sprout" element={<Sprout />} />
        <Route path="/funwithai" element={<FunWithAI />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
