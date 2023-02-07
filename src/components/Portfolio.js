import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="Icons">
        <form
          action="https://github.com/Sasu-Osayande"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="Btn-icon">
            <i class="fa-brands fa-github"></i>
          </button>
        </form>
        <form
          action="https://www.linkedin.com/in/sasuosayande/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="Btn-icon">
            <i class="fa-brands fa-linkedin"></i>
          </button>
        </form>
      </div>
      <div className="Projects">
        <button className="Btn-project">
          <Link to="/sage">
            <div className="Project">Sage</div>
          </Link>
        </button>
        <button className="Btn-project">
        <Link to="/funwithai">
          <div className="Project">Fun-With-AI</div>
          </Link>
        </button>
        <button className="Btn-project">
        <Link to="/sprout">
          <div className="Project">Sprout</div>
          </Link>
        </button>
      </div>
      <div>
        <div className="Blob"></div>
      </div>
    </div>
  );
}

export default Portfolio;
