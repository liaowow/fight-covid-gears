import styled from 'styled-components';

const HeaderStyles = styled.header`
  position: sticky;
  top: 0px;
  z-index: 10;
  background: white;
  .bar {
    border-bottom: 10px solid var(--primary, black);
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
  h3 {
    color: var(--grey, black);
    background: var(--primary, white);
    text-align: center;
    margin-top: -35px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
    transform: skew(-5deg) rotate(-1deg);
    -webkit-transform: skew(-5deg) rotate(-1deg);
    -ms-transform: skew(-5deg) rotate(-1deg);
  }
`;

export default HeaderStyles;
