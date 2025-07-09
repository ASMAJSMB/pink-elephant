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
          <li><StyledLink href="#">INSTAGRAM | TWITTER | FACEBOOK</StyledLink></li>
          <li><StyledLink href="#">SPOTIFY</StyledLink></li>
          <li><StyledLink href="#">DEEZER</StyledLink></li>
          <li><StyledLink href="#">APPLE MUSIQUE</StyledLink></li>
          <li><StyledLink href="#">AMAZON MUSIQUE</StyledLink></li>
          <li><StyledLink href="#">YOUTUBE MUSIQUE</StyledLink></li>
        </LinkList>

        <RestartButton to="/">RECOMMENCER</RestartButton>
      </Remarks>

      <Footer />
    </ContactPageContainer>
  );
}
