import $ from "jquery";
import React from "react";
import { Button, Container } from "../Common/Style/Style";
import Section2_title from "./Section2_title";
import { BREAKPOINTS_MOBILE_MEDIUM } from "../Common/mediaQuery";
import "./css/Section2.css";
import { AutoSlideContainer, Ul, Li, Img, Back, Text } from "./Section2.jsx";

import Img1 from "./Img/Section2/03-납품실적01.jpg";
import Img2 from "./Img/Section2/03-납품실적02.jpg";
import Img3 from "./Img/Section2/03-납품실적03.jpg";
import Img4 from "./Img/Section2/03-납품실적04.jpg";
import Img5 from "./Img/Section2/03-납품실적05.jpg";
import Img6 from "./Img/Section2/03-납품실적06.jpg";
import Img7 from "./Img/Section2/03-납품실적07.jpg";
import Img8 from "./Img/Section2/03-납품실적08.jpg";
import Img9 from "./Img/Section2/03-납품실적009.jpg";
import Img10 from "./Img/Section2/03-납품실적10.jpg";
import Img11 from "./Img/Section2/03-납품실적11.jpg";
import Img12 from "./Img/Section2/03-납품실적12.jpg";

$(document).ready(function () {
  $(".original1, .clone").hover(
    function () {
      if ($(window).width() >= BREAKPOINTS_MOBILE_MEDIUM) {
        $(".original1, .clone").css("animation-play-state", "paused");
      }
    },
    function () {
      if ($(window).width() >= BREAKPOINTS_MOBILE_MEDIUM) {
        $(".original1, .clone").css("animation-play-state", "running");
      }
    }
  );
});
function Lilist(props) {
  return (
    <>
      <Li className="AutoSlide_li">
        <Img src={props.imgsrc} />
        <Text>{props.title}</Text>
        <Back />
      </Li>
    </>
  );
}

function UlBox(props) {
  return (
    <>
      <Ul className={props.class}>
        <Lilist imgsrc={Img1} title="산동초등학교" />
        <Lilist imgsrc={Img2} title="군포시가족센터" />
        <Lilist imgsrc={Img3} title="경기도신청사" />
        <Lilist imgsrc={Img4} title="강서마스터밸류" />
        <Lilist imgsrc={Img5} title="로봇과학관" />
        <Lilist imgsrc={Img6} title="한국수력원자력" />
        <Lilist imgsrc={Img7} title="인천서울여성병원" />
        <Lilist imgsrc={Img8} title="도안동행정복지센터" />
        <Lilist imgsrc={Img9} title="광주솔로몬파크" />
        <Lilist imgsrc={Img10} title="강서아트리움" />
        <Lilist imgsrc={Img11} title="치동중학교" />
        <Lilist imgsrc={Img12} title="시흥은계어울림센터" />
      </Ul>
    </>
  );
}

function Section2() {
  return (
    <>
      <Section2_title />
      <AutoSlideContainer className="container1">
        <UlBox class="original1" />
        <UlBox class="clone" />
      </AutoSlideContainer>
      <Container $margin50>
        <Button className="but">납품실적 더보기</Button>
      </Container>
    </>
  );
}
export default Section2;
