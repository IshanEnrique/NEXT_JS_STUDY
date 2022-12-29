import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [contact, setContact] = useState({name:"",email:"",mobile:"",subject:"",description:""});
  const handleSubmit=(e)=>{
    e.preventDefault();
    submit();
    
  }
  const handleOnChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value});
  }
   async function submit()  {
    let url ="http://localhost:3000/api/contact";
    console.log("URL : " + url);
    let reqData = {name:contact.name,email:contact.email,mobile:contact.mobile,subject:contact.subject,description:contact.description};

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(reqData),
    });
    let res = await response.json();
    if (response.status === 200) {
      if (res.status === "00") {
        
        alert(res.message);
        setContact({name:"",email:"",mobile:"",subject:"",description:""});
      } else {
        alert(res.message);
      }
    } else {
      alert(res.message);
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formLabel}>Enter Your Name</label>
          <input type="text" className={styles.input} value={contact.name} onChange={handleOnChange} id="name" name='name' />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formLabel}>Email Your address</label>
          <input type="email" className={styles.input}  value={contact.email} onChange={handleOnChange} id="email" name='email' aria-describedby="emailHelp" />
          <div id="emailHelp" className={styles.formText}>We'll never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="mobile" className={styles.formLabel}>Enter Your Mobile</label>
          <input type="phone" className={styles.input}  value={contact.mobile} onChange={handleOnChange} id="mobile" name='mobile' />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="subject" className={styles.formLabel}>Subject</label>
          <input type="text" className={styles.input}  value={contact.subject} onChange={handleOnChange} id="subject" name='subject' />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="description" className={styles.formLabel}>Description</label>
          <textarea className={styles.input}  value={contact.description} onChange={handleOnChange} id="description" name='description' rows="3" />
        </div>
        <button  type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact;
