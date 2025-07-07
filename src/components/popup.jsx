// components/Popup.jsx
import styled from "styled-components";

const PopupWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 2px solid hotpink;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const Close = styled.button`
  position: absolute;
  top: 5px;
  right: 8px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export default function Popup({ onClose }) {
  return (
    <PopupWrapper>
      <Close onClick={onClose}>×</Close>
      <p>Bienvenue sur Pink Elephant 💖</p>
    </PopupWrapper>
  );
}
