import React from 'react';
import Header from './Header';
import ContactFooter from './ContactFooter';


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ContactFooter />
    </>
  )
}