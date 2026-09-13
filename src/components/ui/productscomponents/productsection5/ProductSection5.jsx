import "./ProductSection5.css";
import ProductImgCard from "../../../reusable/productimgcard/ProductImgCard";
const ProductSection5 = () => {
  const googleProducts = [
    {
      name: "android",
      imgURL:
        "https://www.gstatic.com/marketing-cms/assets/images/05/8b/706d01a54572a527c226eba944ed/android.png=s96-fcrop64=1,00000000ffffffff-rw",
      link: "https://www.android.com/?utm_source=about.google&utm_medium=referral&utm_campaign=productslist",
    },
    {
      name: "android",
      imgURL:
        "https://www.gstatic.com/marketing-cms/assets/images/05/8b/706d01a54572a527c226eba944ed/android.png=s96-fcrop64=1,00000000ffffffff-rw",
      link: "https://www.android.com/?utm_source=about.google&utm_medium=referral&utm_campaign=productslist",
    },
  ];
  return (
    <div className="first">
      <div>
        {googleProducts.map((product, index) => (
          <ProductImgCard
            name={product.name}
            key={product.name + index}
            imgURL={product.imgURL}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductSection5;
