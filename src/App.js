import "./App.css";
import Header from "./components/Header_bar/Header";
import Home from "./components/Homepage/Home";
import Collection from './components/Collection/Collection';
import ProductDetails from './components/Product_details/ProductDetails';
import ProductAdded from "./components/Product_added/ProductAdded";
import Checkout from './components/Checkout/Checkout';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Collection />
      <ProductDetails />
      <ProductAdded />
      <Checkout />
      <Footer />
    </div>
  );
}

export default App;
