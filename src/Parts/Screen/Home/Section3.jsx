import styled from "styled-components";
import {
  BREAKPOINTS_MOBILE_MEDIUM,
  BREAKPOINTS_MOBILE_SMALL,
  BREAKPOINTS_TABLET,
} from "../Common/mediaQuery";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: ${BREAKPOINTS_MOBILE_SMALL}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 3px solid white;
  padding: 0;
  margin: 20px 0;
  gap: 10px;
`;
export const Img = styled.img`
  width: 100%;
  background-color: white;
  border-radius: 50%;
  padding: 10px;
`;
export const P = styled.p`
  font-weight: 600;
  color: ${(props) => props.$color};
  margin: 0;
`;
export const H2 = styled.h2`
  font-weight: 800;
  color: ${(props) => props.$color};
  margin: 0;
`;
export const H3 = styled.h3`
  color: #ff9000;
  font-weight: 800;
  margin: 0;
`;
export const H4 = styled.h4`
  color: white;
  font-weight: 800;
  margin: 0;
`;
export const H5 = styled.h5`
  font-weight: 400;
  color: white;
  margin: 0;
`;
export const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;
  padding: 6px 16px;
  color: white;
`;

export const MapContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 5px;
  display: flex;
  justify-content: center;
`;
export const MapText = styled.div`
  position: absolute;
  z-index: 10;
  background-color: #14126f;
  width: 50%;
  bottom: 0;
  left: 0;
  padding: 30px 0 30px 30px;
  border-radius: 30px;

  @media (max-width: ${BREAKPOINTS_MOBILE_MEDIUM}px) {
    width: 100%;
  }
`;
