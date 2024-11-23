
"use client"
import React from 'react'
import styles from './AboutSection.module.css'
import { caveatFont, interFont } from '@/font'
import Button from '../button/Button'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'

function AboutSection() {
  return (
    <>
       <section id='about' className={styles.about}>
        
     < motion.div className={styles.leftDiv}
         initial={{opacity:0, x:-100}}
         whileInView={{opacity:1, x:0}}
         transition={{duration:3,type:"spring"}}
     >
        <h1 className={caveatFont.className}>Yasmeen Nazeer</h1>
        <p className={caveatFont.className}>Freelance Web Developer</p>

        <p className={`${styles.aboutPara} ${interFont.className}`}>As i am frontend developer, I specialize in creating engaging 
            and user-friendly interfaces that bring websites and applications to life. I have expertise 
            in designing and implementing responsive layouts, ensuring that users on any device enjoy a 
            seamless experience. I have good experties  in HTML, CSS, JavaScript, and frameworks like Next.js 
            and Tailwind CSS.</p>

           <Link href={'#contact'}> <Button  text={"Contact Me"} />  </Link>

     </motion.div>

     
     <motion.div className={styles.rightDiv}
       initial={{opacity:0 ,x:100}}
       whileInView={{opacity:1,x:0}}
       transition={{duration:3,type:"spring"}} 
     >
        <Image src={'/profile.png'} alt={"profile"} width={300} height={400} className={styles.img}></Image>

     </motion.div>



       </section>
    </>
  )
}

export default AboutSection