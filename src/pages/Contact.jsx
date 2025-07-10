import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import backgroundContact from '../assets/fondbleu.png'; 
import Footer from '../components/Footer';

const ContactPageContainer = styled.div`
  background-image: url(${backgroundContact});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  position: relative;
  padding: 40px;
  color: black;
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 350px;
  width: 500px;
  height: auto;
  z-index: 10;
`;

const Banner = styled.div`
  position: absolute;
  top: 50px;
  right: 40px;
  background-color: rgba(0,0,0,1);
  color: white;
  padding: 10px 20px;
  font-size: 1.2em;
  z-index: 10;
`;

const Remarks = styled.div`
  margin-top: 160px;
  font-size: 16px;
  font-family: 'Courier New', monospace;
  line-height: 1.6;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const RestartButton = styled(Link)`
  display: inline-block;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 6px;

  &:hover {
    background-color: hotpink;
  }
`;

export default function ContactPage() {
  return (
    <ContactPageContainer>
      <Link to="/">
        <StyledLogo src={logo} alt="Logo" />
      </Link>

      <Banner>CONTACT</Banner>

      <Remarks>
        <p>Une erreur critique est survenue. Pour continuer, veuillez suivre les indications ci-dessous :</p>

        <LinkList>
          <li><StyledLink href="#">ARCADE FIRE</StyledLink></li>
          <li><StyledLink href="#">PINK ELEPHANT</StyledLink></li>
          <li><StyledLink href="https://www.instagram.com/p/DItuwEKR9gM/">INSTAGRAM | TWITTER | FACEBOOK</StyledLink></li>
          <li><StyledLink href="https://open.spotify.com/intl-fr/album/5qLTlCTZvN24Fm1nqd7XCV?si=qtHL-U7pSiKvnAPd5pQHWw&go=1&nd=1&dlsi=ab4dca1c7682427e">SPOTIFY</StyledLink></li>
          <li><StyledLink href="https://www.deezer.com/fr/album/752544901?host=0&utm_campaign=clipboard-generic&utm_source=user_sharing&utm_content=album-752544901&deferredFl=1">DEEZER</StyledLink></li>
          <li><StyledLink href="#">APPLE MUSIQUE</StyledLink></li>
          <li><StyledLink href="https://music.amazon.co.uk/albums/B0F18RBPB8?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&tag=linkfiregen&ie=UTF8&linkCode=as2&ascsubtag=a3685dc481f1ecf214e877472315adb3&ref=dmm_acq_soc_fr_u_lfire_lp_x_a3685dc481f1ecf214e877472315adb3&fbclid=PAQ0xDSwLcamBleHRuA2FlbQIxMQABp342FGUqiV68p6LdsMOqUYz1mFvzR4TcOafLbCuvOqZ5FSUb9Dp1Z86XizeN_aem_QN2DGjdbHeNuLamN8csAjg">AMAZON MUSIQUE</StyledLink></li>
          <li><StyledLink href="https://www.youtube.com/watch?v=0LpS5l5dRJ0&list=PLV_bVczPcRZRjDritaUGODWR3cv8_CBuZ&src=Linkfire&lId=e3ab07bb-74eb-4f52-935c-ea5f573a91c1&cId=d3d58fd7-4c47-11e6-9fd0-066c3e7a8751&fbclid=PAQ0xDSwLcamBleHRuA2FlbQIxMQABp342FGUqiV68p6LdsMOqUYz1mFvzR4TcOafLbCuvOqZ5FSUb9Dp1Z86XizeN_aem_QN2DGjdbHeNuLamN8csAjg">YOUTUBE MUSIQUE</StyledLink></li>
        </LinkList>

        <RestartButton to="/">RECOMMENCER</RestartButton>
      </Remarks>

      <Footer />
    </ContactPageContainer>
  );
}
