import styled from 'styled-components';

const CloseButtonStyles = styled.button`
  background: var(--black, black);
  color: white;
  width: 40px;
  height: 40px;
  font-size: 2.5rem;
  border: 0;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  right: 2rem;
  top: 2rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 0.3s;
  }
`;

export default CloseButtonStyles;
