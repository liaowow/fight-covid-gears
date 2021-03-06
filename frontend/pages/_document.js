import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => ({ Component, pageProps, apollo }) =>
      sheet.collectStyles(
        <App Component={Component} pageProps={pageProps} apollo={apollo} />
      )
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
