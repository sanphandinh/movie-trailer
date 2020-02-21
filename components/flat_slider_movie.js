import SwiperReact from './swiper';
import Link from 'next/link';
import Image from './image';

const FlatSliderMovie = ({ movies, viewOtherUrl }) => {
  return (
    <SwiperReact
      slidesPerView={8}
      preventClicks={false}
      preventClicksPropagation={false}
      spaceBetween={10}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 5
        },

        480: {
          slidesPerView: 3,
          spaceBetween: 5
        },

        768: {
          slidesPerView: 5,
          spaceBetween: 5
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10
        }
      }}
      renderNextNavigation={_ref => (
        <div ref={_ref} className="nextdirection top-next">
          <img src="img/right-arrow.svg" />
        </div>
      )}
      renderPrevNavigation={_ref => (
        <div ref={_ref} className="leftdirection top-prev">
          <img src="img/left-arrow.svg" />
        </div>
      )}
      pagination={{ clickable: true }}
      renderSlides={() => (
        <>
          {movies.map(({ poster_path, title, id }) => (
            <div className="swiper-slide" key={id}>
              <Link href={`/movie/${id}`}>
                <a>
                  <Image src={poster_path} size="w185" />
                  <h3 className="hometitle">{title}</h3>
                </a>
              </Link>
            </div>
          ))}
          {viewOtherUrl && (
            <div className="swiper-slide">
              <Link href={viewOtherUrl}>
                <a>
                  <img src="img/others.png" />
                </a>
              </Link>
            </div>
          )}
        </>
      )}
    />
  );
};

export default FlatSliderMovie;
