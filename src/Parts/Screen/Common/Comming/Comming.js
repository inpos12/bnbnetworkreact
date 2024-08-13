import React from "react";
import styled from "styled-components";
import Icon from "./Icon.png";

const Img = styled.img`
  width: 250px;
`;
const CommingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H2 = styled.h2`
  font-weight: 800;
`;
const H4 = styled.h4`
  font-weight: 600;
`;

function Comming() {
  return (
    <>
      <CommingContainer>
        <Img src={Icon} />
        <H2>현재 페이지를 작업중입니다.</H2>
        <H4>Comming Soon</H4>
      </CommingContainer>
    </>
  );
}

export default Comming;
