import React from 'react';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header
      id="header"
      className="container mx-auto mt-10 text-center h-40 md:h-20">
      {/* Dynamic Logo */}
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>
      {/* Menu */}
      <NavBar />
    </header>
  );
};

export default Header;
