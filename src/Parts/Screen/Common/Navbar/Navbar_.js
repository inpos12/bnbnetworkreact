import $ from "jquery";
import { BREAKPOINTS_MOBILE_MEDIUM, BREAKPOINTS_TABLET } from "../mediaQuery";

$(".original1, .clone").hover(
  function () {
    if ($(window).width() >= BREAKPOINTS_MOBILE_MEDIUM) {
      $(".original1, .clone").css("animation-play-state", "paused");
    }
  },
  function () {
    if ($(window).width() >= BREAKPOINTS_MOBILE_MEDIUM) {
      $(".original1, .clone").css("animation-play-state", "running");
    }
  }
);
