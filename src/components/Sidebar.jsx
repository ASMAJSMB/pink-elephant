import React, { useState } from "react";
import styled from "styled-components"; 
import { Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';

const BurgerButton = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  z-index: 1100;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SidebarWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 80px;
  background-color: transparent;
  color: white;
  font-family: 'Courier New', monospace;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
    padding-top: 80px;
    background: rgba(0, 0, 0, 0.8);
    transform: translateX(${props => (props.open ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;
    gap: 16px;
    left: 0;
    top: 0;
  }
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);

  &:hover {
    color: hotpink;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 1rem;
  }
`;

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerButton onClick={() => setOpen(prev => !prev)}>
        {open ? <FiX /> : <FiMenu />}
      </BurgerButton>
      <SidebarWrapper open={open}>
        <NavItem to="/pochette" onClick={() => setOpen(false)}>Pochette</NavItem>
        <NavItem to="/photos" onClick={() => setOpen(false)}>Photos</NavItem>
        <NavItem to="/tracklist" onClick={() => setOpen(false)}>Tracklist</NavItem>
        <NavItem to="/blog" onClick={() => setOpen(false)}>Blog</NavItem>
        <NavItem to="/tournee" onClick={() => setOpen(false)}>Tournée</NavItem>
        <NavItem to="/contact" onClick={() => setOpen(false)}>Contact</NavItem>
      </SidebarWrapper>
    </>
  );
}
