import React from "react";
import "./header.css";
import PhoneIcon from "../../assets/Icon/phone-fill.svg";
import SunIcon from "../../assets/Icon/sun-fill.svg";
import Dropdown from "../Common Component/Dropdown";

const Header = () => {
  return (
    <header className="header-container">
      <div className="inner-container">
        <div className="header-content">Track Order</div>
        <div className="header-content">About Us</div>
        <div className="header-content">Contact</div>
        <div className="header-content">FAQ</div>
      </div>

      <div className="contact-info">
        <img src={PhoneIcon} alt="Phone Icon" />
        <div className="theme">You can contact Us 24/7</div>
        <div className="contact-number">0 800 300-353</div>
        <div className="vertical-line">|</div>
        <Dropdown
          label="English"
          items={["English", "Spanish", "French"]}
          ArrowStyle={{
            marginLeft: "10px",
            width: "12px",
            height: "12px",
          }}
        />
        <Dropdown
          label="USD"
          items={["USD", "EUR", "GBP"]}
          ArrowStyle={{
            marginLeft: "10px",
            width: "12px",
            height: "12px",
          }}
        />
        <img
          src={SunIcon}
          alt="Sun Icon"
          style={{ marginLeft: "10px", marginTop: "4px" }}
        />
        <div className="theme">Dark Theme</div>
      </div>
    </header>
  );
};

export default Header;
