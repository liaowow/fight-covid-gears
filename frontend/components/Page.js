import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Viga';
    font-style: normal;
    font-weight: 400;
    src: url('/static/viga-v9-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/static/viga-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/viga-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/viga-v9-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/static/viga-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/viga-v9-latin-regular.svg#Viga') format('svg'); /* Legacy iOS */
  }

  :root {
    --primary: #f5df4d;
    --black: #393939;
    --grey: #606569;
    --gray: var(--grey);
    --lightGrey: #939597;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --boxShadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Viga', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    color: var(--gray);
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }

  img:hover {
    cursor: pointer;
  }

  button {
    font-family: 'Viga', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  @media only screen and (max-width: 600px) {
    html {
      width: fit-content;
    }
  }
`;

const InnerStyle = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyle>{children}</InnerStyle>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
