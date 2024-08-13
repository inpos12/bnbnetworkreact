import styled from "styled-components";
import {
  BREAKPOINTS_MOBILE_MEDIUM,
  BREAKPOINTS_MOBILE_SMALL,
  BREAKPOINTS_PC,
  BREAKPOINTS_TABLET,
} from "../Common/mediaQuery";

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  @media (max-width: ${BREAKPOINTS_MOBILE_SMALL}px) {
    flex-wrap: wrap;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 10%;
`;

export const Back = styled.div`
  position: absolute;
  background-color: black;
  border-radius: 10%;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  top: 0;
  left: 0;
`;

export const Textabsolute = styled.h4`
  display: block;
  position: absolute;
  width: 100%;
  text-align: center;
  color: white;
  z-index: 1;
  font-weight: ${(props) =>
    props.$font800 ? "800" : props.$font600 ? "600" : ""};
  top: ${(props) =>
    props.$text1 ? "20%" : props.$text2 ? "30%" : props.$text3 ? "50%" : ""};
  opacity: ${(props) => (props.$opacity ? "0" : "1")};
  transition: all 1.2s;
  @media (max-width: ${BREAKPOINTS_TABLET}px) {
    opacity: 1;
  }
`;
export const Test = styled.div`
  margin: 0 10px;
  position: relative;
  width: 100%;
  transition: all 1.2s;
  transform-style: preserve-3d;
  perspective: 1100px;
  transform: rotateY(-180deg) scale(-1, 1);

  @media (min-width: ${BREAKPOINTS_PC}px) {
    &:hover {
      transform: rotateY(0deg);
    }
    &:hover ${Textabsolute} {
      opacity: 1;
    }
  }
  @media (max-width: ${BREAKPOINTS_TABLET}px) {
    margin-top: 20px;
  }
  @media (max-width: ${BREAKPOINTS_MOBILE_MEDIUM}px) {
    margin-top: 20px;
  }
  @media (max-width: ${BREAKPOINTS_MOBILE_SMALL}px) {
    margin-top: 20px;
  }
`;
