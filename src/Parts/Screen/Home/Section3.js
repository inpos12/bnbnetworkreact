/* eslint-disable */
import React, { useEffect, useState } from "react";

import {
  Container,
  Row,
  Img,
  Ul,
  P,
  H2,
  H3,
  H4,
  H5,
  Button,
  MapContainer,
  MapText,
} from "./Section3.jsx";
import Icon1 from "./Img/Section3/icon_1_mobile.png";

const container1 = {
  backgroundColor: "#14126f",
};
const row = {
  justifyContent: "space-between",
  maxWidth: "800px",
};
const container2 = {
  flexDirection: "column",
};
const maprow = {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
};

function Section3() {
  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new window.kakao.maps.LatLng(
          37.56460225767364,
          127.06642673825462
        ), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
      };

    var map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다
    var markerPosition = new window.kakao.maps.LatLng(
      37.56460225767364,
      127.06642673825462
    );

    // 마커를 생성합니다
    var marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var content =
      "<div><h5 style=font-size:12px;font-weight:800;color:black;transform:translateY(-40px)>비엔비네트웍스</h5></div>";
    var customOverlay = new window.kakao.maps.CustomOverlay({
      position: markerPosition,
      content: content,
    });
    customOverlay.setMap(map);
    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);
  }, []);
  return (
    <>
      <Container style={container1}>
        <Row style={row}>
          <Ul>
            <li>
              <Img src={Icon1}></Img>
            </li>
            <li>
              <H3>회사위치안내</H3>
            </li>
            <li>
              <Button>자세히보기</Button>
            </li>
          </Ul>
          <Ul>
            <li>
              <Img src={Icon1}></Img>
            </li>
            <li>
              <H3>02-2244-0830</H3>
            </li>
            <li>
              <H5>월~금 : 9시~6시</H5>
            </li>
            <li>
              <H5>공휴일 제외</H5>
            </li>
          </Ul>
        </Row>
      </Container>
      <Container style={container2}>
        <Row style={maprow}>
          <H2 $color="black">오시는길</H2>
          <P $color="black">
            자동화 분야에서 기술과 신뢰를 제일로 하는 기업을 목표로
          </P>
          <P>
            고객의 요구에 부응하는 솔루션을 제공할 수 있는 기업이 되겠습니다.
          </P>
        </Row>
      </Container>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <MapContainer>
            <div id="map" style={{ width: "1200px", height: "600px" }}></div>
            <MapText>
              <H4>04320</H4> <H4>서울 용산구 한강대로 405</H4>
              <H4>
                TEL : 010-1234-1234 &nbsp;&nbsp;&nbsp;FAX : 070-1234-1234{" "}
              </H4>
            </MapText>
          </MapContainer>
        </Row>
      </Container>
    </>
  );
}
export default Section3;
