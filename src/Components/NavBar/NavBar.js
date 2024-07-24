import React from "react";
import "./navbar.css";
import Dropdown from "../Common Component/Dropdown";
import DiscounIcon from "../../assets/Icon/seal-percent.svg";

const NavBar = () => {
  let navData = [
    "Home",
    "Shop",
    "Smartwatches",
    "Laptops & Computers",
    "Blog",
    "Best Discounts",
  ];
  return (
    <div className="navBarContainer">
      <div className="browseCategoriesDropDown">
        <Dropdown
          label={"Browse Categories"}
          items={[
            "All",
            "Appliances",
            "Camera & Photo",
            "Goods & Games",
            "Headphone & Music",
            "Laptop & Computer",
          ]}
          ArrowStyle={{
            marginLeft: "20px",
            width: "12px",
            height: "12px",
          }}
        />
      </div>

      <div className="navContainer">
        {navData.map((item, index) => {
          if (item === "Shop") {
            return (
              <div key={index} className="navItem">
                <Dropdown
                  label={item}
                  items={[
                    "Shop List",
                    "Product Detail",
                    "Shop Page",
                    "Shop Layout",
                  ]}
                  ArrowStyle={{
                    marginLeft: "10px",
                    width: "12px",
                    height: "12px",
                  }}
                />
              </div>
            );
          } else if (item === "Best Discounts") {
            return (
              <div key={index} className="navItem">
                <img src={DiscounIcon} alt="DiscountIcon" />
                <Dropdown
                  label={item}
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
            );
          }
          return (
            <div key={index}>
              <a className="navItem" href="#">
                {item}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
