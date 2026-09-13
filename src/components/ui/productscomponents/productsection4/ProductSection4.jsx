import "./ProductSection4.css";
import Button from "../../../reusable/buttons/Button";
import geminiIcon from "../../../../assets/gemini-update.png";
import ps4Image from "../../../../assets/ps4-image.png";
const ProductSection4 = () => {
  return (
    <div className="ps4-container">
      <div className="g-image">
        <img src={geminiIcon} alt="image" />
      </div>
      <h1>
        Chat with Gemini, your personal AI <br /> assistant
      </h1>
      <div>
        <Button name="Try it now" />
      </div>
      <div className="ps4-blue-container">
        <div className="ps4-blue-container-text">
          <h1>Gemini live</h1>
          <p>
            Have a conversation about anything around you or <br />
            on your screen
          </p>
          <Button name="Talk it out" />
        </div>
        <div className="ps4-blue-container-image">
          <img src={ps4Image} alt="manImage" />
        </div>
      </div>
    </div>
  );
};
export default ProductSection4;
