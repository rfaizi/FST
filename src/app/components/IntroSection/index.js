"use client";
import useIsMobile from '@/hooks/useIsMobile';
import styles from './intro.module.scss'
import classNames from 'classnames';
import Image from 'next/image'
import { useEffect, useState } from 'react';

const IntroSection = () => {
  const isMobile = useIsMobile();
  const [isIntroImgShow, setIsIntroImgShow] = useState(true);
  useEffect(() =>{
    if(isMobile){
      setIsIntroImgShow(false);
    }
  })
  return (
    <section className={classNames(styles.intro)}>
      <div class="container">
        <div class="row">
          {isIntroImgShow && (
            <div class="col-md-5 col-xs-12">
              <Image style={{ width: '100%', objectFit: 'cover' }}
                src="/assets/fst_intro.jpg"
                width={458}
                height={592}
                alt="Five Sense Technology"
              />
            </div>
          )
          }

          <div class="col-md-7 col-xs-12" style={{ textAlign: 'center' }}>
            <h3 className={classNames(styles.heading)}>
              <span className={classNames(styles.underlineHeading)}>
                Who We Are
              </span>
              <span className={classNames(styles.bigTxt)}>Your Partner in Transformative Digital Solutions</span>
            </h3>
            <p>
              At FiveSenseTechnology, we believe in the power of innovation and creativity to bring your digital dreams to life. Established with a vision to redefine the digital landscape, we are a team of passionate professionals dedicated to providing top-notch Web Design, Software Development, and Digital Marketing services.
            </p>

            <div className={classNames(styles.coreValues)}>
              <h4 className='col'>Why Choose FiveSenseTechnology?</h4>
              <div class="row">
                <div class="col-md-4 col-xs-12">
                  <Image
                    src="/assets/customer.png"
                    width={70}
                    height={65}
                    alt="Customer Centric Approach"
                  />
                  <h6><strong>Expertise</strong></h6>
                  <p>Our team comprises skilled professionals with extensive experience in their respective fields.</p>
                </div>
                <div class="col-md-4 col-xs-12">
                  <div>
                    <Image
                      src="/assets/integrity.png"
                      width={70}
                      height={65}
                      alt="Integrity and Transparency"
                    />

                  </div>
                  <h6><strong>Innovation</strong></h6>
                  <p>We stay ahead of the curve, adopting the latest technologies to deliver modern and effective solutions. </p>
                </div>
                <div class="col-md-4 col-xs-12">
                  <div>
                    <Image
                      src="/assets/innovation.png"
                      width={70}
                      height={65}
                      alt="Continuous Innovation"
                    />
                  </div>
                  <h6><strong>Client-Centric Approach</strong></h6>
                  <p>Your success is our priority. Join hands with us, and let's embark on a journey of digital excellence together! </p>
                </div>
              </div>
              <div className='txt-center'>
                <button>Let's Connect</button>
              </div>


            </div>


          </div>
        </div>

      </div>

    </section>
  );
};

export default IntroSection;
