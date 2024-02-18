import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import SimiliarProducts from "./components/Products/SimiliarProducts";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/Products/ProductDetails";

function App() {
  return (
    <div>
      <Navbar />
      <ProductDetails />
      <SimiliarProducts />
      <Footer />
    </div>
  );
}

export default App;
