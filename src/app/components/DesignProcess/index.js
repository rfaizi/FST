"use client";
import styles from './DesignProcess.module.scss'
import classNames from 'classnames';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GrPlan } from "react-icons/gr";
import { SiExcalidraw } from "react-icons/si";
import { FaCode } from 'react-icons/fa6';
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const DesignProcess = () => {

  return (
    <>
      <div style={{ background: 'url(/assets/services/web-design/Vector-1.png) center top no-repeat', marginTop: '80px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <div className={classNames(styles.steps, styles.stepOne)}>
          <div className={classNames(styles.stepsContainer)}>
            <div className={classNames(styles.stepIconBox)}>
              <div className={classNames(styles.stepIconBox_circle)}>
                <div className={classNames(styles.stepIconBox_icon)}>
                <HiOutlineLightBulb style={{ fontSize: '30px', width: '30px', height: '30px' }} />                  
                </div>
                <div
                  className={classNames(styles.stepIconBox_text)}
                  style={{ height: "30px", marginTop: "-30px", fontSize:  "30px" }}
                >
                  01
                </div>
              </div>
              <div className={classNames(styles.stepIconBox_box)}>
                <div className={classNames(styles.stepIconBox_title)}>Info gathering</div>
                <div className={classNames(styles.stepIconBox_description)}>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(styles.steps, styles.stepOne)}>
          <div className={classNames(styles.stepsContainer)}>
            <div className={classNames(styles.stepIconBox)}>
              <div className={classNames(styles.stepIconBox_circle)}>
                <div className={classNames(styles.stepIconBox_icon)}>
                <GrPlan  style={{ fontSize: '30px', width: '30px', height: '30px' }}/>                  
                </div>
                <div className={classNames(styles.stepIconBox_text)}
                  style={{ height: "30px", marginTop: "-30px", fontSize: "30px" }}
                >
                  02
                </div>
              </div>
              <div className={classNames(styles.stepIconBox_box)}>
                <div className={classNames(styles.stepIconBox_title)}>Planning</div>
                <div className={classNames(styles.stepIconBox_description)}>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(styles.steps, styles.stepOne)}>
          <div className={classNames(styles.stepsContainer)}>
            <div className="stepIconBox kc-elm kc-css-6349108 template18 kc-pc-loaded">
              <div className={classNames(styles.stepIconBox_circle)}>
                <div className={classNames(styles.stepIconBox_icon)}>
                <SiExcalidraw style={{ fontSize: '30px', width: '30px', height: '30px' }} />
                  
                </div>
                <div
                  className={classNames(styles.stepIconBox_text)}
                  style={{ height: "30px", marginTop: "-30px", fontSize:  "30px" }}
                >
                  03
                </div>
              </div>
              <div className={classNames(styles.stepIconBox_box)}>
                <div className={classNames(styles.stepIconBox_title)}>Design</div>
                <div className={classNames(styles.stepIconBox_description)}>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(styles.steps, styles.stepOne)}>
          <div className={classNames(styles.stepsContainer)}>
            <div className={classNames(styles.stepIconBox)}>
              <div className={classNames(styles.stepIconBox_circle)}>
                <div className={classNames(styles.stepIconBox_icon)}>
                <FaCode style={{ fontSize: '30px', width: '30px', height: '30px' }} />                  
                </div>
                <div
                  className={classNames(styles.stepIconBox_text)}
                  style={{ height: "30px", marginTop: "-30px", fontSize:  "30px" }}
                >
                  04
                </div>
              </div>
              <div className={classNames(styles.stepIconBox_box)}>
                <div className={classNames(styles.stepIconBox_title)}>Development</div>
                <div className={classNames(styles.stepIconBox_description)}>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(styles.steps, styles.stepOne)}>
          <div className={classNames(styles.stepsContainer)}>
            <div className={classNames(styles.stepIconBox)}>
              <div className={classNames(styles.stepIconBox_circle)}>
                <div className={classNames(styles.stepIconBox_icon)}>
                <HiOutlineRocketLaunch style={{ fontSize: '30px', width: '30px', height: '30px' }} />                  
                </div>
                <div
                  className={classNames(styles.stepIconBox_text)}
                  style={{ height: "30px", marginTop: "-30px", fontSize:  "30px" }}
                >
                  05
                </div>
              </div>
              <div className={classNames(styles.stepIconBox_box)}>
                <div className={classNames(styles.stepIconBox_title)}>Testing &amp; Launch</div>
                <div className={classNames(styles.stepIconBox_description)}>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>



    </>

  );
};

export default DesignProcess;
