import React from "react";
import Background from "../components/background";
import styled from "styled-components";
import logo from "../assets/logo.png";
import PlayButton from "../components/play-button";


const CursorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  cursor: url('/assets/smiley-crying-cursor.png'), auto;
`;

const Logo = styled.img`
  position: fixed;
  top: 30px;
  left: 30px;
  width: 280px; 
  height: auto;
  z-index: 2;
`;


export default function Accueil() {
  return (
    <CursorWrapper>
      <Background />
      <Logo src={logo} alt="Logo" />
      <PlayButton />
    </CursorWrapper>
  );
}
