import React from 'react'
import styles from './TestimonialCards.module.css'
import Image from 'next/image'
import { interFont } from '@/font'
import { testimonialsCards } from '@/constant/testimonialsCard'

function TestimonialCards() {
  return (
    <>
      {testimonialsCards.map((card ,index)=>{return(

    <div className={`${styles.card} ${interFont.className}`} key={index}>
          <div className={styles.cardImage}>
            <Image src={card.src} alt={"test1"} width={150} height={150}></Image>
          </div>
             <p>{card.name}</p>
             <p > <span>{card.title}</span></p>
             <p className={styles.para}>{card.discription}</p>
          </div>
             
            )})}
    </>
  )
}

export default TestimonialCards