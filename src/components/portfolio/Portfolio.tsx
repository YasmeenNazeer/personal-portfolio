import React from 'react'
import styles from "./Portfolio.module.css"
import { caveatFont, interFont } from '@/font'
import PortfolioCards from './portfolio-cards/PortfolioCards'



function Portfolio() {
  return (
    <>
        
        <section id='portfolio' className={styles.portfolio}>
            <h1 className={caveatFont.className}> 
            <span>M</span>y {"  "}
             <span>L</span>ast {"  "}
              <span>W</span>ork {"  "}
              </h1>
              <p className={interFont.className}>I focus on both the aesthetic and functional aspects of web design, ensuring that my code is clean, efficient, and scalable. 
                I have just finished my recent work as you can see below my fully functional webpages using typescript , React Next j.s , custom and tailwind css
                
              </p>

                 <div className={styles.myWork}>
                   <PortfolioCards/>
                 </div>
             </section>


    </>
  )
}

export default Portfolio