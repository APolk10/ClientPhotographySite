import React from 'react';
import Header from './Header';
import ContactFooter from './ContactFooter';

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
        <main>{children}</main>
      <ContactFooter />
    </>
  )
}

export default Layout;
