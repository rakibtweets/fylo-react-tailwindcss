import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
      <a
        href="/#features"
        className="hover:text-accentCyan">
        Features
      </a>
      <a
        href="#testimonials"
        className="hover:text-accentCyan">
        Testimoials
      </a>
      {/* ThemeToggleBtn */}
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
