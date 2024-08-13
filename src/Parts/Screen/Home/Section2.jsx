import styled from "styled-components";
import { BREAKPOINTS_MOBILE_MEDIUM } from "../Common/mediaQuery";

export const AutoSlideContainer = styled.div`
  overflow: hidden;

  display: flex;
`;

export const Ul = styled.ul`
  display: flex;
  margin-top: 50px;
  padding: 0;
`;

export const Li = styled.li`
  position: relative;
  margin-right: 30px;
  width: 250px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 14px;
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.12))
    drop-shadow(0 3px 3px rgba(0, 0, 0, 0.14))
    drop-shadow(0 1px 8px rgba(0, 0, 0, 0.12))
    drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1));
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-15%);
  }

  @media (max-width: ${BREAKPOINTS_MOBILE_MEDIUM}px) {
    &:hover {
      transform: none;
    }
  }
`;
export const Back = styled.div`
  position: absolute;
  background-color: black;
  border-radius: 14px;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  top: 0;
  left: 0;
  display: none;
  @media (max-width: ${BREAKPOINTS_MOBILE_MEDIUM}px) {
    display: block;
  }
`;
export const Text = styled.h4`
  position: absolute;
  bottom: 0;
  color: black;
  font-weight: 800;
  z-index: -1;
  margin: 0 0 0 20px;
  padding: 0;
  @media (max-width: ${BREAKPOINTS_MOBILE_MEDIUM}px) {
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: white;
    margin: 0 auto;
    padding: 0;
  }
`;
