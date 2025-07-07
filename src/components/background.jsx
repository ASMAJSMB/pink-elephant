import styled from "styled-components";
import backgroundImage from "../assets/background.png";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage}) center/100% 100% no-repeat; /* L'image s'ajuste pour couvrir toute la page */
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; /* L'image est derrière tout le reste */
`;

export default Background;
