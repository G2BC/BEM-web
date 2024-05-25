import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Cogumelo from '../../../assets/Galinhadomato.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  {
    src: Cogumelo,
    alt: 'Image 1',
  },
  {
    src: Cogumelo,
    alt: 'Image 2',
  },
  {
    src: Cogumelo,
    alt: 'Image 3',
  },
  {
    src: Cogumelo,
    alt: 'Image 4',
  },
];

function CarouselComponent() {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <div className="slider-container">
      <Slider asNavFor={nav2 as any} ref={sliderRef1}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo.src} alt={photo.alt} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
      <Slider
        asNavFor={nav1 as any}
        ref={sliderRef2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo.src} alt={photo.alt} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselComponent;
