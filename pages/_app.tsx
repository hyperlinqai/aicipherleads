import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import Head from "next/head";

import type { AppProps } from "next/app";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} `}>
      <Head>
        <meta
          name="google-site-verification"
          content="AWSvun-rrzEz7y2O-ETu_jaG8VgAQWrkockvFdTSkdg"
        />
      </Head>
      <>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XMZRVYHV7X"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-XMZRVYHV7X');`}
        </script>
      </>
      <Component {...pageProps} />
    </div>
  );
}
