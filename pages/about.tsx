import Head from "next/head";
import React from "react";

import AboutPage from "@/components/aboutPage";
import Footer from "@/components/industry/sections/footer";
import { Header } from "@/components/layout/header";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Ai Cipher Leads</title>
        <meta
          name="description"
          content="Ai Cipher Leads, a trusted AI-Powered digital marketing agency with a proven track record of delivering exceptional results. Contact us!"
        />
      </Head>
      <Header />
      <AboutPage />
      <Footer />
    </>
  );
};

export default About;
