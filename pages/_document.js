import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        {/* Reference JS files from the /public folder */}
     
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/slick.min.js"></script>
        <script src="js/fancybox.min.js"></script>
        <script src="js/jquery.rateyo.js"></script>
        <script src="js/main.js"></script>
      </body>
    </Html>
  );
}
