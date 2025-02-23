import Head from "next/head";
import React from "react";

import ContactPage from "@/components/contact";
import Footer from "@/components/industry/sections/footer";
import { Header } from "@/components/layout/header";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>
          Connect with Futurism Technologies for IT Services & Support
        </title>
        <meta
          name="description"
          content="Ai Cipher Leads, a trusted AI-Powered digital marketing agency with a proven track record of delivering exceptional results. Contact us!"
        />
      </Head>
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Contact;
