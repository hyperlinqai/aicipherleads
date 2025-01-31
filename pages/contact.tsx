import React from "react";

import ContactPage from "@/components/contact";
import Footer from "@/components/industry/sections/footer";
import { Header } from "@/components/layout/header";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Contact;
