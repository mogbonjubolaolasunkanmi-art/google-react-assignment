import "./ProductSection2.css";
import Logo from "../../../../assets/google-logo.png";
import Button from "../../../reusable/buttons/Button";
const ProductSection2 = () => {
  return (
    <div className="ps2-container">
      <img src={Logo} alt="logo" />
      <h1>Search in new ways</h1>
      <Button name="Download the google app" />
    </div>
  );
};
export default ProductSection2;
