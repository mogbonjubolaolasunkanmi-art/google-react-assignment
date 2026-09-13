import { ExternalLink, SquareArrowOutUpRight } from "lucide-react";
import "./Cards.css";
// import CardImage from "../../../assets/herobg.webp";

const Cards = ({ cardImage, cardText }) => {
  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <img src={cardImage} alt="" />
      </div>
      <p>{cardText}</p>
      {/* <ExternalLink className="card-icon" /> */}
      <SquareArrowOutUpRight className="card-icon" />
    </div>
  );
};

export default Cards;
