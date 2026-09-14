import "./Aboutsection1.css";
import Cards from "../../../reusable/cards/Cards";
import myCardImage2 from "../../../../assets/se2.png.png";
import myCardImage3 from "../../../../assets/se3.png.png";
import myCardImage1 from "../../../../assets/se1.png.png";
// import myIcon from "../../../../assets/icon.png";
const AboutSection1 = () => {
  return (
    <div className="section-one-container">
      <Cards
        cardImage={myCardImage2}
        cardText="Explore our products and features across Search, Google Workspace, and more"
      />
      <Cards
        cardImage={myCardImage3}
        cardText="Learn all about our leading AI models — and discover their capabilities"
      />
      <Cards
        cardImage={myCardImage1}
        cardText="See how we’re tackling some of the most challenging problems in computer science"
      />
      {/* <Icon icon={myIcon} /> */}
    </div>
  );
};

export default AboutSection1;
