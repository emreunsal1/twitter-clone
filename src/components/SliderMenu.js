import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as DeleteIcon } from "./icons/deleteIcon.svg";
export default function SliderMenu({ sliderPopup, setSliderPopup, medias }) {
  document.body.addEventListener("click", (e) => {
    if (e.target.className === "slider") setSliderPopup(false);
  });
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  if (!sliderPopup) {
    document.body.style.overflow = "auto";
    return null;
  }

  document.body.style.overflow = "hidden";
  return (
    <div className="slider">
      <div className="delete-button" onClick={() => setSliderPopup(false)}>
        <DeleteIcon />
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {medias.map((media) => (
            <div className="image-container">
              <img src={media.url}></img>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
