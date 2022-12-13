import React from "react";
import { Link } from "react-router-dom";
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
            <li className="list1">
              <Link to={"/details"}>SHOP</Link>
            </li>
            <li className="list2">
              <Link to="/essentials">ESSENTIALS</Link>
            </li>
            <li className="brand list3">
              <Link to="/">
                Macc <span>Essentials</span>
              </Link>
            </li>
            <li className="list4">
              <Link to={"/sellings"}>BEST SELLERS</Link>
            </li>
            <li className="list5">
              <Link to={"/"}>ABOUT US</Link>
            </li>
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
};

export default Navbar;
