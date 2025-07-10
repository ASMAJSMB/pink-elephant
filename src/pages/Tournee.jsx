import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { useDates } from '../features/dates/useDates';
import bgImg from '../assets/fondtournee.png';
import Footer from '../components/Footer'; // import du footer existant

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: url(${bgImg}) center/cover no-repeat;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
  }
`;

const Main = styled.main`
  position: relative;
  z-index: 1;
  margin-left: 150px;
  padding: 100px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  margin-bottom: 24px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  background: #000;
  display: inline-block;
  padding: 8px 16px;
  text-transform: uppercase;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 960px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 240px;
`;

const DateText = styled.div`
  font-weight: bold;
  color: #333;
`;

const InfoText = styled.div`
  color: #555;
`;

const StatusBadge = styled.span`
  align-self: flex-start;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #fff;
  background: ${({ statut }) =>
    statut === 'sold-out' ? '#d32f2f'
  : statut === 'annulé'   ? '#757575'
  :                          '#388e3c'};
`;

export default function Tournee() {
  const { dates, loading } = useDates();

  if (loading) {
    return (
      <Container>
        <Sidebar />
        <Main>
          <Header><Title>TOURNÉE</Title></Header>
          <p style={{ color: '#fff' }}>Chargement…</p>
        </Main>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Sidebar />
      <Main>
        <Header><Title>TOURNÉE</Title></Header>
        <Grid>
          {dates.map((d) => {
            const dt = new Date(d.date.seconds * 1000);
            const day   = String(dt.getDate()).padStart(2, '0');
            const month = String(dt.getMonth()+1).padStart(2, '0');
            const year  = dt.getFullYear();
            const dateStr = `${day}/${month}/${year}`;

            return (
              <Card key={d.id}>
                <DateText>{dateStr}</DateText>
                <InfoText><strong>Lieu :</strong> {d.lieu}</InfoText>
                <InfoText><strong>Ville :</strong> {d.ville}</InfoText>
                <StatusBadge statut={d.statut}>
                  {d.statut === 'sold-out' ? 'Sold Out'
                   : d.statut === 'annulé'   ? 'Annulé'
                   :                            'À venir'}
                </StatusBadge>
              </Card>
            );
          })}
        </Grid>
        <Footer />
      </Main>
    </Container>
  );
}
