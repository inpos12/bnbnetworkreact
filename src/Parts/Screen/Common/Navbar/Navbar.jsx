import styled from "styled-components";
import {
  BREAKPOINTS_MOBILE_MEDIUM,
  BREAKPOINTS_MOBILE_SMALL,
  BREAKPOINTS_TABLET,
} from "../mediaQuery";

export const Text = styled.h6`
  color: white;
  font-weight: bold;
  padding: 20px 0;
  margin-bottom: 0;
`;

export const Img = styled.img`
  max-width: 100%;
  /* filter: brightness(63) hue-rotate(44deg); */
`;
export const Img1 = styled.img`
  max-width: 200px;
  filter: brightness(63) hue-rotate(44deg);
  @media (max-width: ${BREAKPOINTS_TABLET}px) {
    padding: 20px 0;
  }
`;

export const Ul = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14126f;
  transition: all 0.2s ease-in;
  z-index: 100;
  @media (max-width: ${BREAKPOINTS_TABLET}) {
    position: fixed;
    top: 0;
    max-width: 100%;
    z-index: 100;
  }
`;

export const DropdownUl = styled.ul`
  z-index: 100;
  position: absolute;
  /* transform: translateY(108px) translateX(-20px); */
  background-color: #5074ad;
  width: 150px;
  padding: 0;
  display: none;
`;
export const DropdownLinkBox = styled.div`
  padding: 20px 0;
`;

export const DropdownLi = styled.li`
  padding: 5px;
  display: block;
  padding-left: 23px;
  text-align: left;
  color: white;
  font-size: 1rem;
  &:hover {
    background-color: #1071ff;
  }
`;
export const Li = styled.li`
  position: relative;
  margin-right: 90px;
  display: block;
  font-weight: bold;

  transition: all 0.2s ease-in-out;
  @media (max-width: ${BREAKPOINTS_TABLET}px) {
    display: ${(props) => (props.$none ? "none" : "block")};
  }
`;
export const Mobile_Menu_Ul = styled.ul`
  text-align: left;
  position: relative;
  padding: 0;
  background-color: darkblue;
`;
export const Mobile_Menu_Li = styled.li`
  position: relative;
  font-size: 18px;

  padding: 16px 20px 0px;
  &::before {
    content: "";
    width: 13px;
    height: 13px;
    position: absolute;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    transform: rotate(45deg);
    right: 15px;
    margin-right: 20px;
  }
  &.active::before {
    top: 25px;
    transform: rotate(-135deg);
  }
`;
export const Mobile_SubMenu_Ul = styled.ul`
  background-color: #e9e7e7;
  display: none;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const Mobile_SubMenu_Li = styled.li`
  color: #14126f;
  padding: 8px 0;
`;
export const Hr = styled.hr`
  margin: 1rem 0 0 0;
  color: inherit;
  border: 0;
  border-top: var(--bs-border-width) solid;
  opacity: 0.5;
`;
