import React from "react";
import faceMask from '../../../assets/ProductDetails/face_mask.png'
import axe from '../../../assets/ProductDetails/axe_deodorant.png'
import stayFree from '../../../assets/ProductDetails/stayfree_pads.png'

const YMAL = () => {
  return (
    <div className="ymal_main">
      <div className="ymal_title">
        <h2>YOU MAY ALSO LIKE</h2>
      </div>
      <div className="ymal_item_row">
        <div className="ymal_grid_container">
          {/* 1 */}
          <div className="ymal_cont">
            <div className="ymal_box">
              <div className="top_seller">TOP SELLER</div>
              <img src={faceMask} alt="" />
            </div>
            <div className="ymal_box_text">
              <div>
                <p>Face Masks</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="ymal_cont">
            <div className="ymal_box">
              <img src={axe} alt="" />
            </div>

            <div className="ymal_box_text">
              <div>
                <p>Body Spray</p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="ymal_cont">
            <div className="ymal_box resp3">
              <img src={stayFree} alt="" />
            </div>

            <div className="ymal_box_text">
              <div>
                <p>Stay Free Ultra Pads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YMAL;
