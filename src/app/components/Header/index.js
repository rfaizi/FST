"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import classNames from "classnames";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={classNames(styles.header)}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className={classNames(styles.brand)}>
              <Link href="/">
                <Image
                  src="/logo.webp"
                  width={198}
                  height={43}
                  alt="Integrity and Transparency"
                />
              </Link>
            </div>
          </div>
          <div className="col-8">
            <nav className={classNames(styles.nav)}>
              <ul className={styles.navLinks}>
                <li onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                  <Link href="/">Services</Link>
                  {dropdown && (
                    <ul className={styles.dropdownMenu}>
                      <li><Link href="/services/web-design"> Web Design</Link></li>
                      <li><Link href="/services/software-development">Software Development</Link></li>
                      <li><Link href="/services/app-development">App Development</Link></li>
                      <li><Link href="/services/search-engine-marketing">Search Engine Marketing (SEO)</Link></li>
                      <li><Link href="/services/pay-per-click">Pay Per Click</Link></li>
                      <li><Link href="/services/social-media-marketing">Social Media Marketing</Link></li>
                      <li><Link href="/services/content-writing">Content Writing</Link></li>
                      <li><Link href="/services/lead-generation">Lead Generation</Link></li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="/">Our Work</Link>
                </li>
                <li>
                  <Link href="/">Who We Are</Link>
                </li>
                <li>
                  <Link href="/contact-us">Connect With Us</Link>
                </li>
              </ul>
              <div className={styles.hamburger} onClick={toggleMenu}>
                ☰
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Side Navigation */}
      <div className={classNames(styles.sideNav, { [styles.open]: isMenuOpen })}>
        <div className={styles.closeIcon} onClick={toggleMenu}>
          &times;
        </div>
        <ul>
          <li><Link href="/">Services</Link></li>
          <li><Link href="/">Our Work</Link></li>
          <li><Link href="/">Who We Are</Link></li>
          <li><Link href="/contact-us">Connect With Us</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
