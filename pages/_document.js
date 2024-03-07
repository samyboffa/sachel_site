import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-NBa7A1LCYD3gVZb0ejyOySK0oE3KxTfSiSqRWg4jHlWql4Yt1veZ3nDtGRpv0jl3I0rf0MOk8k+zbFLc1rxcLw=="
            crossOrigin="anonymous"
          />
      </Head >
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
