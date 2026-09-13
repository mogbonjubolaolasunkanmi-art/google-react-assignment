import "./AboutSection4.css";
import Button from "../../../reusable/buttons/Button";
const AboutSection4 = () => {
  return (
    <div className="as-4">
      <div className="as-four-text">
        <h1>Get the latest news from Google in your inbox</h1>
        <p>
          Sign up to receive top stories from the week — from product
          announcements, to everyday tips.
        </p>
      </div>
      <div>
        <Button name="Subscribe" className="as-4-btn" />
      </div>
    </div>
  );
};
export default AboutSection4;
