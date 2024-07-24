import React from "react";
import TruckIcon from "../../assets/Icon/truck.svg";
import PhoneIcon from "../../assets/Icon/phone-call.svg";
import MoneyIcon from "../../assets/Icon/money.svg";
import DiscountIcon from "../../assets/Icon/tag.svg";
import "./customer-service.css";

const CustomerService = () => {
  const serviceData = [
    {
      id: 1,
      img: TruckIcon,
      altName: "Truck Icon",
      heading: "Free Delivery",
      details: "Free shipping on all orders",
    },
    {
      id: 2,
      img: PhoneIcon,
      altName: "Phone Icon",
      heading: "Online Support 24/7",
      details: "Support online 24 hours a day",
    },
    {
      id: 3,
      img: MoneyIcon,
      altName: "Money Icon",
      heading: "Money Return",
      details: "Back guarantee under 7 days",
    },
    {
      id: 4,
      img: DiscountIcon,
      altName: "Discount Icon",
      heading: "Member Discount",
      details: "On every order over $120.00",
    },
  ];

  return (
    <div className="main-container">
      {serviceData.map((item) => (
        <div key={item.id} className="service-container">
          <div className="service-images">
            <img src={item.img} alt={item.altName} />
          </div>
          <div className="service-content">
            <p className="service-heading">{item.heading}</p>
            <p className="service-details">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerService;
