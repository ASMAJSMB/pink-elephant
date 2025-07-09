import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarWrapper = styled.div`
  position: absolute;
  top: 100px; /* 🟣 un peu plus bas que le haut */
  left: 80px; /* 🟣 un peu décalé à gauche */
  width: auto;
  background-color: transparent; /* ✅ plus de fond noir */
  color: white;
  font-family: 'Courier New', monospace;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1000;
`;


const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold; /* ✅ le gras magique */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);

  &:hover {
    color: hotpink;
  }
`;


export default function Sidebar() {
  return (
    <SidebarWrapper>
      <NavItem to="/pochette">Pochette</NavItem>
      <NavItem to="/photos">Photos</NavItem>
      <NavItem to="/tracklist">Tracklist</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/tournee">Tournée</NavItem>
      <NavItem to="/arcadefire">Arcade Fire</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </SidebarWrapper>
  );
}
