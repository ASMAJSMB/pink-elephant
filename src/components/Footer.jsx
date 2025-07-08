import { FaInstagram, FaSpotify, FaXTwitter } from "react-icons/fa6";
import styled from "styled-components";


const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  z-index: 999;
`;


const Icon = styled.div`
  font-size: 26px;
  color: white;
  cursor: pointer;

  &:hover {
    color: hotpink;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <a href="https://instagram.com" target="_blank">
        <Icon><FaInstagram /></Icon>
      </a>
      <a href="https://spotify.com" target="_blank">
        <Icon><FaSpotify /></Icon>
      </a>
      <a href="https://twitter.com" target="_blank">
        <Icon><FaXTwitter /></Icon>
      </a>
    </FooterWrapper>
  );
}
