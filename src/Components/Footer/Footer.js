import React from "react";
import FacebookIcon from "../../assets/Icon/facebook-logo.svg";
import YoutubeLogo from "../../assets/Icon/youtube-logo.svg";
import WhatsappLogo from "../../assets/Icon/whatsapp-logo.svg";
import InstaLogo from "../../assets/Icon/instagram-logo.svg";
import TelegramLogo from "../../assets/Icon/telegram-logo.svg";
import "./footer.css";

const Footer = () => {
  const Icons = [
    {
      id: 1,
      altImage: "Facebook Icon",
      img: FacebookIcon,
    },
    {
      id: 2,
      altImage: "YouTube Logo",
      img: YoutubeLogo,
    },
    {
      id: 3,
      altImage: "WhatsApp Logo",
      img: WhatsappLogo,
    },
    {
      id: 4,
      altImage: "Instagram Logo",
      img: InstaLogo,
    },
    {
      id: 5,
      altImage: "Telegram Logo",
      img: TelegramLogo,
    },
  ];

  return (
    <>
      <hr className="horizontal-line" />
      <div className="footer-container">
        <div className="social-icons">
          <p>Follow us:</p>
          {Icons.map((item) => (
            <img
              key={item.id}
              className="social-icon"
              src={item.img}
              alt={item.altImage}
            />
          ))}
        </div>
        <div className="footer-content">
          <p>
            Copyright 2024 © Blonwe WordPress Theme. All rights reserved.
            Powered by KLBTheme.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
