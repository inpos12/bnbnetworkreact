import styled from "styled-components";
import {
  BREAKPOINTS_MOBILE_MEDIUM,
  BREAKPOINTS_TABLET,
} from "../Common/mediaQuery";

export const FlexBox = styled.div`
  width: 100%;
  padding: 150px 50px 0 50px;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: ${BREAKPOINTS_TABLET}px) {
    display: block;
    padding: 0;
  }
`;
export const StickyBox = styled.div`
  margin: 0;
`;
export const TextBox = styled.div`
  text-align: center;
  position: sticky;
  margin: 50px;
  top: 40%;
  @media (max-width: ${BREAKPOINTS_TABLET}px) {
    position: initial;
    margin: 0;
    padding: 100px 0;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 10px;
  @media (max-width: ${BREAKPOINTS_TABLET}px) {
    display: contents;
    margin: 0 10px;
  }
  @media (max-width: ${BREAKPOINTS_MOBILE_MEDIUM}px) {
    display: flex;
  }
`;
export const Img = styled.img`
  width: 80%;
  margin: auto;
  @media (max-width: ${BREAKPOINTS_TABLET}px) {
    width: 50%;
    padding: 10px;
  }
  @media (max-width: ${BREAKPOINTS_MOBILE_MEDIUM}px) {
    width: 100%;
  }
`;
