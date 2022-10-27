import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ContactForm from '../components/ContactForm'


const Contact: NextPage = () => {
  return (
    <ContactForm />
  )
}

export default Contact;

/*
What type of photos? (Wedding, Portraits, Family, General Inquiry)
First/Last Name
Email Address
Phone Number
Tell us more about what you're looking for
*/
