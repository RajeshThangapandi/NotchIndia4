import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import './HeroSection.css';

// Left and right column images and texts
const imagesLeftColumn = [
  'https://img.freepik.com/free-photo/construction-silhouette_1127-3246.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727827200&semt=ais_hybrid',
  'https://img.freepik.com/free-photo/illustration-construction-site_23-2151850239.jpg?t=st=1727969737~exp=1727973337~hmac=170e1200b517d07ab7aded3f6ce864b65d0ba2d35bce7ac901b9a4764044baf5&w=2000',
  'https://img.freepik.com/free-photo/residential-house-process-building_23-2147694705.jpg?w=1800&t=st=1727969760~exp=1727970360~hmac=e99c47accb6e3fcbc95cb7f86a46858e0f73b3dc46fef9fac680ac4146280d03'
];

const imagesRightColumn = [
  'https://img.freepik.com/free-photo/view-modern-construction-site_23-2151317244.jpg?t=st=1727969918~exp=1727973518~hmac=9a2f39ec800159013fea5e62bcba5b7b48a4b9b2b4f81a4dfdb33884c3d5e45f&w=1800',
  'https://img.freepik.com/free-photo/heavy-machines-construction-workers-working-building_181624-8234.jpg?w=1800&t=st=1727969946~exp=1727970546~hmac=0e2a38271cbd900a19d77bfc3e9deab64c1071449fa4c9eeb99f8b032e49470b',
  'https://img.freepik.com/free-photo/beautiful-view-construction-site-city-during-sunset_181624-9347.jpg?w=1800&t=st=1727969978~exp=1727970578~hmac=e0c3b065a7be94729e9860e2ba502ef0cd68e7b4b47530df65f7edd1b3e2ca35'
];

// Corresponding texts for each image
const leftTexts = [
  'Building Dreams',
  'Construction Innovation',
  'Home Under Construction'
];

const rightTexts = [
  'Modern Architecture',
  'Heavy Machinery in Action',
  'City View at Sunset'
];

const HeroSection = () => {
  const [activeIndexLeft, setActiveIndexLeft] = useState(0);
  const [activeIndexRight, setActiveIndexRight] = useState(0);
  const swiperRefLeft = useRef(null);
  const swiperRefRight = useRef(null);

  return (
    <div className="hero-section">
      {/* Left Column */}
      <div className="hero-column">
        <Swiper
          ref={swiperRefLeft}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          fadeEffect={{ crossFade: true }}
          onSlideChange={(swiper) => setActiveIndexLeft(swiper.realIndex)}
        >
          {imagesLeftColumn.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Left Slide ${index}`} className="hero-image" />
              <div className="left-text">{leftTexts[index]}</div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Progress Bar for Left Column */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((activeIndexLeft + 1) / imagesLeftColumn.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="hero-column">
        <Swiper
          ref={swiperRefRight}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          fadeEffect={{ crossFade: true }}
          onSlideChange={(swiper) => setActiveIndexRight(swiper.realIndex)}
        >
          {imagesRightColumn.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Right Slide ${index}`} className="hero-image" />
              <div className="right-text">{rightTexts[index]}</div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Progress Bar for Right Column */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((activeIndexRight + 1) / imagesRightColumn.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
