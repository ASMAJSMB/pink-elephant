import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Popup from '../components/popup';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import logo from '../assets/logo.png';
import backgroundPhoto from '../assets/background-photo.jpg';
import photo1 from '../assets/PHOTO.jpg';
import photo2 from '../assets/PHOTOS.jpg';
import photo3 from '../assets/photo.jpg';

const PhotoPageContainer = styled.div`
  background-image: url(${backgroundPhoto});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  overflow-y: auto;
  position: relative;
`;

const ForceBlackText = styled.div`
  a, * {
    color: black !important;
  }
`
const Banner = styled.div`
  position: absolute;
  top: 50px; /* déplacé un peu plus bas */
  right: 40px;
  background-color: rgba(0,0,0,1); /* noir opaque */
  color: white;
  padding: 10px 20px;
  font-size: 1.2em;
  z-index: 10;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px; /* décalé pour éviter le logo + bande */
  gap: 20px;
`;

const StyledImage = styled.img`
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 350px;
  width: 500px;
  height: auto;
  z-index: 10;
`;

export default function PhotoPage() {
  return (
    <PhotoPageContainer>
      <Link to="/">
        <StyledLogo src={logo} alt="Logo" />
      </Link>
<Sidebar /> 
      <Banner>PHOTOS</Banner>

      <Popup
  onClose={() => {}}
  label="CHECKPOINT"
  defaultPosition={{ x: 50, y: 50 }} // 👈 Plus vers la gauche
  imageSrc={null}
>
  <div style={{ padding: '40px 60px', width: '90px', height: '200px', color: 'black' }}>
    {/* Espace vide ici avec texte noir */}
  </div>
</Popup>



      <Gallery>
        <StyledImage src={photo1} alt="Photo 1" />
        <StyledImage src={photo2} alt="Photo 2" />
        <StyledImage src={photo3} alt="Photo 3" />
      </Gallery>

      <Footer />
    </PhotoPageContainer>
  );
}
