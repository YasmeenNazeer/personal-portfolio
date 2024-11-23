"use client"
import React from 'react'
import styles from './AboutImages.module.css'
import Image from 'next/image';
import {motion} from 'framer-motion'


const containerVariants ={
     hidden:{},
     show:{
      transition:{
        staggerChildren:0.2
      }
     },
    }

    const itemVariants ={
      hidden:{opacity:0, y:-20},
      show:{opacity:1, y:0}
    }

function AboutImages() {
  return (
<>
   < motion.section className={styles.aboutImages}
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
   >
   <motion.div variants={itemVariants} ><Image src={"/html.png"} alt={"hmlt"} width={96} height={96}></Image></motion.div>
   <motion.div variants={itemVariants} ><Image src={"/css.png"} alt={"css"} width={96} height={96}></Image></motion.div>
   <motion.div variants={itemVariants} ><Image src={"/typescript.png"} alt={"typescript"} width={70} height={70}></Image></motion.div>
   <motion.div variants={itemVariants} > <Image src={"/git.png"} alt={"git"} width={96} height={96}></Image></motion.div>
   <motion.div variants={itemVariants} > <Image src={"/figma.png"} alt={"figma"} width={96} height={96}></Image></motion.div>
   <motion.div variants={itemVariants} ><Image src={"/react.png"} alt={"react"} width={96} height={96}></Image></motion.div>
   <motion.div variants={itemVariants} ><Image src={"/node.png"} alt={"hmlt"} width={96} height={96}></Image></motion.div>
   <motion.div variants={itemVariants} > <Image src={"/next.png"} alt={"hmlt"} width={96} height={96}></Image></motion.div>
   </motion.section>

</>
  )
}

export default AboutImages