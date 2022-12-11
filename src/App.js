import "./App.css";
import Home from "./components/Homepage/Home";
import Collection from './components/Collection/Collection';
import ProductDetails from './components/Product_details/ProductDetails';
import ProductAdded from "./components/Product_added/ProductAdded";
import UserInfo from "./components/Checkout/checkout_mini/UserInfo";

// todo import Product Details
// todo import Product Added
// todo import Checkout

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Collection /> */}
      {/* <ProductDetails /> */}
      {/* <ProductAdded /> */}
      <UserInfo />
    </div>
  );
}

export default App;
