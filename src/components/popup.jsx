import styled from "styled-components";
import Draggable from "react-draggable";

const PopupWrapper = styled.div`
  background-color: white;
  border: 2px solid hotpink;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.3);
  position: relative;
  z-index: 1000;
  width: fit-content;
  padding: 0;
`;


const PopupHeader = styled.div`
  width: 100%;
  height: 30px;
  background-color: #add8e6;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-family: 'Courier New', monospace;
  cursor: move;
  box-sizing: border-box;
  border-bottom: 2px solid white;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
`;

const PopupBody = styled.div`
 padding: 0px; /* haut plus serré */
  text-align: center;
`;

const PopupImage = styled.img`
  width: 80%;
  max-height: 180px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export default function Popup({ children, onClose, defaultPosition, imageSrc, label }) {
  return (
    <Draggable handle=".handle" defaultPosition={defaultPosition}>
      <div style={{ position: "absolute" }}>
        <PopupWrapper>
          <PopupHeader className="handle">
            {label || "Pink Elephant"}
            <CloseButton onClick={onClose}>×</CloseButton>
          </PopupHeader>
          <PopupBody>
            {imageSrc && <PopupImage src={imageSrc} alt="Popup" />}
            {children}
          </PopupBody>
        </PopupWrapper>
      </div>
    </Draggable>
  );
}
