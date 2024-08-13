import styled from "styled-components";
import {
  BREAKPOINTS_MOBILE_SMALL,
  BREAKPOINTS_MOBILE_MEDIUM,
  BREAKPOINTS_TABLET,
} from "../mediaQuery";

export const Container_full = styled.div`
  padding: 100px 0;
`;
export const Container = styled.div`
  max-width: 1280px;
  text-align: center;
  margin: ${(props) => (props.$margin50 ? "50px auto" : "100px auto")};

  flex-wrap: nowrap;
  @media (max-width: ${BREAKPOINTS_TABLET}px) {
    flex-wrap: ${(props) => (props.$wrap ? "wrap" : "nowrap")};
  }
  @media (max-width: ${BREAKPOINTS_MOBILE_MEDIUM}px) {
    flex-wrap: ${(props) => (props.$wrap ? "wrap" : "nowrap")};
  }
  @media (max-width: ${BREAKPOINTS_MOBILE_SMALL}px) {
    flex-wrap: ${(props) => (props.$wrap ? "wrap" : "nowrap")};
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const Button = styled.button`
  margin-top: 3px;
  padding: 10px 15px;
  border-radius: 11px;
  background-color: rgb(20, 18, 111);
  color: white;
  font-size: 25px;
  font-weight: 600;
  border-width: 0;
  @media (max-width: ${BREAKPOINTS_TABLET}px) {
    display: ${(props) => (props.$TABLETNONE ? "none" : "")};
  }
`;

export const Text = styled.h1`
  color: ${(props) =>
    props.$textblack
      ? "#212121"
      : props.$textlightblack
      ? "#434343"
      : props.$textblue
      ? "#14126f"
      : props.$textgray
      ? "#3b4859"
      : props.$textwhite
      ? "white"
      : ""};
  font-weight: ${(props) =>
    props.$textfont600
      ? 600
      : props.$textfont800
      ? 800
      : props.$textfont500
      ? 500
      : "normal"};

  margin: ${(props) =>
    props.margin0 ? "0" : props.margintop5 ? "5px 0 0 0" : ""};
`;
