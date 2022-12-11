import React from "react";
import socDist from "../../../assets/Checkout/soc_dist.png";

const UserInfo = () => {
  return (
    <div className="checkout_main">
      <div className="co_info">
        <div className="checkout">
          <h2>CHECKOUT</h2>
        </div>
        <div className="co_del_adr">
          <h4>Delivery Adress</h4>
        </div>
        <div className="co_name_sur">
          <div className="co_name">
            <input placeholder="John" type="" name="" value="" />
          </div>
          <div className="co_surname">
            <input placeholder="Wick" type="" name="" value="" />
          </div>
        </div>
        <div className="co_street">
          <input
            placeholder="Street 32, Pasror road, Daska"
            type=""
            name=""
            value=""
          />
        </div>
        <div className="co_street2">
          <input placeholder="N/A" type="" name="" value="" />
        </div>
        <div className="co_zips">
          <div className="co_zip_code">
            <input placeholder="51010" type="" name="" value="" />
          </div>
          <div className="co_zip_city">
            <input placeholder="Sialkot" type="" name="" value="" />
          </div>
        </div>
        <div className="co_number">
          <input placeholder="+92344567854" type="" name="" value="" />
        </div>
        <div className="co_back_save">
          <div className="co_back">
            <button type="">
              <p>Go back to cart</p>
            </button>
          </div>
          <div className="co_save">
            <button type="">
              <h2>Save And Continue</h2>
            </button>
          </div>
        </div>
      </div>
      <div className="co_img">
        <img src={socDist} alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
