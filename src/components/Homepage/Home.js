import React from "react";
import Header from './../Header_bar/Header';
import HomeServices from "./home_mini/HomeServices";
import NewProducts from "./home_mini/NewProducts";
import Discounts from "./home_mini/Discount";
import Sellings from "./home_mini/Sellings";
import Covid from "./home_mini/Covid";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div>
      <HomeServices />
      <NewProducts />
      <Discounts />
      <Sellings />
      <Covid />
    </div>
  );
};

export default Home;
