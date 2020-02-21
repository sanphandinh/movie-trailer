import React from 'react';
import SwiperReact, { DEFAULT_RENDER_PAGINATION } from './swiper';
import Image from './image';

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

const HomeSlider = ({ slides }) => (
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
      renderPagination={DEFAULT_RENDER_PAGINATION}
      renderSlides={() =>
        slides.map(({ backdrop_path, title, overview, id }, index) => {
          return (
            <div key={id} className="swiper-slide">
              <Image size="w1280" src={backdrop_path} />
              <div className="caption">
                <div className="captioninside">
                  <h3>{title}</h3>
                  <p>{overview}</p>
                  <a href={`/movie/${id}`} className="playbutton">
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

HomeSlider.defaultProps = {
  slides: []
};

export default HomeSlider;
