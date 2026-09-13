import { SquareArrowOutUpRight } from "lucide-react";
import "./PsCards.css";
const PsCards = ({ title, image }) => {
  return (
    <div className="ps-card">
      <div className="ps-cardContent">
        <h3>{title}</h3>
        <SquareArrowOutUpRight className="external-icon" />
        {/* <span className="externalIcon">↗</span> */}
      </div>

      <div className="ps-cardImage">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};
export default PsCards;
