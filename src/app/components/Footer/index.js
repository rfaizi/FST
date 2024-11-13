"use client";
import Link from 'next/link';
import styles from './footer.module.scss'
import classNames from 'classnames';
import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from 'react';
import IntentPopup from '../IntentPopup';

const Footer = () => {
  const [isIntentPopup, showIntentPopup] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      showIntentPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  const handleClosePopup = () => {
    showIntentPopup(false);
  }
  return (
    <>
      <footer className={classNames(styles.footer)}>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col-md-4">
                  <Link href="/">
                    <Image
                      src="/logo.webp"
                      width={198}
                      height={43}
                      alt="Integrity and Transparency" class="marBtmHalfRem"
                    />
                  </Link>
                  <p style={{ display: 'flex', alignItems: 'center' }}>
                    <span>
                      <Image
                        src="/assets/location-pin.svg"
                        width={25}
                        height={25}
                        alt=""
                      /></span>
                    <span>B1/H3, Mohan Co-Operative Industrial Area,<br /> Mathura Road, Block B, New Delhi - 110044</span>
                  </p>
                  <p>1 (571) 111-1111</p>
                  <p>info@fivesensetechnologies.com</p>
                </div>
                <div class="col-4">
                  <h6>Explore</h6>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/Our-Work">Our Work</Link></li>
                    <li><Link href="/who-we-are">Who We Are</Link></li>
                    <li><Link href="/connect-with-us">Connect With Us</Link></li>
                  </ul>
                </div>
                <div class="col-4">
                  <div className={classNames(styles.socialMedia)}>
                    <h6>Follow Us</h6>
                    <ul>
                      <li><Link href="/"><FaFacebookSquare /></Link></li>
                      <li><Link href="/services"><FaInstagramSquare /></Link></li>
                      <li><Link href="/Our-Work"><FaSquareXTwitter /></Link></li>
                      <li><Link href="/who-we-are"><FaLinkedin /></Link></li>
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
      <IntentPopup isVisible={isIntentPopup} onClose={handleClosePopup} />



    </>

  );
};

export default Footer;
