import "./ProductHero.css";
import heroImage from "../../../../assets/hero-image.png";
const ProductHero = () => {
  return (
    <div className="product-hero-container">
      <div className="ph-image">
        <img src="./product-image-hero.png" alt="image-illustration" />
      </div>
      <div className="product-hero">
        <h1>
          Helpful products, built with you <br />
          in mind
        </h1>
        <div className="ph-input">
          <p>Search in new ways</p>
          <p>Chat with Gemini</p>
          <p>Try AI tools</p>
          <p>Explore more products</p>
        </div>
      </div>
      <img src={heroImage} alt="google pixel" className="phero-image" />
    </div>
  );
};
export default ProductHero;
