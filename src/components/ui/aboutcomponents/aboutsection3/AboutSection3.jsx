import "./AboutSection3.css";
import googleLogo from "../../../../assets/google-logo.png";
import Button from "../../../reusable/buttons/Button";
const AboutSection3 = () => {
  return (
    <div className="as-container3">
      <div className="as-container-three">
        <div className="img-logo">
          <img src={googleLogo} alt="logo" />
        </div>
        <h1>Google around the globe</h1>
        <p>Learn about Google's work and impact around the world.</p>
        <Button name="Explore" />
      </div>
    </div>
  );
};
export default AboutSection3;
