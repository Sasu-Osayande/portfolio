import "./Portfolio.css";
// import {Link} from "react-router-dom";

function Portfolio() {
  return (
    <div className="Portfolio">
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
  );
}

export default Portfolio;
