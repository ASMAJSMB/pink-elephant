import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Popup from '../components/popup';
import Footer from '../components/Footer';
import affiche from "../assets/AFFICHE.png";
import pochette1 from "../assets/tourneee.png";
import pochette2 from "../assets/photoblog.png";
import pochette3 from "../assets/photobloggg.png";
import pochette4 from "../assets/vinyle1.png";
import pochette5 from "../assets/vinyle2.png";


import logo from '../assets/logonoirr.svg';
import backgroundPhoto from '../assets/fond-blanc.png';




const ClipCard = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 300px;
  background-color: rgba(255,255,255,0.8);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`;

const YoutubeFrame = styled.iframe`
  width: 100%;
  height: 170px;
  border-radius: 8px;
  border: none;
`;

const ClipText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`;

const BlogPageContainer = styled.div`
  background-image: url(${backgroundPhoto});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  overflow-y: auto;
  position: relative;
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

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 40px;
  padding: 500px 90px 100px 100PX;
  scroll-snap-type: x mandatory;
 justify-content: flex-start;
  align-items: flex-start;
`;
const FeaturedClipCard = styled(ClipCard)`
  width: 500px;

  ${YoutubeFrame} {
    height: 280px;
  }

  ${ClipText} {
    font-size: 16px;
    font-weight: bold;
     font-family: 'Playfair Display', serif;
  }
`;


const ClipImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;


export default function BlogPage() {
  return (
    <BlogPageContainer>
      <Link to="/">
        <StyledLogo src={logo} alt="Logo" />
      </Link>
<Sidebar /> 
      <Banner>BLOG</Banner>

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

<Popup
  onClose={() => {}}
  label="💗 Pink Elephant"
  defaultPosition={{ x: 1000, y: 250 }}
  imageSrc={affiche}
>
  <div style={{ width: '100px', height: '20px' }} />
</Popup>

<Popup
  onClose={() => {}}
  label="Prêt à mettre le feu"
  defaultPosition={{ x: 320, y: 450 }}
  imageSrc={null}
>
  <div style={{ width: '300px', padding: '20px', fontSize: '16px', color: 'black' }}>
    Retrouvez-nous à l’Accor Arena en tournée<br />
    pour la sortie de <strong>Pink Elephant</strong>
  </div>
</Popup>

      <CarouselContainer>
  <ClipCard>
    <ClipImage src={pochette2} alt="Affiche concert" />
    <ClipText>Le clip vidéo qui annonce la sortie de l’album Pink elephant.</ClipText>
  </ClipCard>

  <ClipCard>
    <ClipImage src={pochette1} alt="Studio" />
    <ClipText>Préparez-vous pour le
dernière album en date du groupe Arcade Fire.</ClipText>
  </ClipCard>

  <ClipCard>
    <ClipImage src={pochette3} alt="Coulisses" />
    <ClipText>Arcade Fire annonce une tournée octobre 2025 pour la sortie de l’album “Pink Elephant”.</ClipText>
  </ClipCard>

  <ClipCard>
    <ClipImage src={pochette4} alt="Fan Art" />
    <ClipText>Pour la sortie mondiale de l’album “Pink Elephant” découvrez la pochette vinyle de ce dernier.</ClipText>
  </ClipCard>

  <ClipCard>
    <ClipImage src={pochette5}  alt="Teaser" />
    <ClipText>Avec la sortie internationale de l’album “Pink Elephant” sort également un T-Shirt à l’effigie du triste éléphant.</ClipText>
  </ClipCard>
</CarouselContainer>



      <Footer />
    </BlogPageContainer>
  );
}
