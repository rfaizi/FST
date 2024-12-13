import classNames from "classnames";
import styles from "./Counter.module.scss"
import { useState, useEffect } from "react";
import { FaRocket, FaUsers, FaUserTie, FaTrophy } from "react-icons/fa";

const CounterSection = () => {
  const counterData = [
    { Icon: FaRocket, endValue: 250, label: "Projects Completed" },
    { Icon: FaUsers, endValue: 200, label: "Happy Clients" },
    { Icon: FaUserTie, endValue: 25, label: "Professionals" },
    { Icon: FaTrophy, endValue: 15, label: "Years of Experience" },
  ];

  const Counter = ({ Icon, endValue, label }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleScroll = () => {
      const element = document.getElementById(`counter-${label.replace(/\s/g, "")}`);
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight && !hasAnimated) {
          animateCounter();
          setHasAnimated(true);
        }
      }
    };

    const animateCounter = () => {
      let start = 0;
      const duration = 5000;
      const stepTime = Math.abs(Math.floor(duration / endValue));
      const timer = setInterval(() => {
        start += 1;
        if (start > endValue) {
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [hasAnimated]);

    return (
      <div
        id={`counter-${label.replace(/\s/g, "")}`}
        className={classNames(styles.counter__content)}
      >
        <div className={classNames(styles.counter__icon)}>
          <Icon size={50} />
        </div>
        <div className={classNames(styles.counter__info)}>
          <span className={classNames(styles.counter__digit)}>{count}</span>+
        </div>
        <div className={classNames(styles.counter__text)}>{label}</div>
      </div>
    );
  };

  return (
    <section className={classNames(styles.counter)}>
      <div className="container">
        <div className="row">
          {counterData.map((item, index) => (
            <div className="col-xxs-12 col-xs-6 col-sm-3 col-md-3" key={index}>
              <Counter
                Icon={item.Icon}
                endValue={item.endValue}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default CounterSection;
