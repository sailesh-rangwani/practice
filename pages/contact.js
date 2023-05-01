import React, { useState } from 'react'
import styles from '@/styles/contact.module.css'

const Contact = () => {
  const [fname, setfname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [lname, setlname] = useState('')
  const [alert, setalert] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log(fname, lname, email, phone);
    const data = { fname, lname, email, phone };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        setalert("Form Submitted! Thanks for Contacting Us.");
        setphone('')
        setfname('')
        setlname('')
        setemail('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  const handleChange = (e) => {
    if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'lname') {
      setlname(e.target.value)
    }
    else if (e.target.name == 'fname') {
      setfname(e.target.value)
    }
  }
  return (
    <main className={styles.main}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <label>First Name: </label>
          <input type='text' value={fname} onChange={handleChange} id="fname" name='fname' />
        </div>
        <div className={styles.form}>
          <label>Last Name: </label>
          <input type='text' value={lname} onChange={handleChange} id="lname" name='lname' />
        </div>
        <div className={styles.form}>
          <label>Email Add.: </label>
          <input type='email' value={email} onChange={handleChange} id="email" name='email' />
        </div>
        <div className={styles.form}>
          <label>Phone No.: </label>
          <input type='phone' value={phone} onChange={handleChange} id="phone" name='phone' />
        </div>
        <div className={styles.submit}>
          <button type='Submit'>Submit</button>
        </div>
        <div className={styles.alert}>
          {alert}
        </div>
      </form>
    </main >
  )
}

export default Contact;