import React from 'react'
import searchIcon from "../../../assets/Home/navbar/search_lupa.png";
import personIcon from "../../../assets/Home/navbar/person_icon_navbar.png";
import bellIcon from "../../../assets/Home/navbar/bell_notif_img.png";
import shopIcon from "../../../assets/Home/navbar/shopping_icon_navbar.png";
// import Navbar from "./../Header";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="search_lupa">
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <div className="nav_links">
          <ul>
            <li className='list1'>SHOP</li>
            <li className='list2'>ESSENTIALS</li>
            <li className="brand list3">
              Macc <span>Essentials</span>
            </li>
            <li className='list4'>BEST SELLERS</li>
            <li className='list5'>ABOUT US</li>
          </ul>
        </div>
        <div className="link_icons">
          <img src={personIcon} alt="" />
          <img src={bellIcon} alt="" />
          <img src={shopIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar
