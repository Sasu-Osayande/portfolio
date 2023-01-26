import "./Enter.css";
import { Link } from "react-router-dom";

function Enter() {
  return (
    <div className="Enter">
      <button className="Entrance">
        <Link to="/sasu">Click here to enter</Link>
      </button>
    </div>
  );
}

export default Enter;
