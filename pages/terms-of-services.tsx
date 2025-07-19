import React from "react";

import Footer from "@/components/industry/sections/footer";
import { Header } from "@/components/layout/header";
import TermsOfService from "@/components/termOfServices";

const TermsOfServicePage = () => {
  return (
    <>
      <Header />
      <TermsOfService />
      <Footer />
    </>
  );
};

export default TermsOfServicePage;
