import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Projects from "@/components/Projects";
// import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import React from "react";
const page = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <WhyUs />
      <Packages />
      {/* <Services /> */}
      <ContactUs />
    </div>
  );
};

export default page;
