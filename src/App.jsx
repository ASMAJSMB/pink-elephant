import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: black;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 220px;
  background: linear-gradient(to bottom, #111, #333);
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 10px 0;
  cursor: pointer;
`;

const Socials = styled.div`
  margin-top: 30px;

  img {
    width: 24px;
    margin: 5px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Main = styled.main`
  flex: 1;
  position: relative;
  overflow: hidden;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
  position: absolute;
  z-index: 0;
`;

const PlayButton = styled.img`
  position: absolute;
  right: 40px;
  bottom: 40px;
  width: 80px;
  cursor: pointer;
  z-index: 20;

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    width: 60px;
  }
`;

const PopupContainer = styled.div`
  position: absolute;
  width: 240px;
  background: white;
  color: black;
  border: 2px solid pink;
  border-radius: 8px;
  z-index: 10;
  box-shadow: 0 0 10px #ff00ff;
`;

const PopupHeader = styled.div`
  background: #f2f2f2;
  padding: 8px;
  cursor: move;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const PopupContent = styled.div`
  padding: 10px;

  img {
    width: 100%;
    border-radius: 6px;
  }
`;

function Popup({ id, title, content, img, onClose }) {
  const [pos, setPos] = useState({ x: 100 + id * 60, y: 100 + id * 40 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <PopupContainer
      style={{ top: pos.y, left: pos.x }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <PopupHeader onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <span>{title}</span>
        <button onClick={() => onClose(id)}>X</button>
      </PopupHeader>
      <PopupContent>
        <img src={img} alt={title} />
        <p>{content}</p>
      </PopupContent>
    </PopupContainer>
  );
}

export default function App() {
  const [popups, setPopups] = useState([0, 1, 2]);

  const closePopup = (id) => setPopups(popups.filter((p) => p !== id));

  const openVideo = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <AppContainer>
      <Sidebar>
        <Logo src="/assets/logo.png" onClick={() => window.location.href = '/'} />
        <NavList>
          <NavItem>Pochette</NavItem>
          <NavItem>Photos</NavItem>
          <NavItem>Tracklist</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>Tournées</NavItem>
          <NavItem>Arcade Fire</NavItem>
          <NavItem>Contact</NavItem>
        </NavList>
        <Socials>
          <img src="/assets/youtube.png" alt="YouTube" />
          <img src="/assets/instagram.png" alt="Instagram" />
        </Socials>
      </Sidebar>

      <Main>
        <Background src="/assets/background.jpg" alt="Background" />

        {popups.map((id) => (
          <Popup
            key={id}
            id={id}
            title={`Popup ${id + 1}`}
            img={`/assets/popup${id + 1}.jpg`}
            content={`Contenu ${id + 1}`}
            onClose={closePopup}
          />
        ))}

        <PlayButton src="/assets/play-button.gif" onClick={openVideo} />
      </Main>
    </AppContainer>
  );
}
