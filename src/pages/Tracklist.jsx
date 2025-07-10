// src/pages/Tracklist.jsx
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import coverImg from '../assets/AFFICHE.png'; 
import bgPattern from '../assets/fondvert.png';      // même fond turquoise

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: url(${bgPattern}) center/cover no-repeat;
  overflow: hidden;
`;

const Main = styled.main`
  position: relative;
  z-index: 1;
  margin-left: 80px;         /* laisse place au Sidebar */
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
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  gap: 48px;
  margin-bottom: 48px;
`;

// Visuel gauche
const CoverWrapper = styled.div`
  flex-shrink: 0;
  width: 360px;
  height: 360px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Texte droit
const TextColumn = styled.div`
  flex: 1;
  color: #fff;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Paragraphs = styled.div`
  margin-bottom: 24px;

  p {
    margin-bottom: 16px;
  }
`;

const ActionButton = styled.button`
  align-self: flex-start;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background: rgba(255,255,255,0.1);
  }
`;

const TracklistFooter = styled.div`
  width: 100%;
  max-width: 1000px;
  color: #fff;
  font-family: monospace;
  font-size: 0.85rem;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const TrackGroup = styled.div`
  flex: 1;
  min-width: 240px;

  h3 {
    margin-bottom: 8px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  ol {
    margin: 0;
    padding-left: 1.2em;
  }

  li {
    margin-bottom: 4px;
  }
`;

export default function Tracklist() {
  return (
    <Container>
      <Sidebar />

      <Main>
        <Header>
          <Title>Pink Elephant</Title>
          <ModeButton>TRACKLIST</ModeButton>
        </Header>

        <Content>
          <CoverWrapper>
            <CoverImage src={coverImg} alt="Pink Elephant Cover" />
          </CoverWrapper>

          <TextColumn>
            <Paragraphs>
              <p>
                De son charme punk mystique et mystérieux, l’album Pink Elephant vous offre une expérience psychédél ique axée sur l’introspection et la beauté intérieure.
              </p>
              <p>
                L’album explore plusieurs sujets tels que la dissociation, la mélancolie ou encore la dépression avec une complexité lyrique notable.
              </p>
              <p>
                Une tournée musicale à ne surtout pas louper.
              </p>
            </Paragraphs>
            <ActionButton>Ouvrir son cœur</ActionButton>
          </TextColumn>
        </Content>

        <TracklistFooter>
          <TrackGroup>
            <h3>Pink Elephant ― Tracklist</h3>
            <ol>
              <li>Open Your Heart or Die Trying</li>
              <li>Pink Elephant</li>
              <li>Year of the Snake</li>
              <li>Circle of Trust</li>
              <li>Alien Nation</li>
            </ol>
          </TrackGroup>
          <TrackGroup>
            <h3>&nbsp;</h3>
            <ol start={6}>
              <li>Beyond Salvation</li>
              <li>Ride or Die</li>
              <li>I Love Her Shadow</li>
              <li>She Cries Diamond Rain</li>
              <li>Stuck in My Head</li>
            </ol>
          </TrackGroup>
        </TracklistFooter>
      </Main>
    </Container>
  );
}
