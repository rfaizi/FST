import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'; 
import Image from 'next/image';
import classNames from 'classnames'; 
const Portfolio = () => { 
  return ( 
  <section className="Portfolio tranding" id="tranding"> 
  
    <div className="container"> 
    <h3 className="heading">
              <span className="underlineHeading">
                Our Works
              </span>
              <span className="bigTxt">Designing the Future with Every Sense in Mind</span>
            </h3> 
      <Swiper effect="coverflow" 
      grabCursor centeredSlides loop 
      slidesPerView="auto" 
      coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, }} 
      pagination={{ clickable: true }} 
      navigation modules={[Navigation, Pagination, EffectCoverflow]} 
      className="trandingSlider" > 
      {[ 
        { id: 1, img: '/assets/Projects/image1.jpg', name: 'Los Angeles' },
        { id: 2, img: '/assets/Projects/image2.jpg', name: 'Mexico City' }, 
        { id: 3, img: '/assets/Projects/image3.jpg', name: 'New York' }, 
        { id: 4, img: '/assets/Projects/image4.jpg', name: 'San Francisco' }, 
        { id: 5, img: '/assets/Projects/image5.jpg', name: 'Chicago' }, 
        { id: 6, img: '/assets/Projects/image6.jpg', name: 'Rome' }, 
        { id: 7, img: '/assets/Projects/image7.jpg', name: 'Sydney' }, 
        { id: 8, img: '/assets/Projects/image8.jpg', name: 'Tokyo' }, 
       
       ].map((food) => ( <SwiperSlide key={food.id} className="trandingSlide"> 
       <div className="trandingSlideImg"> 
        <Image src={food.img} alt={food.name} width={370} height={420} /> 
        </div> 
        <div className="trandingSlideContent"> 
          <div className="trandingSlideContentBottom">
            <h2 className="foodName">{food.name}</h2> 
            </div> 
            </div> 
            </SwiperSlide> ))}
             </Swiper> 
             </div> 
             </section> 
             );
            }; 
            export default Portfolio;
