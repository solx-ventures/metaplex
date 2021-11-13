import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class MetaplexDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="loadforge-site-verification"
            content="2056680d2883a8b910880d53b9cb2ebf16e7b8f91e169cceddce62c4c4ef8fe6240748c08c2e3769e554e12dafcd5bfc62028638e6524a0efd7d729efd762d42"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="We are helping build out the Solana Gaming Metaverse by providing gamer services at https://gamerplex.com."
          />
          <meta property="og:url" content="https://gamerplex.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gamerplex - Store" />
          <meta
            property="og:description"
            content="We are helping build out the Solana Gaming Metaverse by providing gamer services at https://gamerplex.com."
          />
          <meta
            property="og:image"
            itemProp="image"
            content="https://store.gamerplex.com/og-image.jpeg"
          />
          <meta
            property="og:image:secure_url"
            content="https://store.gamerplex.com/og-image.jpeg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@gamerplex_com" />
          <meta name="twitter:creator" content="@gamerplex_com" />
          <meta name="twitter:url" content="https://gamerplex.com/" />
          <meta name="twitter:title" content="Gamerplex - Store" />
          <meta
            name="twitter:description"
            content="We are helping build out the Solana Gaming Metaverse by providing gamer services at https://gamerplex.com."
          />
          <meta
            name="twitter:image"
            content="https://store.gamerplex.com/og-image.jpeg"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  var s = document.createElement("script");
                  s.src = "https://stackpile.io/stack_162299.js"; s.async = true;
                  var e = document.getElementsByTagName("script")[0]; e.parentNode.insertBefore(s, e);
                })();
          `,
            }}
          />
        </body>
      </Html>
    );
  }
}
