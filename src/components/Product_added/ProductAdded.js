import React from 'react'
import MainProdDet from '../Product_details/PrDet_mini/MainProdDet'
import YMAL from '../Product_details/PrDet_mini/YMAL'

const ProductAdded = () => {
  return (
    <div className='prod_added'>
      <div className='prod_added_notif'>
        <p>SUCCESSFULLY ADDED TO CART. <a href="">CHECK NOW.</a></p>
      </div>
      <MainProdDet />
      <YMAL />
    </div>
  )
}

export default ProductAdded