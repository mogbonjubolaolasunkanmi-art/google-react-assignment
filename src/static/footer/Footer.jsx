import { CircleQuestionMark } from "lucide-react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Brand Resource Center</p>
          <p>Careers</p>
          <p>Contact us</p>
          <p>Help Center</p>
          <p>Investor Relations</p>
          <p>Locations</p>
          <p>Press resources</p>
        </div>
        <div className="footer-column">
          <h3>Outreach and initiatives</h3>
          <p>Accessibility</p>
          <p>Crisis Response</p>
          <p>Google.org</p>
          <p>Google for Health</p>
          <p>Grow with Google</p>
          <p>Learning</p>
          <p>Public Policy</p>
          <p>Sustainability</p>
        </div>
        <div className="footer-column">
          <h3>Research and technology</h3>
          <p>Google AI</p>
          <p>Google Cloud</p>
          <p>Google DeepMind</p>
          <p>Google for Developers</p>
          <p>Google Labs</p>
          <p>Google Research</p>
        </div>
        <div className="footer-column">
          <h3>More about us</h3>
          <p>Around the globe</p>
          <p>Human rights</p>
          <p>Safety Center</p>
          <p>Supplier responsibility</p>
          <p>Transparency Center</p>
          <p>Transparency Report</p>
        </div>
      </div>
      {/* <div className="footer-line" /> */}
      <hr className="footer-line" />
      <div className="footer-bottom">
        <div className="footer-left">
          <h3>Google logo </h3>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <div className="footer-right">
          <CircleQuestionMark className="qm" />
          <p>Help</p>
          <p>English</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
