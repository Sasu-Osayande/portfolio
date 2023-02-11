import "./About.css";
import video from "../assets/videos/blob.mp4"
// import { Link } from "react-router-dom";

function About() {
  return (
    <div className="About">
      <span>About</span>
      <video className="blob-video" autoplay playsinline>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  );
}

export default About;
