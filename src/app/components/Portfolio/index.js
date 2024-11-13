// import React from "react";
import classNames from 'classnames';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
const projects = [
  {
    title: 'Project One',
    description: 'This is a description of Project One.',
    image: '/assets/portfolio_01.png',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project Two',
    description: 'This is a description of Project Two.',
    image: '/assets/portfolio_02.png',
    link: 'https://example.com/project2',
  },
  {
    title: 'Project Three',
    description: 'This is a description of Project Three.',
    image: '/assets/portfolio_03.png',
    link: 'https://example.com/project3',
  },
  // Add more project data as needed
];


const Portfolio = () => {
  
  return (
    <section className={classNames(styles.usp)} style={{textAlign: 'center'}}>
      <div class="container">
        <div class="row">
          <div class="col-12">
          <h2 className={classNames(styles.heading)}>
                <span className={classNames(styles.underlineHeading)}>
                What WE DELIVERED?
                </span>
                <span className={classNames(styles.bigTxt)}>Transforming Visions into Tangible Results</span>
              </h2>
              <Swiper
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      className="project-slider"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="project-slide">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
          </div>
          
        </div>

      </div>

    </section>
  );
};

export default Portfolio;
