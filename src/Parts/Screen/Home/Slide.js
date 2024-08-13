import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import $ from "jquery";
import { SlideBox, Img, Next, Prev } from "./Slide.jsx";
import nextimg from "../Home/Img/Slide/next.png";
import previmg from "../Home/Img/Slide/prev.png";

let count = 1;

const next = function () {
  let handleSlideBox = $(".slidebox");

  if (count == 1) {
    $(handleSlideBox).css("transform", "translateX(-100%)");
    $(handleSlideBox).css("transition", "all 0.8s");
    count++;
  } else if (count == 2) {
    $(handleSlideBox).css("transform", "translateX(-200%)");
    $(handleSlideBox).css("transition", "all 0.8s");
    count++;
  }
};

const prev = function () {
  let handleSlideBox = document.querySelectorAll(".slidebox");
  if (count == 2) {
    $(handleSlideBox).css("transform", "translateX(0%)");
    $(handleSlideBox).css("transition", "all 0.8s");
    count--;
  }
  if (count == 3) {
    $(handleSlideBox).css("transform", "translateX(-100%)");
    $(handleSlideBox).css("transition", "all 0.8s");
    count--;
  }
};

function Slide() {
  return (
    <SlideBox>
      <Img $img1 $postion1 className="slidebox" />
      <Img $img2 $postion2 className="slidebox" />
      <Img $img3 $postion2 className="slidebox" />
      <Next onClick={next} className="next" src={nextimg} />
      <Prev onClick={prev} className="prev" src={previmg} />
    </SlideBox>
  );
}
export default Slide;
