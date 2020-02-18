import React from 'react';
import SwiperReact from './swiper';

const SLIDES = [
  {
    url: '/images/slider/poster2.jpg',
    title: 'Movie Title',
    description: 'Lorem ipsum dolor siamet'
  },
  {
    url: '/images/slider/poster1.jpg',
    title: 'Movie Title',
    description: 'Lorem ipsum dolor siamet'
  },
  {
    url: '/images/slider/poster2.jpg',
    title: 'Movie Title',
    description: 'Lorem ipsum dolor siamet'
  }
];

const HomeSlider = () => (
  <div className="homeslider">
    <SwiperReact
      breakpoints={{
        320: {
          height: 200
        },

        480: {
          height: 300
        },

        768: {
          height: 400
        },
        1024: {
          height: 500
        }
      }}
      type="bullets"
      effect="fade"
      preventClicks={false}
      preventClicksPropagation={false}
      useDefaultPagination
      pagination={{ clickable: true }}
      renderSlides={() =>
        SLIDES.map(({ url, title, description }, index) => {
          return (
            <div key={url + index} className="swiper-slide">
              <img src={url} />
              <div className="caption">
                <div className="captioninside">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href="single.html" className="playbutton">
                    Play
                  </a>
                </div>
              </div>
            </div>
          );
        })
      }
    />
  </div>
);

export default HomeSlider;
