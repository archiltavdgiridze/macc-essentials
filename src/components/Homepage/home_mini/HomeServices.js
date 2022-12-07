import React from 'react'
import servicesHuman from "../../../assets/Home/services/services_human.png";


const HomeServices = () => {
  return (
    <div className="home_serv">
      <div className="container">
        <div className="home_serv_cont">
          <div className="home_serv_text">
            <div className="wrapper">
              <h1>PROVIDING SERVICES AT YOUR DOOR</h1>
              <p>
                MACC Essentials has an important role in making supplies and
                services available to customers and their patients during this
                critical time. This includes services from various domains. Our
                aim is to aid you. As much we can.
              </p>
              <button>LEARN MORE</button>
            </div>
          </div>
          <div className="home_serv_img">
            <div>
              <img src={servicesHuman} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServices
