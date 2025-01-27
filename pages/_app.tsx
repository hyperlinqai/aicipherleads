import "@/styles/globals.css";

import { Poppins } from "next/font/google";

import type { AppProps } from "next/app";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} `}>
      <Component {...pageProps} />
    </div>
  );
}
