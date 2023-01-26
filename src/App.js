// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from "./components/Enter";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Enter />} />
      </Routes>
    </Router>
  );
}

export default App;
