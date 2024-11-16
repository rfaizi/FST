"use client";
import React, { useEffect, useState } from 'react';
import styles from './banner.module.scss';
import classNames from 'classnames';
import { FaEye } from "react-icons/fa";
import { RiUserHeartFill } from "react-icons/ri";
import { MdImportantDevices } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiBookContent } from "react-icons/bi";
import useIsMobile from '@/hooks/useIsMobile';
import { useRouter } from 'next/router';
const HeroBanner = () => {
  const router = useRouter();
  const heroBannerImages = {
    '/' : '/assets/fst-home-banner.jpg',
    '/services/web-design' : '/assets/services/web-design/web-design-concepts.jpg',
  }
  const heroBannerImage = heroBannerImages[router.pathname] || '/assets/fst-home-banner.jpg';
  const [punchlineText, setPunchlineText] = useState("Transforming Dreams into Digital Reality");
  // Define texts for each cylinder
  const cylinderTexts = [
    "Aesthetic Appeal",
    "User Experience (UX)",
    "Responsive Design",
    "Brand Identity",
    "Fresh Content"
  ];
  const isMobile = useIsMobile();
  const [isBannerBtnShow, setIsBannerBtnShow] = useState(true);
  useEffect(() => {
    if (isMobile) {
      setIsBannerBtnShow(false);
    }
  })
  return (
    <section className={classNames(styles.herobanner)} style={{
      backgroundImage: `url(${heroBannerImage})`,
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xs-12 offset-md-4 pt-4 position-relative">
            <div className={classNames(styles.punchline)}>
              <strong>
                <span>Your Digital Visionaries:</span><br />
                {punchlineText}
              </strong>
              <br />
              {isBannerBtnShow && (
                <button className={classNames(styles.banner_btn)}>Let's Collaborate</button>
              )
              }
            </div>
            <div className={classNames(styles.fiveSenses)}>
              <div
                className={classNames(styles.cylinder, styles.sense_one)}
                onMouseEnter={() => setPunchlineText("Transforming Dreams into Digital Reality")}
                onMouseLeave={() => setPunchlineText("Transforming Dreams into Digital Reality")}
              >
                <span><FaEye /></span>Aesthetic Appeal
              </div>
              <div
                className={classNames(styles.cylinder, styles.sense_two)}
                onMouseEnter={() => setPunchlineText("Empowering Brands with Seamless User Experiences")}
                onMouseLeave={() => setPunchlineText("Transforming Dreams into Digital Reality")}
              >
                <span><RiUserHeartFill /></span>User Experience (UX)
              </div>
              <div
                className={classNames(styles.cylinder, styles.sense_three)}
                onMouseEnter={() => setPunchlineText("Crafting Experiences That Fit Every Screen")}
                onMouseLeave={() => setPunchlineText("Transforming Dreams into Digital Reality")}
              >
                <span><MdImportantDevices /></span>Responsive Design
              </div>
              <div
                className={classNames(styles.cylinder, styles.sense_four)}
                onMouseEnter={() => setPunchlineText("Making Brands Unforgettable Through Powerful Identity")}
                onMouseLeave={() => setPunchlineText("Transforming Dreams into Digital Reality")}
              >
                <span><HiOutlineSpeakerphone /></span>Brand Identity
              </div>
              <div
                className={classNames(styles.cylinder, styles.sense_five)}
                onMouseEnter={() => setPunchlineText("Revitalize Your Brand with Content That Speaks and Engages")}
                onMouseLeave={() => setPunchlineText("Transforming Dreams into Digital Reality")}
              >
                <span><BiBookContent /></span>Fresh Content
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {!isBannerBtnShow && (
                <button className={classNames(styles.banner_btn)}>Let's Collaborate</button>
              )
              }
    </section>
  );
};

export default HeroBanner;
