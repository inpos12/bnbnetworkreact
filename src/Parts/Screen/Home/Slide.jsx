import styled from "styled-components";
import {
  BREAKPOINTS_MOBILE_MEDIUM,
  BREAKPOINTS_TABLET,
} from "../Common/mediaQuery";
import Slide_1 from "../Home/Img/Slide/SLIDE-1.jpg";
import Slide_2 from "../Home/Img/Slide/SLIDE-2.jpg";
import Slide_3 from "../Home/Img/Slide/Slide.jpg";

///filter
//blur
export const SlideBox = styled.div`
  display: -webkit-inline-box;
  overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 75vh; /* 컨테이너의 높이 지정 */

  @media (max-width: ${BREAKPOINTS_TABLET}px) {
    height: 50vh;
    margin-top: 0px;
  }
`;

export const Img = styled.div`
  width: 100%;
  /* filter: contrast(150%); */
  background-image: ${(props) =>
    props.$img1
      ? `url(${Slide_1})`
      : props.$img2
      ? `url(${Slide_2})`
      : props.$img3
      ? `url(${Slide_3})`
      : ""};
  background-repeat: no-repeat;
  background-position: ${(props) =>
    props.$postion1 ? "10% 50%" : props.$postion2 ? "50% 50%" : ""};

  transition: all 0.8s;
  background-size: cover;
`;

export const Next = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  right: 5%;
  z-index: 10;
  @media (max-width: ${BREAKPOINTS_MOBILE_MEDIUM}px) {
    width: 40px;
    height: 40px;
  }
`;
export const Prev = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 5%;
  z-index: 10;
  @media (max-width: ${BREAKPOINTS_MOBILE_MEDIUM}px) {
    width: 40px;
    height: 40px;
  }
`;
