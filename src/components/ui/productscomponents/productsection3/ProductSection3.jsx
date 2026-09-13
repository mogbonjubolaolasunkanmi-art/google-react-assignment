import "./ProductSection3.css";
import gridImage1 from "../../../../assets/ps3-image-1.png";
import gridImage2 from "../../../../assets/ps3-image-2.png";
import { SquareArrowOutUpRight } from "lucide-react";

const ProductSection3 = () => {
  return (
    <div className="ps3-grid">
      <div className="left-grid">
        <div className="ps3-gridone">
          <div className="ps3-gridimg">
            <img src={gridImage1} alt="gridimage" />
          </div>
          <div className="ps3-gridtext">
            <h3>CIRCLE TO SEARCH</h3>
            <p>
              Circle, highlight or tap to search anything on your Android
              device.
            </p>
            <SquareArrowOutUpRight />
          </div>
        </div>
        <div className="ps3-gridtwo">
          <h3>AI MODE</h3>
          <p>
            Ask anything and get AI powered response.Then,keep <br />
            exploring with follow-up questions and web links
          </p>
          <SquareArrowOutUpRight />
        </div>
      </div>
      <div className="right-grid">
        <div className="ps3-gridthree">
          <h3>HOW SEARCH WORKS</h3>
          <p>
            Get the details on how Search works — from the approach we take, to
            the technology behind it.
          </p>
          <SquareArrowOutUpRight />
        </div>
        <div className="ps3-gridfour">
          <div className="ps3-gridimg2">
            <img src={gridImage2} alt="gridimage" />
          </div>
          <h3>LENS</h3>
          <p>
            Go beyond words: Seacrh with your camera,an image or <br />
            whatever's on your screen.
          </p>
          <SquareArrowOutUpRight />
        </div>
      </div>
    </div>
  );
};
export default ProductSection3;
