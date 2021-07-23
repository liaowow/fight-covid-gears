import styled from 'styled-components';

const LogoStyles = styled.h1`
  font-size: 4rem;
  text-align: center;
  text-shadow: 1px 1px 0 var(--offWhite);
  z-index: 2;
  a {
    cursor: pointer;
    color: var(--black, black);
    text-decoration: none;
    padding: 0.5rem 1rem;
    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
    }
  }
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 2rem;
`;

export default LogoStyles;
