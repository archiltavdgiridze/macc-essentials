import React from 'react'
import Header from "../Header_bar/Header";
import Footer from "./../Footer/Footer";
import MainProdDet from './PrDet_mini/MainProdDet';
import YMAL from './PrDet_mini/YMAL';


const ProductDetails = () => {
  return (
    <div>
      <MainProdDet />
      <YMAL />
    </div>
  )
}

export default ProductDetails