import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousal-banner.css";
import banner1 from "../../assets/Banner/Banner4.jpg";
import banner2 from "../../assets/Banner/Banner2.jpg";
import banner3 from "../../assets/Banner/Banner3.jpg";

export const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      {">"}
    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      {"<"}
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const CarouselBanner = () => {
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img className="banner-image" src={banner1} alt="Banner 1" />
        </div>
        <div>
          <img className="banner-image" src={banner2} alt="Banner 2" />
        </div>
        <div>
          <img className="banner-image" src={banner3} alt="Banner 3" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselBanner;
