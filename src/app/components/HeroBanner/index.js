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
import { herobannerContent } from '@/app/helper/herobanner';
const HeroBanner = () => {
  const router = useRouter();
  const path = router.pathname;
  const [punchlineText, setPunchlineText] = useState("Transforming Dreams into Digital Reality");

  const herobannerData = herobannerContent(path);
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


  useEffect(() => {
    if (path !== '/') {
      setPunchlineText(herobannerData?.content?.subHead || punchlineText);
    }
  }, []);



  const heroBannerImage = herobannerData.imageUrl || '/assets/fst-home-banner.jpg';

  return (
    <section className={classNames(styles.herobanner, { [styles.serviceHeroBanner]: path.startsWith("/services"), })}
      style={{ backgroundImage: `url(${heroBannerImage})`, }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xs-12 offset-md-4 pt-4 position-relative">
            <div className={classNames(styles.punchline)}>
              <strong>
                <span>{herobannerData.content.mainHead}</span><br />
                {punchlineText}
              </strong>
              <br />
              {isBannerBtnShow && (
                <button className={classNames(styles.banner_btn)}>Let's Collaborate</button>
              )
              }
            </div>
            {path === "/" && (
              <div className={classNames(styles.fiveSenses)}>
                <div
                  className={classNames(styles.cylinder, styles.sense_one)}
                  onMouseEnter={() => setPunchlineText(herobannerData.fiveSensesData.senseOnePunchline)}
                  onMouseLeave={() => setPunchlineText(herobannerData.fiveSensesData.senseOnePunchline)}
                >
                  <span><FaEye /></span>Aesthetic Appeal
                </div>
                <div
                  className={classNames(styles.cylinder, styles.sense_two)}
                  onMouseEnter={() => setPunchlineText(herobannerData.fiveSensesData.senseTwoPunchline)}
                  onMouseLeave={() => setPunchlineText(herobannerData.fiveSensesData.senseOnePunchline)}
                >
                  <span><RiUserHeartFill /></span>User Experience (UX)
                </div>
                <div
                  className={classNames(styles.cylinder, styles.sense_three)}
                  onMouseEnter={() => setPunchlineText(herobannerData.fiveSensesData.senseThreePunchline)}
                  onMouseLeave={() => setPunchlineText(herobannerData.fiveSensesData.senseOnePunchline)}
                >
                  <span><MdImportantDevices /></span>Responsive Design
                </div>
                <div
                  className={classNames(styles.cylinder, styles.sense_four)}
                  onMouseEnter={() => setPunchlineText(herobannerData.fiveSensesData.senseFourPunchline)}
                  onMouseLeave={() => setPunchlineText(herobannerData.fiveSensesData.senseOnePunchline)}
                >
                  <span><HiOutlineSpeakerphone /></span>Brand Identity
                </div>
                <div
                  className={classNames(styles.cylinder, styles.sense_five)}
                  onMouseEnter={() => setPunchlineText(herobannerData.fiveSensesData.senseFivePunchline)}
                  onMouseLeave={() => setPunchlineText(herobannerData.fiveSensesData.senseOnePunchline)}
                >
                  <span><BiBookContent /></span>Fresh Content
                </div>

              </div>
            )}

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
