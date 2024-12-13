"use client";
import styles from './DesignProcess.module.scss';
import classNames from 'classnames';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GrPlan } from 'react-icons/gr';
import { MdDraw } from "react-icons/md";
import { FaCode } from 'react-icons/fa6';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const DesignProcess = () => {
  console.log("Rendering DesignProcess Component"); // Debugging
  console.log(styles); // Check if styles are properly imported

  return (
    <div
      style={{
        background: 'url(/assets/services/web-design/Vector-1.png) center top no-repeat',
        marginTop: '120px',        
        display: 'flex',
        flexWrap: 'wrap'        
      }}
    >
      {/* Step 1 */}
      <div className={classNames(styles.steps, styles.stepOne)}>
        <div className={classNames(styles.stepsContainer)}>
          <div className={classNames(styles.stepIconBox)}>
            <div className={classNames(styles.stepIconBox_circle)}>
              <div className={classNames(styles.stepIconBox_icon)}>
                <HiOutlineLightBulb style={{ fontSize: '30px', width: '30px', height: '30px' }} />
              </div>
              <div
                className={classNames(styles.stepIconBox_text)}
                style={{ height: '30px', marginTop: '-30px', fontSize: '30px' }}
              >
                01
              </div>
            </div>
            <div className={classNames(styles.stepIconBox_box)}>
              <div className={classNames(styles.stepIconBox_title)}>Info Gathering</div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className={classNames(styles.steps, styles.stepTwo)}>
        <div className={classNames(styles.stepsContainer)}>
          <div className={classNames(styles.stepIconBox)}>
            <div className={classNames(styles.stepIconBox_circle)}>
              <div className={classNames(styles.stepIconBox_icon)}>
                <GrPlan style={{ fontSize: '30px', width: '30px', height: '30px' }} />
              </div>
              <div
                className={classNames(styles.stepIconBox_text)}
                style={{ height: '30px', marginTop: '-30px', fontSize: '30px' }}
              >
                02
              </div>
            </div>
            <div className={classNames(styles.stepIconBox_box)}>
              <div className={classNames(styles.stepIconBox_title)}>Planning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className={classNames(styles.steps, styles.stepThree)}>
        <div className={classNames(styles.stepsContainer)}>
          <div className={classNames(styles.stepIconBox)}>
            <div className={classNames(styles.stepIconBox_circle)}>
              <div className={classNames(styles.stepIconBox_icon)}>
              <MdDraw style={{ fontSize: '30px', width: '30px', height: '30px' }} />
              </div>
              <div
                className={classNames(styles.stepIconBox_text)}
                style={{ height: '30px', marginTop: '-30px', fontSize: '30px' }}
              >
                03
              </div>
            </div>
            <div className={classNames(styles.stepIconBox_box)}>
              <div className={classNames(styles.stepIconBox_title)}>Design</div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div className={classNames(styles.steps, styles.stepFour)}>
        <div className={classNames(styles.stepsContainer)}>
          <div className={classNames(styles.stepIconBox)}>
            <div className={classNames(styles.stepIconBox_circle)}>
              <div className={classNames(styles.stepIconBox_icon)}>
                <FaCode style={{ fontSize: '30px', width: '30px', height: '30px' }} />
              </div>
              <div
                className={classNames(styles.stepIconBox_text)}
                style={{ height: '30px', marginTop: '-30px', fontSize: '30px' }}
              >
                04
              </div>
            </div>
            <div className={classNames(styles.stepIconBox_box)}>
              <div className={classNames(styles.stepIconBox_title)}>Development</div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 5 */}
      <div className={classNames(styles.steps, styles.stepFive)}>
        <div className={classNames(styles.stepsContainer)}>
          <div className={classNames(styles.stepIconBox)}>
            <div className={classNames(styles.stepIconBox_circle)}>
              <div className={classNames(styles.stepIconBox_icon)}>
                <HiOutlineRocketLaunch style={{ fontSize: '30px', width: '30px', height: '30px' }} />
              </div>
              <div
                className={classNames(styles.stepIconBox_text)}
                style={{ height: '30px', marginTop: '-30px', fontSize: '30px' }}
              >
                05
              </div>
            </div>
            <div className={classNames(styles.stepIconBox_box)}>
              <div className={classNames(styles.stepIconBox_title)}>Testing & Launch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
