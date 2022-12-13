// import reactDOM from "react-dom/client/;
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header_bar/Header";
import Home from "./components/Homepage/Home";
import Collection from "./components/Collection/Collection";
import ProductDetails from "./components/Product_details/ProductDetails";
import ProductAdded from "./components/Product_added/ProductAdded";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Sellings from './components/Homepage/home_mini/Sellings';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/macc-essentials/">
              <Home />
            </Route>
            <Route path="/macc-essentials/essentials">
              <Collection />
            </Route>
            <Route path={"/macc-essentials/sellings"}>
              <Sellings />
            </Route>
            <Route path={"/macc-essentials/details"}>
              <ProductDetails />
            </Route>
          </Switch>
        </div>

        {/* <Header /> */}
        {/* <Home />
        <Collection />
        <ProductDetails />
        <ProductAdded />
        <Checkout /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
