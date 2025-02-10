import React, { useEffect } from "react";
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
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        initMap();
      } else {
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1e8088618b18b94cc6e84b41454e58fd&libraries=services&autoload=false`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          window.kakao.maps.load(() => {
            initMap(); // 로드 완료 후 실행
          });
        };
      }
    };

    const initMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("카카오 맵 API 로드 실패");
        return;
      }

      const mapContainer = document.getElementById("map");
      if (!mapContainer) return;

      const mapOption = {
        center: new window.kakao.maps.LatLng(
          37.56460225767364,
          127.06642673825462
        ),
        level: 2,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      const marker = new window.kakao.maps.Marker({
        position: mapOption.center,
      });

      marker.setMap(map);

      const content = `
        <div style="padding:5px; background:white; border-radius:5px; font-size:12px; font-weight:bold; color:black;">
          비엔비네트웍스
        </div>`;

      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: mapOption.center,
        content: content,
      });

      customOverlay.setMap(map);
    };

    loadKakaoMap();
  }, []);

  return (
    <>
      {/* 회사 정보 섹션 */}
      <Container style={container1}>
        <Row style={row}>
          <Ul>
            <li>
              <Img src={Icon1} alt="회사 아이콘" />
            </li>
            <li>
              <H3>회사위치안내</H3>
            </li>
            <li>
              <Button
                onClick={() => window.open("https://example.com", "_blank")}
              >
                자세히보기
              </Button>
            </li>
          </Ul>
          <Ul>
            <li>
              <Img src={Icon1} alt="전화 아이콘" />
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

      {/* 오시는 길 안내 */}
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

      {/* 지도 섹션 */}
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <MapContainer>
            <div id="map" style={{ width: "1200px", height: "600px" }}></div>
            <MapText>
              <H4>04320</H4>
              <H4>서울 용산구 한강대로 405</H4>
              <H4>TEL : 010-1234-1234 &nbsp;&nbsp;&nbsp;FAX : 070-1234-1234</H4>
            </MapText>
          </MapContainer>
        </Row>
      </Container>
    </>
  );
}

export default Section3;
