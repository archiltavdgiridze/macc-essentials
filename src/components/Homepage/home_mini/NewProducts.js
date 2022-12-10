import React from "react";
import faceMask from "../../../assets/Home/new_products/face_mask.png";
import axe from "../../../assets/Home/new_products/axe_deodorant.png";
import stayFree from "../../../assets/Home/new_products/stayfree_pads.png";

const NewProducts = () => {
  return (
    <div className="new_prod">
      <div className="new_prod_text">
        <h2>
          NEW <span>PRODUCTS</span>
        </h2>
      </div>
      <div className="new_prod_grid_container">
        {/* 1 */}
        <div className="new_prod_cont">
          <div className="new_prod_box">
            <div className="top_seller">TOP SELLER</div>
            <img src={faceMask} alt="" />
          </div>
          <div className="new_prod_box_text">
            <div>
              <p>Face Masks</p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="new_prod_cont">
          <div className="new_prod_box">
            <img src={axe} alt="" />
          </div>

          <div className="new_prod_box_text">
            <div>
              <p>Body Spray</p>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="new_prod_cont">
          <div className="new_prod_box resp3">
            <img src={stayFree} alt="" />
          </div>

          <div className="new_prod_box_text">
            <div>
              <p>Stay Free Ultra Pads</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
