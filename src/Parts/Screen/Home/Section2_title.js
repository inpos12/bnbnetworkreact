import styled from "styled-components";
import React from "react";
import { Container, Text } from "../Common/Style/Style";
// #14126f;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px 0 0 0;
  padding: 50px 0;
  background-color: #14126f;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

function Section2_title() {
  return (
    <>
      <TitleBox>
        <Text $textfont800 $textwhite as={"h2"}>
          빌딩자동제어 전문 기업
        </Text>
        <Text $textfont800 $textwhite as={"p"}>
          필드 경험과 기술 및 다양한 실적
        </Text>
        <Text $textfont800 $textwhite as={"p"}>
          맞춤형 고객 기술 지원 및 다양한 인프라 제공
        </Text>
      </TitleBox>
      <Container $margin50>
        <Text $textblack="true" $textfont800="true">
          납품실적
        </Text>
        <Text $textlightblack $textfont800="true" as={"p"}>
          BEMS, SI, FMS, BAS, ZEM 납품실적
        </Text>
      </Container>
    </>
  );
}
export default Section2_title;
