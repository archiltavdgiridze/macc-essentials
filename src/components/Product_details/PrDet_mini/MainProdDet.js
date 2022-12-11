import React from "react";
import clorox from "../../../assets/ProductDetails/clorox.png";
import heart from "../../../assets/ProductDetails/heart.png";
import AccordionFunct from "../../AccordeonPrDet/Accordion";
import YMAL from './YMAL';
// import 'bootstrap/dist/css/bootstrap.min.css';

const MainProdDet = () => {
  return (
    <div className="prod_det_div">
      <div className="main_prod">
        <div className="prod_det">
          <div className="prod_breadcrumb">
            <div className="bc_first bc">Home /</div>
            <div className="bc_second bc"> Products /</div>
            <div className="bc_third bc"> Product</div>
          </div>
          <div className="prod_main">
            <div className="prod_imgs">
              <div className="prod_imgs_all">
                <div className="prod_sm_img">
                  <div className="sm_imgs">
                    <img src={clorox} alt="" />
                  </div>
                  <div className="sm_imgs">
                    <img src={clorox} alt="" />
                  </div>
                  <div className="sm_imgs">
                    <img src={clorox} alt="" />
                  </div>
                  <div className="sm_imgs">
                    <img src={clorox} alt="" />
                  </div>
                </div>
                <div className="prod_lg_img">
                  <div className="lg_img">
                    <img src={clorox} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="prod_info">
              <div className="prod_name">
                <div>
                  <h1>CLOROX WIPES</h1>
                </div>
                <div>
                  <img src={heart} alt="" />
                </div>
              </div>
              <div className="prod_price">
                <p>₹ 40.00</p>
              </div>
              <div className="prod_type">
                <div className="prod_type_btn">
                  <button type="">BLACK</button>
                </div>
                <div className="prod_type_btn">
                  <button type="">GOLD</button>
                </div>
                <div className="prod_type_btn">
                  <button type="">APOLLO</button>
                </div>
              </div>
              <div className="add_cart">
                <button type="">ADD TO CART</button>
              </div>
              <div className="prod_desc">
                <p>
                  Aliquam faucibus, odio nec commodo aliquam, neque felis
                  placerat dui, a porta ante lectus dapibus est. Aliquam a
                  bibendum mi, condimentum est. Mauris arcu odio, vestibulum
                  quis dapibus sit amet.
                </p>
              </div>
              {/* <AccordionFunct /> */}
              <div className="desc_accrdn"></div>
              <div className="return_policy_accrdn"></div>
              <div className="citizen_policy_accrdn"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProdDet;
