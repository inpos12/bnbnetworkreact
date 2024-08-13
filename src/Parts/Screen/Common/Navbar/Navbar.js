import React, { useState, useEffect } from "react";

import "./Css/Navbar.css";
import $ from "jquery";
import { BREAKPOINTS_TABLET } from "../mediaQuery";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Text,
  Img,
  Img1,
  Ul,
  Li,
  DropdownUl,
  DropdownLi,
  DropdownLinkBox,
  Mobile_Menu_Ul,
  Mobile_Menu_Li,
  Mobile_SubMenu_Ul,
  Mobile_SubMenu_Li,
  Hr,
} from "./Navbar.jsx";
import "./Navbar_.js";
import Logo from "../Navbar/Img/Logo.png";

$(document).ready(function () {});

// 스크린너비가 1023이하일때 모바일네비게이션 등당
// 스크린너비가 1023 이하일때 Top로고 안보임

function Menu(props) {
  return (
    <>
      <Text style={{ padding: "20px 10px" }}>{props.name}</Text>
    </>
  );
}

function Navbar() {
  // handleScroll : PC네비게이션바 스크롤감지 고정
  // handleResize : 반응형 메뉴바
  // MobileButton : 모바일 햄버거메뉴바
  // DropDown : 모바일 Dropdown메뉴 표시,숨김
  useEffect(() => {
    const navbar = $(".ul");
    const logo = $(".Logo");
    const topLogo = $(".toplogo");
    const MobileNav = $("#Mobilenav");
    let navbarOffset = navbar.height();

    function handleScroll() {
      // 스크롤이벤트 생성
      if ($(window).scrollTop() >= navbarOffset) {
        navbar.addClass("fixed");
        navbar.css({ position: "fixed" });
        logo.css({ display: "block" });
        topLogo.css({ display: "none" });
      } else {
        navbar.removeClass("fixed");
        navbar.css({ position: "relative" });
        logo.css({ display: "none" });
        topLogo.css({ display: "block" });
      }
    }

    function handleResize() {
      //화면이 리사이즈될때
      if ($(window).width() >= BREAKPOINTS_TABLET) {
        //1023px보다 현너비가 클때
        MobileNav.css({ display: "none" }); //모바일 메뉴 안보이게 설정
        $(window).on("scroll", handleScroll); // 스크롤이벤트 추가
        handleScroll(); // 초기 로드 시 상태 설정
      } else {
        //1023px보다 현너비가 작을때
        $(window).off("scroll", handleScroll); // 기존 스크롤이벤트 제거
        navbar.addClass("fixed"); //네비게이션바 고정
        logo.css({ display: "block" }); // 로고 보이게 설정
        topLogo.css({ display: "none" }); // 최상단 로고 안보이게 설정
        MobileNav.css({ display: "block" }); // 모바일 메뉴 보이게 설정
      }
    }
    $(window).resize(handleResize); // 브라우저 창 크기가 변경될 때마다 handleResize 함수를 호출하도록 설정합니다.
    handleResize(); // 페이지 로드 시 초기 상태 설정

    // 햄버거버튼클릭시
    function MobileButton() {
      let Count = 1;
      $(".Mobile_Button").on("click", function () {
        if (Count == 1) {
          $("#menu").css({ transform: "translateX(0)" });

          Count = 2;
        } else if (Count == 2) {
          $("#menu").css({ transform: "translateX(-100%)" });

          Count = 1;
        }
      });
    }
    MobileButton();
    //
    // 드롭다운여는버튼
    function DropDown() {
      function MobileDropDownButton_1() {
        let Count = 1;
        $(".Mobile_Button_1").on("click", function () {
          if (Count == 1) {
            $(".Mobile_SubMenu_1").css({ display: "block" });
            $(".Mobile_Menu_Li_1").addClass("active");

            Count = 2;
          } else if (Count == 2) {
            $(".Mobile_SubMenu_1").css({ display: "none" });
            $(".Mobile_Menu_Li_1").removeClass("active");
            Count = 1;
          }
        });
      }
      MobileDropDownButton_1();

      function MobileDropDownButton_2() {
        let Count = 1;
        $(".Mobile_Button_2").on("click", function () {
          if (Count == 1) {
            $(".Mobile_SubMenu_2").css({ display: "block" });
            $(".Mobile_Menu_Li_2").addClass("active");
            Count = 2;
          } else if (Count == 2) {
            $(".Mobile_SubMenu_2").css({ display: "none" });
            $(".Mobile_Menu_Li_2").removeClass("active");
            Count = 1;
          }
        });
      }
      MobileDropDownButton_2();
      function MobileDropDownButton_3() {
        let Count = 1;
        $(".Mobile_Button_3").on("click", function () {
          if (Count == 1) {
            $(".Mobile_SubMenu_3").css({ display: "block" });
            $(".Mobile_Menu_Li_3").addClass("active");
            Count = 2;
          } else if (Count == 2) {
            $(".Mobile_SubMenu_3").css({ display: "none" });
            $(".Mobile_Menu_Li_3").removeClass("active");
            Count = 1;
          }
        });
      }
      MobileDropDownButton_3();

      function MobileDropDownButton_4() {
        let Count = 1;
        $(".Mobile_Button_4").on("click", function () {
          if (Count == 1) {
            $(".Mobile_SubMenu_4").css({ display: "block" });
            $(".Mobile_Menu_Li_4").addClass("active");
            Count = 2;
          } else if (Count == 2) {
            $(".Mobile_SubMenu_4").css({ display: "none" });
            $(".Mobile_Menu_Li_4").removeClass("active");
            Count = 1;
          }
        });
      }
      MobileDropDownButton_4();
      function MobileDropDownButton_5() {
        let Count = 1;
        $(".Mobile_Button_5").on("click", function () {
          if (Count == 1) {
            $(".Mobile_SubMenu_5").css({ display: "block" });
            $(".Mobile_Menu_Li_5").addClass("active");
            Count = 2;
          } else if (Count == 2) {
            $(".Mobile_SubMenu_5").css({ display: "none" });
            $(".Mobile_Menu_Li_5").removeClass("active");
            Count = 1;
          }
        });
      }
      MobileDropDownButton_5();
    }
    DropDown();

    //
  });
  return (
    <div id="Navbar">
      <Container className="container">
        <Row className="row">
          <Col className="toplogo">
            <Link to="/">
              <Img src={Logo} />
            </Link>
          </Col>
        </Row>
        <Row fluid="true">
          <Ul className="ul">
            <Li>
              <div role="navigation" id="Mobilenav">
                <nav id="menuToggle">
                  <input type="checkbox" className="Mobile_Button" />
                  <span></span>
                  <span></span>
                  <span></span>
                  <ul id="menu">
                    <Row className="Mobile_Menu_Row">
                      <Mobile_Menu_Ul>
                        <div className="Mobile_Button_1">
                          <Mobile_Menu_Li className="Mobile_Menu_Li_1">
                            회사소개
                          </Mobile_Menu_Li>
                          <Hr />
                        </div>
                        <Mobile_SubMenu_Ul className="Mobile_SubMenu_1">
                          <Link to="/SubPage1-1">
                            <Mobile_SubMenu_Li>인사말</Mobile_SubMenu_Li>
                          </Link>
                          <Link to="/SubPage1-2">
                            <Mobile_SubMenu_Li>조직도</Mobile_SubMenu_Li>
                          </Link>
                        </Mobile_SubMenu_Ul>
                        <div className="Mobile_Button_2">
                          <Mobile_Menu_Li className="Mobile_Menu_Li_2">
                            사업영역
                          </Mobile_Menu_Li>
                          <Hr />
                        </div>
                        <Mobile_SubMenu_Ul className="Mobile_SubMenu_2">
                          <Link to="/SubPage2-1">
                            <Mobile_SubMenu_Li>BEMS</Mobile_SubMenu_Li>
                          </Link>
                          <Link to="/SubPage2-2">
                            <Mobile_SubMenu_Li>SI</Mobile_SubMenu_Li>
                          </Link>
                          <Link to="/SubPage2-3">
                            <Mobile_SubMenu_Li>FMS</Mobile_SubMenu_Li>
                          </Link>
                          <Link to="/SubPage2-4">
                            <Mobile_SubMenu_Li>BAS</Mobile_SubMenu_Li>
                          </Link>
                          <Link to="/SubPage2-5">
                            <Mobile_SubMenu_Li>ZEB</Mobile_SubMenu_Li>
                          </Link>
                        </Mobile_SubMenu_Ul>
                        <div className="Mobile_Button_3">
                          <Mobile_Menu_Li className="Mobile_Menu_Li_3">
                            인증 및 상장
                          </Mobile_Menu_Li>
                          <Hr />
                        </div>
                        <Mobile_SubMenu_Ul className="Mobile_SubMenu_3">
                          <Link to="/SubPage3-1">
                            <Mobile_SubMenu_Li>인증 및 상장</Mobile_SubMenu_Li>
                          </Link>
                        </Mobile_SubMenu_Ul>
                        <div className="Mobile_Button_4">
                          <Mobile_Menu_Li className="Mobile_Menu_Li_4">
                            납품실적
                          </Mobile_Menu_Li>
                          <Hr />
                        </div>
                        <Mobile_SubMenu_Ul className="Mobile_SubMenu_4">
                          <Link to="/SubPage4-1">
                            <Mobile_SubMenu_Li>납품실적</Mobile_SubMenu_Li>
                          </Link>
                        </Mobile_SubMenu_Ul>
                        <div className="Mobile_Button_5">
                          <Mobile_Menu_Li className="Mobile_Menu_Li_5">
                            오시는길
                          </Mobile_Menu_Li>
                          <Hr />
                        </div>
                        <Mobile_SubMenu_Ul className="Mobile_SubMenu_5">
                          <Link to="/SubPage5-1">
                            <Mobile_SubMenu_Li>오시는길</Mobile_SubMenu_Li>
                          </Link>
                        </Mobile_SubMenu_Ul>
                      </Mobile_Menu_Ul>
                    </Row>
                  </ul>
                </nav>
              </div>
            </Li>
            <Li className="Lilist">
              <Link to="/">
                <Img1 className="Logo" src={Logo} />
              </Link>
            </Li>
            <Li className="Lilist link1 Nav_Menu" $none>
              <Link to="/SubPage1-1">
                <Menu name="회사소개" />
              </Link>
              <DropdownUl className="dropdown_menu_1">
                <DropdownLinkBox>
                  <Link to="/SubPage1-1">
                    <DropdownLi>인사말</DropdownLi>
                  </Link>
                  <Link to="/SubPage1-2">
                    <DropdownLi>조직도</DropdownLi>
                  </Link>
                </DropdownLinkBox>
              </DropdownUl>
            </Li>
            <Li className="Lilist link2 Nav_Menu" $none>
              <Link to="/SubPage2-1">
                <Menu name="사업영역" />
              </Link>
              <DropdownUl className="dropdown_menu_2">
                <DropdownLinkBox>
                  <Link to="/SubPage2-1">
                    <DropdownLi>BEMS</DropdownLi>
                  </Link>
                  <Link to="/SubPage2-2">
                    <DropdownLi>SI</DropdownLi>
                  </Link>
                  <Link to="/SubPage2-3">
                    <DropdownLi>FMS</DropdownLi>
                  </Link>
                  <Link to="/SubPage2-4">
                    <DropdownLi>BAS</DropdownLi>
                  </Link>
                  <Link to="/SubPage2-5">
                    <DropdownLi>ZEB</DropdownLi>
                  </Link>
                </DropdownLinkBox>
              </DropdownUl>
            </Li>
            <Li className="Lilist Nav_Menu" $none>
              <Link to="/SubPage3-1">
                <Menu name="인증및상장" />
              </Link>
            </Li>
            <Li className="Lilist Nav_Menu" $none>
              <Link to="/SubPage4-1">
                <Menu name="납품실적" />
              </Link>
            </Li>
            <Li className="Lilist Nav_Menu" $none>
              <Link to="/SubPage5-1">
                <Menu className="" name="오시는길" />
              </Link>
            </Li>
          </Ul>
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;
