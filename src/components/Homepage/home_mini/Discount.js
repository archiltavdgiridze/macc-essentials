import React from "react";
import PhoneInHand from "../../../assets/Home/discount/phone_in_hand.png";
import axe from "../../../assets/Home/new_products/axe_deodorant.png";
import stayFree from "../../../assets/Home/new_products/stayfree_pads.png";

const Discount = () => {
  return (
    <div className="discount">
      <div className="container">
        <div className="disc_cont">
          
          {/* left */}
          <div className="disc_left">
            <div>
              <img src={PhoneInHand} alt="" />
            </div>
          </div>

          {/* right */}
          <div className="disc_right">
            <div className="disc_right_text">
              <h2>
                <span>MACC</span> WEEKLY DISCOUNT
              </h2>
              <button type="">VIEW ALL</button>
            </div>

            {/* images */}
            <div className="disc_right_box_img">
              <div className="disc_right_cont">
                <div className="disc_right_box">
                  <div className="disc_top_seller">
                    <p>20% OFF</p>
                  </div>
                  <img className="axe_img" src={axe} alt="" />
                </div>

                <div className="disc_right_box_text">
                  <div>
                    <p>Body Spray</p>
                    <p>
                      <span>₹ 500</span> ₹ 400
                    </p>
                  </div>
                </div>
              </div>

              <div className="disc_right_cont">
                <div className="disc_right_box">
                  <div className="disc_top_seller">
                    <p>40% OFF</p>
                  </div>
                  <img className="pad_img" src={stayFree} alt="" />
                </div>

                <div className="disc_right_box_text">
                  <div>
                    <p>Stay Free Ultra Pad</p>
                    <p>
                      <span>₹ 500</span> ₹ 400
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Discount;
