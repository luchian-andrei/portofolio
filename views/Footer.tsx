import ContactSection from "@/components/footer/ContactSection";
import CopyrightSection from "@/components/footer/CopyrightSection";
import InternalLinks from "@/components/footer/InternalLinks";
import React from "react";

const Footer = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center"
      id="footer"
    >
      <div className="w-full border-t-[1px]  border-[#a3a3a3]"></div>
      <div className="lg:w-1/2 w-full sm:h-[350px] h-fit flex sm:flex-row flex-col justify-between items-center px-10 py-10 gap-10 sm:gap-0 sm:py-0">
        <ContactSection />
        <InternalLinks />
      </div>
      <CopyrightSection />
    </section>
  );
};

export default Footer;
