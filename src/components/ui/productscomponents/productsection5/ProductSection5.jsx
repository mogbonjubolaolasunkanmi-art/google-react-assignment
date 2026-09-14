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
      name: "chrome",
      imgURL:
        "https://www.gstatic.com/marketing-cms/assets/images/70/13/80b12e8440858a2adbb93163bbca/chrome.png=s96-fcrop64=1,00000000ffffffff-rw",
      link: "https://www.gstatic.com/marketing-cms/assets/images/70/13/80b12e8440858a2adbb93163bbca/chrome.png=s96-fcrop64=1,00000000ffffffff-rw",
    },
    {
      name: "gemini",
      imgURL:
        "https://www.gstatic.com/marketing-cms/assets/images/a4/97/92c1ec494d129f3fb8d7caa91584/gemini-update.png=s96-fcrop64=1,00000000ffffffff-rw",
      link: "https://www.gstatic.com/marketing-cms/assets/images/a4/97/92c1ec494d129f3fb8d7caa91584/gemini-update.png=s96-fcrop64=1,00000000ffffffff-rw",
    },
    {
      name: "gmail",
      imgURL:
        "https://www.gstatic.com/marketing-cms/assets/images/3b/69/c8499c0b4d33a35b4cd4ca975e79/logo-gmail-2026-color-2x-web-64dp.webp=s48-fcrop64=1,00000000ffffffff-rw",
      link: "https://www.gstatic.com/marketing-cms/assets/images/3b/69/c8499c0b4d33a35b4cd4ca975e79/logo-gmail-2026-color-2x-web-64dp.webp=s48-fcrop64=1,00000000ffffffff-rw",
    },
    {
      name: "calendar",
      imgURL:
        "https://www.gstatic.com/marketing-cms/assets/images/66/89/f778a1de49ea98641f402886ce6a/logo-calendar-2026-color-2x-web-64dp.webp=s48-fcrop64=1,00000000ffffffff-rw",
      link: "https://www.gstatic.com/marketing-cms/assets/images/66/89/f778a1de49ea98641f402886ce6a/logo-calendar-2026-color-2x-web-64dp.webp=s48-fcrop64=1,00000000ffffffff-rw",
    },
    {
      name: "Docs",
      imgURL:
        "https://www.gstatic.com/marketing-cms/assets/images/3f/a8/73db6d7b4aedafe318b3a94d2dc9/logo-docs-2026-color-2x-web-64dp.webp=s48-fcrop64=1,00000000ffffffff-rw",
      link: "https://www.gstatic.com/marketing-cms/assets/images/3f/a8/73db6d7b4aedafe318b3a94d2dc9/logo-docs-2026-color-2x-web-64dp.webp=s48-fcrop64=1,00000000ffffffff-rw",
    },
    {
      name: "Google-map",
      imgURL:
        "https://www.gstatic.com/marketing-cms/assets/images/55/0e/c70d6751460a973c06968f0b64e0/logo-maps-2025-color-2x-web-96dp.webp=s48-fcrop64=1,00000000ffffffff-rw",
      link: "https://www.gstatic.com/marketing-cms/assets/images/55/0e/c70d6751460a973c06968f0b64e0/logo-maps-2025-color-2x-web-96dp.webp=s48-fcrop64=1,00000000ffffffff-rw",
    },
    {
      name: "Google-photos",
      imgURL:
        "https://www.gstatic.com/marketing-cms/assets/images/ec/ca/17131dff4c4fa87ba0491b991ae3/news.png=s96-fcrop64=1,00000000ffffffff-rw",
      link: "https://www.gstatic.com/marketing-cms/assets/images/ec/ca/17131dff4c4fa87ba0491b991ae3/news.png=s96-fcrop64=1,00000000ffffffff-rw",
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
