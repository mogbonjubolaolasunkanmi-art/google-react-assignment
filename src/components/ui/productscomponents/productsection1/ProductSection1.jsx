import "./ProductSection1.css";
import PsCards from "../../../reusable/productsectioncards/PsCards";
import pscard1 from "../../../../assets/ps-card-image1.png";
import pscard2 from "../../../../assets/ps-card-image2.png";
import pscard3 from "../../../../assets/ps-card-image3.png";
import pscard4 from "../../../../assets/ps-card-image4.png";
const ProductSection1 = () => {
  return (
    <div className="ps-card-container">
      <PsCards title="Product support" image={pscard1} />
      <PsCards title="Google Store" image={pscard2} />
      <PsCards title="Google Account" image={pscard3} />
      <PsCards title="Accessibility support" image={pscard4} />
    </div>
  );
};
export default ProductSection1;
