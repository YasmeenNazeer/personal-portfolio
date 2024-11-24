"use client"
import Link from "next/link"
import styles from "./Header.module.css"
import { caveatFont, interFont } from "@/font"
import { TiThMenu } from "react-icons/ti";
import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";


function Header() {

    const [isOpen , setIsOpen] = React. useState(false)
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
            <h1  className={caveatFont.className}>  Yasmeen Nazeer </h1>
            <AnimatePresence>

            {isOpen == true
             ?(
              <motion.ul className={`${interFont.className} ${styles.navUl} ${styles.active}`}
              key={"active"}
                initial={{opacity:0,width:0}}
                animate={{opacity:1 ,width:"50%"}}
                exit={{opacity:0, width:0}}
                transition={{duration:2,type:"spring"}}
              >
                <FaRegWindowClose size={30} className={styles.close} onClick={()=>setIsOpen(false)}/>
              <li><Link href={'/'}>Home</Link></li>
              <li><Link href={'#about'}>About</Link></li>
              <li><Link href={'#portfolio'}>Portfolio</Link></li>
              <li><Link href={'#services'}>Services</Link></li>
              <li><Link href={'#testi'}>Testimonials</Link></li>
                <li><Link href={'#contact'}>Contact</Link></li>
              
          </motion.ul>

             ) 

            : (
                <ul className={`${interFont.className} ${styles.navUl}`}>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'#about'}>About</Link></li>
                <li><Link href={'#portfolio'}>Portfolio</Link></li>
                <li><Link href={'#services'}>Services</Link></li>
                <li><Link href={'#testi'}>Testimonials</Link></li>
                <li><Link href={'#contact'}>Contact</Link></li>
            </ul>
            )}

          </AnimatePresence>
            <TiThMenu  size={35} className={styles.menu} onClick={()=>{setIsOpen(!isOpen)}}/>


        </nav>

      </header>
    
    </>
  )
}

export default Header