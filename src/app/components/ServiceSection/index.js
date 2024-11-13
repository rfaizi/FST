"use client"; // Keep this line at the top

import React, { useState, useEffect } from "react";
import styles from './serviceSection.module.scss';
import classNames from 'classnames';

const ServiceSection = () => {
  const [hoveredItem, setHoveredItem] = useState(0); // For desktop hover
  const [activeItem, setActiveItem] = useState(null); // For mobile click
  const [isMobile, setIsMobile] = useState(false); // Track if mobile view

  const services = [
    { title: "Web Designing",
      icon: "/assets/web-design-icon.png",
      punchline: "Crafting Digital Experiences that Captivate and Convert",
      description: "In the digital age, your website is often the first interaction customers have with your brand. At FiveSenseTechnology, we specialize in creating visually stunning and user-friendly websites that leave a lasting impression.",
      subHead: "Our Web Design Services Include:", 
      listItems: [
        {item: "Responsive Web Design" },
        {item: "E-commerce Websites" },
        {item: "Custom Website Development" },                
        {item: "Website Maintenance and Support" }
      ]      
    },
    { 
      title: "Software Development", 
      icon: "/assets/web-development-icon.png",
      punchline: "Innovative Software Solutions for a Dynamic World",
      description: "We understand the importance of robust and scalable software in today's fast-paced business environment. Our software development services are tailored to meet the unique needs of your business, providing solutions that drive efficiency and growth.",
      subHead: "Our Software Development Include:",
      listItems: [
        {item: "Custom Software Development" },        
        {item: "Enterprise Software Solutions" },
        {item: "Database Design and Management" },
        {item: "Software Integration and Migration" }
      ]      
    },
    { title: "App Development",
      icon: "/assets/App-Development-Icon.png",
      punchline: "Crafting Exceptional Apps for a Digital Tomorrow",
      description: "Embark on a journey of digital transformation with FiveSenseTechnologies, your trusted partner in cutting-edge App Development services. Our team of seasoned developers is committed to transforming your vision into feature-rich, user-friendly applications that stand out in the ever-evolving digital landscape.",
      subHead: "Our App Development Services Include:", 
      listItems: [
        {item: "App Development" },
        {item: "Custom App Design" },
        {item: "iOS & Android" },
        {item: "Entertainment & Gaming" },        
      ]      
    },
    { title: "Digital Marketing",
      icon: "/assets/Web-Marketing-icon.png",
      punchline: "Boost Your Online Presence and Drive Results",
      description: "In a world dominated by digital channels, a strong online presence is crucial for success. FiveSenseTechnology offers comprehensive digital marketing services to help you reach and engage your target audience effectively.",
      subHead: "Our Digital Marketing Services Include:", 
      listItems: [
        {item: "Search Engine Optimization (SEO)" },
        {item: "Social Media Marketing (SMM)" },
        {item: "Pay-Per-Click (PPC) Advertising" },
        {item: "Content Marketing" },
        {item: "Email Marketing" }
      ]      
    },
    { title: "Email Marketing",
      icon: "/assets/Email-Marketing-icon.png",
      punchline: "Boost Your Online Presence and Drive Results",
      description: "In a world dominated by digital channels, a strong online presence is crucial for success. FiveSenseTechnology offers comprehensive digital marketing services to help you reach and engage your target audience effectively.",
      subHead: "Our Email Marketing Services Include:", 
      listItems: [
        {item: "Search Engine Optimization (SEO)" },
        {item: "Social Media Marketing (SMM)" },
        {item: "Pay-Per-Click (PPC) Advertising" },
        {item: "Content Marketing" },
        {item: "Email Marketing" }
      ]      
    },
    { title: "Content Marketing",
      icon: "/assets/Content-Writing-Icon.png",
      punchline: "Boost Your Online Presence and Drive Results",
      description: "In a world dominated by digital channels, a strong online presence is crucial for success. FiveSenseTechnology offers comprehensive digital marketing services to help you reach and engage your target audience effectively.",
      subHead: "Our Content Marketing Services Include:", 
      listItems: [
        {item: "Search Engine Optimization (SEO)" },
        {item: "Social Media Marketing (SMM)" },
        {item: "Pay-Per-Click (PPC) Advertising" },
        {item: "Content Marketing" },
        {item: "Email Marketing" }
      ]      
    },
  ];

  useEffect(() => {
    // Detect screen size and update `isMobile`
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming mobile width <= 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  const handleClick = (index) => {
    if (isMobile) {
      setActiveItem(activeItem === index ? null : index); // Toggle item display in mobile
    }
  };

  return (
    <section className={classNames(styles.service)}>
      {isMobile && (
        <div style={{padding: '0 15px'}}>
        <h3 className={classNames(styles.heading)}>
          <span className={classNames(styles.underlineHeading)}>What We Do?</span>
          <span className={classNames(styles.bigTxt)}>Services That Help You Grow</span>
        </h3>
      </div>
      )
        
      }
      <div className="container">
        <div className='row'>
          {!isMobile && (
            <div className='col-5'>
            <div className={classNames(styles.serviceContent)}>
              <div>
                <h3 className={classNames(styles.heading)}>
                  <span className={classNames(styles.underlineHeading)}>What We Do?</span>
                  <span className={classNames(styles.bigTxt)}>Services That Help You Grow</span>
                </h3>
              </div>
              <div className={classNames(styles.serviceName)}>
                <h2>{services[isMobile ? activeItem : hoveredItem]?.title}</h2>
                <p><strong><i>{services[isMobile ? activeItem : hoveredItem]?.punchline}</i></strong></p>
                <p>{services[isMobile ? activeItem : hoveredItem]?.description}</p>
                <h6>{services[isMobile ? activeItem : hoveredItem]?.subHead}</h6>
                <ul>
                  {(services[isMobile ? activeItem : hoveredItem]?.listItems || []).map((listItem, index) => (
                    <li key={index}>{listItem.item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <button type="button" className="btn btn-default">Get Free Quote</button>
              </div>
            </div>
          </div>
          )
            
          }
          
          <div className='col'>
            <ul className={classNames(styles.areaServerd)}>
              {services.map((service, index) => (
                <li
                  key={index}
                  className={index === 1 || index === 2 || index === 5 ? classNames(styles.transBg) : ''}
                  onMouseEnter={() => !isMobile && setHoveredItem(index)}
                  onMouseLeave={() => !isMobile && setHoveredItem(0)} // Reset on mouse leave for desktop
                  onClick={() => handleClick(index)} // Only used for mobile
                >
                  <span className={classNames(styles.content)}>
                    <img src={service.icon} className="mb-3" alt="Feature Image" />
                    <h4>{service.title}</h4>
                    {isMobile && activeItem === index && (
                      <p>{service.punchline}</p> // Display content on click for mobile
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
