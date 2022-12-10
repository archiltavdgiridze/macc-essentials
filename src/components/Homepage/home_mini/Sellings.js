import React from 'react'
import axe from "../../../assets/Home/new_products/axe_deodorant.png";
import faceMask from "../../../assets/Home/new_products/face_mask.png";
import happyMan from "../../../assets/Home/sellings/happy_man.png"

const Sellings = () => {
  return (
    <div className="sellings">
      <div className="container">
        <div className="sell_cont">
          {/* left */}
          <div className="sell_right">
            <div className="sell_right_text">
              <h2>
                <span>MACC</span> TOP SELLINGS
              </h2>
              <button type="">VIEW ALL</button>
            </div>

            {/* images */}
            <div className="sell_right_box_img">
              <div className="sell_right_cont">
                <div className="sell_right_box">
                  <div className="sell_top_seller">
                    <p>20% OFF</p>
                  </div>
                  <img className="axe_img" src={axe} alt="" />
                </div>

                <div className="sell_right_box_text">
                  <div>
                    <p>Body Spray</p>
                    <p>
                      ₹ 400
                    </p>
                  </div>
                </div>
              </div>

              <div className="sell_right_cont">
                <div className="sell_right_box">
                  <div className="sell_top_seller">
                    <p>40% OFF</p>
                  </div>
                  <img className="pad_img" src={faceMask} alt="" />
                </div>

                <div className="sell_right_box_text">
                  <div>
                    <p>Face Mask</p>
                    <p>
                      ₹ 400
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="sell_left">
            <div>
              <img src={happyMan} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sellings