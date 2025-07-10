// src/pages/Accueil.jsx
import React, { useState } from 'react';
import Background from '../components/background';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import PlayButton from '../components/play-button';
import Popup from '../components/popup';
import pochette1 from '../assets/pochette1.png';
import pochette2 from '../assets/pochette2.png';
import pochette3 from '../assets/pochette3.png';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { FaInstagram, FaSpotify, FaXTwitter, FaYoutube } from 'react-icons/fa6';

// Conteneur principal, avec overflow visible en mobile pour les popups
const CursorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  cursor: url('/assets/smiley-crying-cursor.png'), auto;

  @media (max-width: 768px) {
    overflow: visible;
    height: auto;
  }
`;

// Logo centré en mobile
const Logo = styled.img`
  position: fixed;
  top: 30px;
  left: 30px;
  width: 280px;
  height: auto;
  z-index: 2;

  @media (max-width: 768px) {
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
  }
`;

// Wrapper pour les icônes sociales
const SocialBar = styled.div`
  position: fixed;
  bottom: 80px;
  left: 40px;
  display: flex;
  gap: 20px;
  z-index: 999;

  @media (max-width: 768px) {
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    gap: 12px;
  }
`;

const SocialIcon = styled.a`
  font-size: 35px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }

  &.insta { color: #E1306C; }
  &.spotify { color: #1DB954; }
  &.twitter { color: #000; }
  &.youtube { color: #FF0000; }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

// Copyright en mobile centré
const CopyrightBar = styled.div`
  position: fixed;
  bottom: 40px;
  left: 40px;
  background-color: black;
  color: white;
  font-size: 10px;
  font-family: 'Courier New', monospace;
  padding: 6px 12px;
  border-radius: 4px;

  @media (max-width: 768px) {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

// Footer fixe
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

// Link vers la home
const LogoLink = styled(Link)`
  cursor: url('/assets/Curseur.png'), auto;
`;

export default function Accueil() {
  const [popups, setPopups] = useState([
    { id: 1, x: 320, y: 110, image: pochette1, label: '💗 10 octobre 2025' },
    { id: 2, x: 650, y: 260, image: pochette2, label: '💗 Tournée 2025' },
    { id: 3, x: 1000, y: 250, image: pochette3, label: '💗 Pink Elephant' },
    {
      id: 4,
      x: 320,
      y: 450,
      image: null,
      label: 'Prêt à mettre le feu',
      text: (
        <p>
          Retrouvez-nous à l’Accor Arena en tournée<br />
          pour la sortie de Pink Elephant
        </p>
      )
    }
  ]);

  const closePopup = id => setPopups(prev => prev.filter(p => p.id !== id));

  return (
    <CursorWrapper>
      <Background />
      <Sidebar />

      <LogoLink to="/">
        <Logo src={logo} alt="Logo Arcad Fire" />
      </LogoLink>

      <PlayButton />

      {popups.map(p => (
        <Popup
          key={p.id}
          onClose={() => closePopup(p.id)}
          defaultPosition={{ x: p.x, y: p.y }}
          imageSrc={p.image}
          label={p.label}
        >
          {p.text}
        </Popup>
      ))}

      <SocialBar>
        <SocialIcon className="insta" href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></SocialIcon>
        <SocialIcon className="youtube" href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></SocialIcon>
        <SocialIcon className="spotify" href="https://spotify.com" target="_blank" rel="noreferrer"><FaSpotify /></SocialIcon>
        <SocialIcon className="twitter" href="https://twitter.com" target="_blank" rel="noreferrer"><FaXTwitter /></SocialIcon>
      </SocialBar>

      <CopyrightBar>
        All rights reserved 2025 @ Arcade Fire
      </CopyrightBar>

      <FooterBar>Powered by Arcade Fire</FooterBar>
    </CursorWrapper>
  );
}

