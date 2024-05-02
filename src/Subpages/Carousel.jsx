import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    fade: "true",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: "true",
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="carousel-container">
      {/* Wrap Slider with a container */}
      <Slider {...settings} className="slick-slider">
        <div>
          <img
            src="/nike_sale_1.jpeg"
            style={{ height: "450px", width: "100%" }}
            alt=""
            className="rounded"
          />
        </div>
        <div>
          <img
            src="/puma_sale_2.jpg"
            style={{ height: "450px", width: "100%" }}
            alt=""
            className="rounded"
          />
        </div>
        <div>
          <h3>
            {" "}
            <img
              src="/sale_3.jpg"
              style={{ height: "450px", width: "100%" }}
              alt=""
              className="rounded"
            />
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
