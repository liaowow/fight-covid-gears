import styled from 'styled-components';

const LogoStyles = styled.h1`
  font-size: 4rem;
  margin-left: 1.5rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  background: var(--primary);
  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
`;

export default LogoStyles;
