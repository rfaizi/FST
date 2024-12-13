"use client";
import styles from './Usp.module.scss';
import classNames from 'classnames';
import { IoMdEye } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
const Usp = () => {
  return (
   <section className={classNames(styles.usp)}>
<div className='container'>
  <ul className={classNames(styles.uspContainer)}>
<li><IoMdEye /><br />Digital Visionaries</li>
<li><FaRegLightbulb /><br /> Innovative Excellence</li>
<li><FaCogs /><br /> Technology Mastery</li>
<li><PiListMagnifyingGlassBold /><br /> Results-Driven Approach</li>
  </ul>
</div>
   </section>
  );
};

export default Usp;
