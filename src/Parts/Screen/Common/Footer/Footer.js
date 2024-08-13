import React from "react";
import $ from "jquery";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import Logo from "../Navbar/Img/Logo.png";

const Img = styled.img`
  width: 300px;
  max-width: 100%;

  filter: brightness(63) hue-rotate(44deg);
`;

const H5 = styled.h5`
  margin-top: 30px;
  font-size: 16px;
  font-weight: bold;
`;
// Left Title
const SubText = styled.div`
  display: flex;
`;

const P = styled.p`
  margin: 10px 0;
  font-weight: ${(props) =>
    props.$fontWeight800 ? "bold" : props.$fontWeight300 ? "lighter" : ""};
  font-size: 12px;
`;

function LeftTitle(props) {
  return (
    <>
      <SubText>
        <P $fontWeight800>{props.title}&nbsp;&nbsp;</P>
        <P $fontWeight600>{props.text}&nbsp;</P>
      </SubText>
    </>
  );
}
// Right Title
const Menu = styled.p`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: lighter;
`;
const P2 = styled.p`
  margin: 10px 0;
  font-size: 12px;
  font-weight: ${(props) => (props.$fontWeight800 ? "800" : "lighter")};
`;

function RightTitle(props) {
  return (
    <>
      <SubText className="RightText">
        <P2 $fontWeight800>{props.title}</P2>
        <P2>{props.text}</P2>
      </SubText>
    </>
  );
}

function Footer() {
  return (
    <>
      <Container className="Footer">
        <Row className="Row">
          <Img src={Logo} />
          <Col>
            <H5>회사 기본정보</H5>
            <LeftTitle title="상호명" text="(주)비엔비네트웍스" />
            <LeftTitle
              title="사업장 주소"
              text="02629 서울특별시 동대문구 장한로 37 201호(장안동, 인경빌딩)"
            />
            <SubText>
              <LeftTitle title="대표전화" text="070-7126-1555" />
              <LeftTitle title="사업자 등록번호" text="844-88-00107" />
              <LeftTitle title="통신판매업 신고번호" text="기타" />
            </SubText>
            <LeftTitle title="개인정보보호책임자" text="정수영" />
          </Col>
        </Row>
        <Row className="Row">
          <Col>
            <Col className="Menu">
              <Menu>회사소개</Menu>
              <Menu>사업소개</Menu>
              <Menu>인증 및 상장</Menu>
              <Menu>납품실적</Menu>
              <Menu>오시는길</Menu>
            </Col>
            <Col>
              <RightTitle title="고객센터 정보" text="SNS" />
              <RightTitle title="상담/주문전화" text="070-7126-1555" />
              <RightTitle
                title="상담/주문 이메일"
                text="bnbnetworks.@naver.com"
              />
              <RightTitle
                title="CS운영시간"
                text="평일 9:00AM ~ 18:00PM, 주말,공휴일 휴무"
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Footer;
