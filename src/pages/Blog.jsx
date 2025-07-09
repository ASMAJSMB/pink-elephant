import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Popup from '../components/popup';
import Footer from '../components/Footer';
import affiche from "../assets/AFFICHE.png";
import logo from '../assets/logonoir.png';
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
  padding: 500px 60px 60px;
  scroll-snap-type: x mandatory;
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
    <YoutubeFrame
      src="https://www.youtube.com/embed/Xck-BHc-g-s"
      title="Créer un clip avec l'IA"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <ClipText>Créer un clip vidéo avec l'IA — de la musique aux images</ClipText>
  </ClipCard>

  <ClipCard>
    <YoutubeFrame
      src="https://www.youtube.com/embed/_eUYB7M4EDE"
      title="Charlotte Cardin - Feel Good"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <ClipText>Charlotte Cardin - Feel Good [Clip officiel]</ClipText>
  </ClipCard>

  <ClipCard>
    <YoutubeFrame
      src="https://www.youtube.com/embed/Xjws8nS606Q"
      title="Dr. Yaro - Minimum ça"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <ClipText>Dr. Yaro - Minimum ça (Clip Officiel)</ClipText>
  </ClipCard>

  <ClipCard>
    <YoutubeFrame
      src="https://www.youtube.com/embed/01bWOVQgpQI"
      title="Stéphane - Ma chérie"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <ClipText>Stéphane - Ma chérie (Clip officiel)</ClipText>
  </ClipCard>

  <ClipCard>
    <YoutubeFrame
      src="https://www.youtube.com/embed/1943hnaZoYg"
      title="L2B - Pélican"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <ClipText>L2B - Pélican (Clip Officiel)</ClipText>
  </ClipCard>
</CarouselContainer>


      <Footer />
    </BlogPageContainer>
  );
}
