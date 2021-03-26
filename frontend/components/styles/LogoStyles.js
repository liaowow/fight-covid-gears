import styled from 'styled-components';

const LogoStyles = styled.h1`
  font-size: 4rem;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
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
  background: url('static/vaccine.svg') center no-repeat;
  background-size: contain;
  padding: 0 2rem;
`;

export default LogoStyles;
