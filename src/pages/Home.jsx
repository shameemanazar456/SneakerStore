// Home.jsx
import React from "react";
import Carousel from "../Subpages/Carousel";
import Collection from "../Subpages/Collection";
import Products from "../Subpages/Products";

const Home = ({uid, isLoggedin}) => {
  return (
    <div
      className="home  px-4 pt-3"
      // style={{ backgroundColor: "rgb(219, 211, 211)" }}
    >
      {/* home-video Section */}
      <div className="video_section rounded shadow">
        <video autoPlay muted playsInline loop>
          <source src="home_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="carousel mt-3">
        <Carousel />
      </div>
      <div className="collections mt-5">
        <Collection />
      </div>
      <div className="products">
        <Products  uid={uid} isLoggedin={isLoggedin}  />
      </div>
    </div>
  );
};

export default Home;
