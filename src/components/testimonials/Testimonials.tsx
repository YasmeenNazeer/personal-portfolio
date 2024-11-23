
"use client"
import React from 'react'
import styles from './Testimonials.module.css'
import { caveatFont } from '@/font'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import TestimonialCards from './testimonial-cards/TestimonialCards'


function Testimonials() {
   const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay:3000})])

  return (
    <>
     <section id='testi' className={styles.testimonials}>

        <h1 className={caveatFont.className}>
           <span>W</span>hat {" "}
           <span>O</span>ther {" "}
           <span>P</span>eople {" "}
           <span>S</span>ay
        </h1>

        <div className={styles.embla}ref={emblaRef}>
        <div className={styles.embla__container}>

           <TestimonialCards/>
        </div>
        </div>
         </section>
    
    </>
  )
}

export default Testimonials