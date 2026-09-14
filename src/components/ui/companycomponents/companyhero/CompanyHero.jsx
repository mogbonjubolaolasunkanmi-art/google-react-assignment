import "./CompanyHero.css";
import companyHeroImg from "../../../../assets/companyheroimg.png";
const CompanyHero = () => {
  return (
    <div>
      <div>
        <img src={companyHeroImg} alt="hero" className="company-hero" />
      </div>
    </div>
  );
};
export default CompanyHero;
