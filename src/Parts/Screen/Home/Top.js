import React from "react";
import { Row } from "../Common/Style/Style";

import { TitleBox, ImgBox, Img, Back, Textabsolute, Test } from "./Top.jsx";
import Img1 from "../Home/Img/Top/에너지효율성2.png";
import Img2 from "../Home/Img/Top/보안시스템.png";
import Img3 from "../Home/Img/Top/유지보수용이성.png";
import Img4 from "../Home/Img/Top/최신기술활용.png";
import { Container, Text } from "../Common/Style/Style";

const flex1 = {
  display: "flex",
};

function Item(props) {
  return (
    <>
      <Test className="Test">
        <Img src={props.imgsrc} className="Img" />
        <Textabsolute $text1 $font800 as={"h4"}>
          {props.title}
        </Textabsolute>
        <Textabsolute $text2 $font600 as={"p"}>
          {props.title2}
        </Textabsolute>
        <Textabsolute $opacity $text3 $font600 as={"h6"}>
          {props.text}
        </Textabsolute>
        <Back></Back>
      </Test>
    </>
  );
}

function Top() {
  return (
    <>
      <Container>
        <TitleBox>
          <Text $textblack $textfont800 as={"h1"}>
            About
          </Text>
          <Text $textfont800 $textblue as={"h1"}>
            &nbsp;Us
          </Text>
        </TitleBox>
        <Text $textlightblack $textfont600 as={"h5"}>
          비앤비네트웍스는 빌딩자동제어 전문업체 입니다.
        </Text>
      </Container>
      <Container $wrap style={flex1} className="Container">
        <Row>
          <ImgBox className="ImgBox">
            <Item
              imgsrc={Img1}
              title={"에너지효율성"}
              title2={"energy efficiency"}
              text={"에너지 비용을 절감하고 환경에 미치는 영향을 줄입니다."}
            />
            <Item
              imgsrc={Img2}
              title={"편의성"}
              title2={"convenience"}
              text={"건물 시스템을 자동으로 관리하여 사용자 편의성을 높입니다."}
            />
          </ImgBox>
        </Row>
        <Row>
          <ImgBox className="ImgBox">
            <Item
              imgsrc={Img3}
              title={"유지 보수 용이성"}
              title2={"ease of maintenance"}
              text={
                "문제를 신속하게 감지하여 시설 유지 보수를 간편하게 합니다."
              }
            />
            <Item
              imgsrc={Img4}
              title={"안전성 강화"}
              title2={"Enhanced safety"}
              text={
                "화재 경보 및 보안 시스템을 통합하여 건물의 안전성을 높입니다."
              }
            />
          </ImgBox>
        </Row>
      </Container>
    </>
  );
}

export default Top;
