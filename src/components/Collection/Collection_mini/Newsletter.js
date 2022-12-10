import React from "react";
import axe from "../../../assets/Home/new_products/axe_deodorant.png";
import vitaminC from "../../../assets/Collection/shop_items/vitaminC.png";
import handGloves from "../../../assets/Collection/shop_items/handGloves.png";
import sanitizer from "../../../assets/Collection/shop_items/sanitizer.png";
import faceMask from "../../../assets/Home/new_products/face_mask.png";
import deodorant from "../../../assets/Collection/shop_items/deodorant.png";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="nl_content">
        <div className="nl_filters">
          {/* <div className="filt_content"> */}
          <div className="filt_content_tab">
            <p>COMPANY</p>
          </div>
          <div className="filt_content_tab">
            <p>PRICE</p>
          </div>
          <div className="filt_content_tab">
            <p>CATEGORIES</p>
          </div>
          {/* </div> */}
        </div>
        <div className="nl_coll_cont">
          <div className="nl_coll_prod">
            <div className="coll_prod_tab">
              <button type="">
                Everyday Essentials
              </button>
            </div>
            <div className="coll_prod_tab">
              <button type="">
                Cleaning Essentials
              </button>
            </div>
            <div className="coll_prod_tab">
              <button type="">
                Immunity & Health
              </button>
            </div>
            <div className="coll_prod_tab">
              <button type="">
                Vitamin Supplements
              </button>
            </div>
          </div>
          <div className="nl_prod_table">
            <div className="table_count_sort">
              <div className="count_sort_div">
                <div className="table_item_count">
                  <p>X Products</p>
                </div>
                <div className="table_item_sort">
                  {/* sort */}
                  <input type="" name="" value="TODO // SORT" />
                </div>
              </div>
              <div className="shop_items">
                <div className="prod_table_items">
                  <div className="nl_right_cont">
                    <div className="nl_right_box">
                      <div className="nl_top_seller">
                        <p>20% OFF</p>
                      </div>
                      <div className="nl_right_box_img">
                        <img className="axe1_img" src={axe} alt="" />
                      </div>
                    </div>

                    <div className="nl_right_box_text">
                      <div>
                        <p>Body Spray</p>
                        <p>
                          <span>₹ 500</span> ₹ 400
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="nl_right_cont">
                    <div className="nl_right_box">
                      {/* <div className="nl_top_seller">
                        <p>20% OFF</p>
                      </div> */}
                      <img className="vitC_img" src={vitaminC} alt="" />
                    </div>

                    <div className="nl_right_box_text">
                      <div>
                        <p>Vitamin C</p>
                        <p>₹ 280</p>
                      </div>
                    </div>
                  </div>
                  <div className="nl_right_cont">
                    <div className="nl_right_box">
                      {/* <div className="nl_top_seller">
                        <p>20% OFF</p>
                      </div> */}
                      <img className="handGloves_img" src={handGloves} alt="" />
                    </div>

                    <div className="nl_right_box_text">
                      <div>
                        <p>Hand Gloves</p>
                        <p>₹ 150</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prod_table_items">
                  <div className="nl_right_cont">
                    <div className="nl_right_box">
                      {/* <div className="nl_top_seller">
                        <p>20% OFF</p>
                      </div> */}
                      <img className="sanitizer_img" src={sanitizer} alt="" />
                    </div>

                    <div className="nl_right_box_text">
                      <div>
                        <p>Sanitizer</p>
                        <p>₹ 87</p>
                      </div>
                    </div>
                  </div>
                  <div className="nl_right_cont">
                    <div className="nl_right_box">
                      {/* <div className="nl_top_seller">
                        <p>20% OFF</p>
                      </div> */}
                      <img className="facemask_img" src={faceMask} alt="" />
                    </div>

                    <div className="nl_right_box_text">
                      <div>
                        <p>Face Mask</p>
                        <p>₹ 34</p>
                      </div>
                    </div>
                  </div>
                  <div className="nl_right_cont">
                    <div className="nl_right_box">
                      <div className="nl_top_seller">
                        <p>20% OFF</p>
                      </div>
                      <div className="nl_right_box_img">
                        <img className="deodorant_img" src={deodorant} alt="" />
                      </div>
                    </div>

                    <div className="nl_right_box_text">
                      <div>
                        <p>Deodorant</p>
                        <p>
                          <span>₹ 500</span> ₹ 244
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prod_table_changer">
                  <button type="">1</button>
                  <button type="">2</button>
                  <button type=""> {">"} </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
