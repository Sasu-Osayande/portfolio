import "./Portfolio.css";
import { Link } from "react-router-dom";
import image from "../assets/images/blob.png";

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
      <img src={image} alt="collection of colourful blobs" />
      {/* <div>
        <div className="Blob1"></div>
        <div className="Blob2"></div>
        <div className="Blob3"></div>
        <div className="Blob4"></div>
        <div className="Blob5"></div>
      </div> */}
    </div>
  );
}

export default Portfolio;
