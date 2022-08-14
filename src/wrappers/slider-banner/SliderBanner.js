import React from "react";
import BannerEight from "../banner/BannerEight";
import HeroSliderOneSeven from "../hero-slider/HeroSliderOneSeven";

const SliderBanner = () => {
  return (
    <div className="slider-banner-area">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-8 col-md-12">
            {/* hero slider */}
            <HeroSliderOneSeven />
          </div>
          {/* banner */}
          <BannerEight />
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
