import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  /* patua-one-regular - latin */
  @font-face {
    font-family: 'Patua One';
    font-style: normal;
    font-weight: 400;
    src: url('/static/patua-one-v11-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/static/patua-one-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/patua-one-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/patua-one-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/static/patua-one-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/patua-one-v11-latin-regular.svg#PatuaOne') format('svg'); /* Legacy iOS */
  }

  :root {
    --primary: #2c8171;
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
    font-family: 'Patua One', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
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

  button {
    font-family: 'Patua One', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyle = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
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
