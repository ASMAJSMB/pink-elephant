// src/pages/Pochette.jsx
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

// importe tes visuels ici
import bgPattern from '../assets/fondbleu.png';
import cover1 from '../assets/vinyle1.png';
import cover2 from '../assets/vinyle2.png';
import cover3 from '../assets/vinyle3.png';
import cover4 from '../assets/vinyle4.png';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: url(${bgPattern}) center/cover no-repeat;
`;

const Main = styled.main`
  position: relative;
  z-index: 1;
  margin-left: 80px;   /* décalage pour laisser la place au Sidebar */
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-family: 'Brush Script MT', cursive;
  font-size: 3rem;
  color: #fff;
  margin-right: 16px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const ModeButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 16px;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: default;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
`;

const InfoWindow = styled.div`
  background: #f0f0ff;
  border: 2px solid #c0c0f0;
  border-radius: 4px;
  width: 360px;
  padding: 12px;
  margin-bottom: 32px;
  position: relative;
  font-family: sans-serif;
  color: #333;

  &::before {
    content: 'Le vinyle Pink Elephant';
    position: absolute;
    top: -24px;
    left: 12px;
    background: #c0c0f0;
    padding: 4px 8px;
    font-weight: bold;
    font-size: 0.85rem;
  }
`;

const InfoText = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 48px;
`;

const CoverWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

export default function Pochette() {
  return (
    <Container>
      <Sidebar />

      <Main>
        <Header>
          <Title>Pink Elephant</Title>
          <ModeButton>PO​CHETTE</ModeButton>
        </Header>

        <InfoWindow>
          <InfoText>
            Soutenez la sortie mondiale de l’album Pink Elephant dès sa sortie en streaming.  
            L’album est disponible en vinyle collector.
          </InfoText>
        </InfoWindow>

        <Grid>
          <CoverWrapper><CoverImage src={cover1} alt="Cover 1" /></CoverWrapper>
          <CoverWrapper><CoverImage src={cover2} alt="Cover 2" /></CoverWrapper>
          <CoverWrapper><CoverImage src={cover3} alt="Cover 3" /></CoverWrapper>
          <CoverWrapper><CoverImage src={cover4} alt="Cover 4" /></CoverWrapper>
        </Grid>
      </Main>
    </Container>
  );
}
