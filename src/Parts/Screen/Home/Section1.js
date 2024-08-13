import React from "react";
import Img1 from "../Home/Img/Section1/Section1_item_1.jpg";
import Img2 from "../Home/Img/Section1/Section1_item_2.jpg";
import Img3 from "../Home/Img/Section1/Section1_item_3.jpg";
import Img4 from "../Home/Img/Section1/Section1_item_4.jpg";
import Img5 from "../Home/Img/Section1/Section1_item_5.jpg";
import { Button, Text } from "../Common/Style/Style";
import { FlexBox, StickyBox, TextBox, ImgBox, Img } from "./Section1.jsx";

function Title(props) {
  return (
    <TextBox>
      <Text $textblack $textfont800 as={"h3"}>
        {props.title}
      </Text>
      <Text $textlightblack $textfont600 as={"h5"}>
        에너지 절감을 위한 스타트 솔루션
        <br />
        (Energy Solution Provider)
        <br />
        BEMS, SI, FMS, BAS, ZEB Solution
      </Text>
      <Button $TABLETNONE>사업영역 더보기 </Button>
    </TextBox>
  );
}

function Section1() {
  return (
    <>
      <FlexBox>
        <StickyBox>
          <Title title="사업 영역" />
        </StickyBox>
        <ImgBox>
          <Img src={Img1} />
          <Img src={Img2} />
          <Img src={Img3} />
          <Img src={Img4} />
          <Img src={Img5} />
        </ImgBox>
      </FlexBox>
    </>
  );
}

export default Section1;
