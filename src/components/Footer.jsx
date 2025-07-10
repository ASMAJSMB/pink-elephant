// src/components/Footer.jsx
import { FaInstagram, FaSpotify, FaXTwitter } from "react-icons/fa6";
import styled from "styled-components";

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 4px 0;
  z-index: 999;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 6px 0;
  }
`;

const Icon = styled.a`
  display: flex;
  color: white;
  font-size: 26px;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: hotpink;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Icon href="https://instagram.com" target="_blank" aria-label="Instagram">
        <FaInstagram />
      </Icon>
      <Icon href="https://spotify.com" target="_blank" aria-label="Spotify">
        <FaSpotify />
      </Icon>
      <Icon href="https://twitter.com" target="_blank" aria-label="Twitter">
        <FaXTwitter />
      </Icon>
    </FooterWrapper>
  );
}
