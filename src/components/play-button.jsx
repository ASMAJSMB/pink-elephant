import styled from "styled-components";
import playGif from "../assets/play-button.gif";

const PlayWrapper = styled.img`
  position: fixed;
  top: 80px;        /* plus bas que 30px : descend le GIF */
  right: 30px;
  width: 150px;     /* plus gros qu’avant (100px → 150px) */
  cursor: pointer;
  z-index: 2;
`;


export default function PlayButton() {
  const handleClick = () => {
    window.open("https://www.youtube.com/watch?v=oCBx_m9_axI&list=RDoCBx_m9_axI&start_radio=1", "_blank");
  };

  return <PlayWrapper src={playGif} alt="Play" onClick={handleClick} />;
}
