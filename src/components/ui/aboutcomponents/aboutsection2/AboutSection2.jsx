import "./Aboutsection2.css";
import Button from "../../../reusable/buttons/Button";
import geminiImage from "../../../../assets/gemini-image.png";
const AboutSection2 = () => {
  return (
    <div className="as-container2">
      <div className="hush">
        <h1>
          Gemini app is now <br />
          available for <br /> Windows
        </h1>
        <p>
          Get help from AI with a simple keyboard shortcut, directly <br />
          from your desktop.
        </p>
        <Button name="Check it out" />
      </div>
      <div className="image">
        <img src={geminiImage} alt="image" />
      </div>
    </div>
  );
};
export default AboutSection2;
