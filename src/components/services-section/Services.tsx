
import React from "react";
import styles from "./Services.module.css";
import { caveatFont, interFont } from "@/font";


import ServicesCard from "./services-card/ServicesCard";

function Services() {
  return (
    <>
      <section id="services" className={styles.services}>
        <h1 className={caveatFont.className}>
          <span>W</span>hat <span>I</span> <span>D</span>o <span>F</span>or{" "}
          <span>C</span>lients
        </h1>

        <p className={interFont.className}>
          {" "}
          As a frontend developer, I specialize in creating high-performance websites
         and applications that not only look great but also deliver results. 
         I m deeply invested in optimizing websites for search engines(SEO). 
         Branding is another core area I excel in. 
         UI/UX design is at the heart of what I do. I prioritize creating intuitive, user-centric
          interfaces that provide seamless navigation and an exceptional user experience.



        {" "}
        </p>

        <div className={styles.servicesCardDiv}>
          <ServicesCard/>
        </div>
      </section>
    </>
  );
}

export default Services;
