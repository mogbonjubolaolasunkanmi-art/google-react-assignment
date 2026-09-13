import "./AboutHero.css";
import Button from "../../../reusable/buttons/Button";

const AboutHero = () => {
  return (
    <div className="about-hero-container">
      <div className="aboutHeroWrapper">
        <h1>
          Introducing <br />
          Gemini 3.8 Flash <br />
          and 3.8 Flash Cyber
        </h1>
        <p>
          Our newest Gemini models deliver next-generation intelligence for
          agentic workflows and cybersecurity.
        </p>
        {/* <div
                style={{
                  backgroundColor: "red",
                  width: "100vw",
                }}
              > */}
        <Button name="Learn More" />
        {/* </div> */}
      </div>
    </div>
  );
};
export default AboutHero;
