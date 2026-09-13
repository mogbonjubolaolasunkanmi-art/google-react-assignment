import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <section>
        <img src="./google-logo-about.svg" alt="Logo" />
      </section>
      <section className="navigation">
        <Link to="/">
          <div>
            <nav> About</nav>
            <div className="rule" />
          </div>
        </Link>
        <Link to="/product">
          <nav> Product</nav>
        </Link>
        <Link to="/company">
          <nav>Company Info</nav>
        </Link>
        {/* <Link to="/news"> */}
        <nav>News</nav>
        {/* </Link> */}
      </section>
    </div>
  );
};

export default Header;
