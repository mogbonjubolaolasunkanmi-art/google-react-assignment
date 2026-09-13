import Header from "./static/header/Header";
import About from "./pages/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import Company from "./pages/company/Company";
import Footer from "./static/footer/Footer";
// import News from "./pages/news/News";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/company" element={<Company />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
