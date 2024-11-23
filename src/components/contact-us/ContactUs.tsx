"use client"
import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import { caveatFont, interFont } from "@/font";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { sendEmail } from "@/utils/emailService";

function  ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessaga] = useState('')

    const handleSubmit= async(e: React.FormEvent)=>{
      e.preventDefault();
      const templateParams={
        to_name: "Yasmeen Nazeer",
        from_name: name,
        from_email: email,
        message :message
      };
      try{
        await sendEmail(templateParams)
          alert("Email sent successfully")
          setName('')
          setEmail('')
          setMessaga('')
        }
        catch(error){
          console.error('Emailjs Error', error);
          alert("Failed to send email")
        }
      }
    

  return (
    <>
      <section id="contact" className={`${styles.contact} ${interFont.className}`} >
        <h1 className={caveatFont.className}>
          <span>C</span>ontact <span>M</span>e
        </h1>
       <p>You can contact me through the form below, or you can connect with me via email or social media. Lets make something great together!
           </p>

           
           <div className={styles.bottommainDiv}>

            <div className={styles.leftDiv}>
           <div className={styles.leftDivContainer}>
            <MdEmail  size={24} color={"var(--logo-Color)"}/> 


                 <div className={styles.leftTextDiv}> 
             <h6>Have a question?</h6>
             <h6>I am here to help you</h6>
             <h6>Email me at yasmeen40@gmail.com</h6>
                   </div>
                   </div>



           <div className={styles.leftDivContainer}>
            <MdLocationPin  size={24} color={"var(--logo-Color)"}/> 
             <div className={styles.leftTextDiv}> 
             <h6>Current Location</h6>
             <h6>Karachi,Pakistan</h6>
             <h6>Serving clients worldwide</h6>
                   </div>
                    </div>




            </div>

            

            <div className={styles.rightDiv}>

              <form onSubmit={handleSubmit}>
                <div className={styles.topInputDiv}>
    <input type="text" placeholder="Your name"  className={styles.inputDetails} name="name" value={name} onChange={(e)=>setName(e.target.value)}/>

                    <input type="text" placeholder="Your email"  className={styles.inputDetails} name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                <input type="text" placeholder="Subject" className={styles.inputDetails}/>

         <textarea placeholder="Your message" className={styles.inputDetails} style={{height:"224px"}} name="message" value={message} onChange={(e)=>setMessaga(e.target.value)}></textarea>

               <input type="submit"  className={styles.inputButton} value={"Send message"}/>
              </form>

            </div>


            </div>
                 
      </section>
    </>
  );
}

export default ContactUs;
