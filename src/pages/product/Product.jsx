import "./Product.css";
// import ProductCard from "../../components/ui/productscomponents/productcard/ProductCard";
import ProductHero from "../../components/ui/productscomponents/producthero/ProductHero";
import ProductSection1 from "../../components/ui/productscomponents/productsection1/ProductSection1";
import ProductSection2 from "../../components/ui/productscomponents/productsection2/ProductSection2";
import ProductSection3 from "../../components/ui/productscomponents/productsection3/ProductSection3";
import ProductSection4 from "../../components/ui/productscomponents/productsection4/ProductSection4";
const Product = () => {
  // const googleProducts = [
  //   {
  //     name: "android",
  //     imgURL:
  //       "https://www.gstatic.com/marketing-cms/assets/images/05/8b/706d01a54572a527c226eba944ed/android.png=s96-fcrop64=1,00000000ffffffff-rw",
  //     link: "https://www.android.com/?utm_source=about.google&utm_medium=referral&utm_campaign=productslist",
  //   },
  //   {
  //     name: "android",
  //     imgURL:
  //       "https://www.gstatic.com/marketing-cms/assets/images/05/8b/706d01a54572a527c226eba944ed/android.png=s96-fcrop64=1,00000000ffffffff-rw",
  //     link: "https://www.android.com/?utm_source=about.google&utm_medium=referral&utm_campaign=productslist",
  //   },
  // ];
  return (
    <div>
      <ProductHero />
      <ProductSection1 />
      <ProductSection2 />
      <ProductSection3 />
      <ProductSection4 />
    </div>
    // <div className="first">
    //   <div>
    //     {googleProducts.map((product, index) => (
    //       <ProductCard
    //         name={product.name}
    //         key={product.name + index}
    //         imgURL={product.imgURL}
    //         link={product.link}
    //       />
    //     ))}
    //   </div>
    // </div>
  );
};
export default Product;
