import React from "react";
import SearchIcon from "../../assets/Icon/big-magnifying-glass.svg";
import HeartIcon from "../../assets/Icon/heart.svg";
import CartIcon from "../../assets/Icon/shopping-cart-simple.svg";
import UserIcon from "../../assets/Icon/user.svg";
import LogoIcon from "../../assets/Icon/x-logo.svg";
import Dropdown from "../Common Component/Dropdown";
import "./search-bar.css";

const SearchBar = () => {
  return (
    <div className="container">
      <div className="search-container">
        <div className="logo">
          <img className="logo-image" src={LogoIcon} alt="Logo" />
          <div className="logo-text">blonwe</div>
        </div>
        <div className="search-bar-container">
          <div className="search-dropdown">
            <Dropdown
              label="All"
              items={[
                "All",
                "Appliances",
                "Camera & Photo",
                "Goods & Games",
                "Headphone & Music",
                "Laptop & Computer",
              ]}
              ArrowStyle={{
                marginLeft: "10px",
                width: "12px",
                height: "12px",
              }}
            />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search for products..."
          />
          <button className="search-button">
            <img
              className="search-icon-image"
              src={SearchIcon}
              alt="Search Icon"
            />
          </button>
        </div>
      </div>
      <div className="user-container">
        <img className="user-image" src={UserIcon} alt="User Icon" />
        <img className="user-image" src={HeartIcon} alt="Heart Icon" />
        <img className="user-image" src={CartIcon} alt="Cart Icon" />
      </div>
    </div>
  );
};

export default SearchBar;
