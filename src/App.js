// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from "./components/Enter";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Enter />} />
        <Route path="/sasu" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
