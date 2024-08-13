import "../Loading/Css/Loading.css";
import Img from "../Loading/Img/Loading-2.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Text = styled.h1`
  color: white;
  font-weight: 800;
  text-align: center;
`;

function Loading() {
  return (
    <div className="Loading">
      <div className="Load">
        <Text>페이지로딩중...</Text>
        <img src={Img}></img>
      </div>
    </div>
  );
}

export default Loading;
