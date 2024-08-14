import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import $ from "jquery";

import { SlideBox, Img, Next, Prev } from "./Slide.jsx";
import nextimg from "../Home/Img/Slide/next.png";
import previmg from "../Home/Img/Slide/prev.png";

let count = 1;

const next = function () {
  let handleSlideBox = $(".slidebox");
  $(handleSlideBox).css("transition", "all 0.8s");
  if (count == 1) {
    $(handleSlideBox).css("transform", "translateX(-100%)");

    count++;
  } else if (count == 2) {
    $(handleSlideBox).css("transform", "translateX(-200%)");

    count++;
  }
};

const prev = function () {
  let handleSlideBox = document.querySelectorAll(".slidebox");
  if (count == 2) {
    $(handleSlideBox).css("transform", "translateX(0%)");

    count--;
  }
  if (count == 3) {
    $(handleSlideBox).css("transform", "translateX(-100%)");

    count--;
  }
};

function Slide() {
  return (
    <SlideBox className="Test">
      <Img $img1 $postion1 className="slidebox" />
      <Img $img2 $postion2 className="slidebox" />
      <Img $img3 $postion2 className="slidebox" />
      <Next onClick={next} className="next" src={nextimg} />
      <Prev onClick={prev} className="prev" src={previmg} />
    </SlideBox>
  );
}
export default Slide;
