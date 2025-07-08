import React from "react";
import Background from "../components/background";
import styled from "styled-components";
import logo from "../assets/logo.png";
import PlayButton from "../components/play-button";
import Popup from "../components/popup";
import pochette1 from "../assets/pochette1.png";
import pochette2 from "../assets/pochette2.png";
import pochette3 from "../assets/pochette3.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaSpotify, FaXTwitter, FaYoutube } from "react-icons/fa6";





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
const SocialBar = styled.div`
  position: fixed;
  bottom: 60px; /* 🔼 espace pour la bande noire en dessous */
  left: 40px;
  display: flex;
  gap: 20px;
  z-index: 999;
`;

export default function Accueil() {
  
  const [popups, setPopups] = useState([
  {
    id: 1,
   
    x: 320,
    y: 110,
    image: pochette1,
    label: "💗 10 octobre 2025"
  },
  {
    id: 2,
   
    x: 650,
    y: 260,
    image: pochette2,
    label: "  💗Tournée 2025"
  },
  {
    id: 3,
    
    x: 1000,
    y: 250,
    image: pochette3,
    label: "  💗Pink Elephant"
  },
  {
    id: 4,
    text: <p>
  Retrouvez-nous à l’accor aréna en tournée<br />
  pour la sortie de Pink Elephant
</p>,
    x: 320,
    y: 450,
    
    image: null,
    label: "Pret a mettre le feu" // celui sans image

  }
]);

const closePopup = (id) => {
  setPopups(prev => prev.filter(p => p.id !== id));
};

const CopyrightBar = styled.div`
  position: fixed;
  bottom: 30px; /* juste en dessous des icônes */
  left: 40px;
  background-color: black;
  color: white;
  font-size: 10px;
  font-family: 'Courier New', monospace;
  padding: 6px 12px;
  border-radius: 4px;
  width: fit-content;
`;


const SocialIcon = styled.a`
  font-size: 35px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }

  &.insta {
    color: #E1306C; /* Instagram rose-violet */
  }

  &.spotify {
    color: #1DB954; /* Spotify vert */
  }

  &.twitter {
    color: #000000; /* X en noir */
  }
   &.youtube {
    color: #FF0000; /* YouTube rouge */
  }
`;
const FooterBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 14px;
  font-family: 'Courier New', monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
`;

  return (
    <CursorWrapper>
      <Background />
      <Link to="/">
  <Logo src={logo} alt="Logo" />
</Link>

      <PlayButton />

     {popups.map(p => (
  <Popup
    key={p.id}
    onClose={() => closePopup(p.id)}
    defaultPosition={{ x: p.x, y: p.y }}
    imageSrc={p.image}
    label={p.label}
  >
    <p>{p.text}</p>
  </Popup>
))}

<SocialBar>
  <SocialIcon className="insta" href="https://instagram.com" target="_blank" rel="noreferrer">
    <FaInstagram />
  </SocialIcon>
  <SocialIcon className="youtube" href="https://youtube.com" target="_blank" rel="noreferrer">
    <FaYoutube />
  </SocialIcon>
  <SocialIcon className="spotify" href="https://spotify.com" target="_blank" rel="noreferrer">
    <FaSpotify />
  </SocialIcon>
  <SocialIcon className="twitter" href="https://twitter.com" target="_blank" rel="noreferrer">
    <FaXTwitter />
    </SocialIcon>
    
</SocialBar>

<CopyrightBar>
  All rights reserved 2025@Arcade Fire
</CopyrightBar>

   </CursorWrapper>
  );
}
