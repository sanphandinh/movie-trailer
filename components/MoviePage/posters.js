import SwiperReact, { DEFAULT_RENDER_PAGINATION } from '../swiper';
import { useSelector } from 'react-redux';
import Image from '../image';

const Posters = ({ posters = [] }) => {
  const { secure_base_url } =
    useSelector(state => state.configuration?.images) || {};
  return (
    <div className="posters-wrapper">
      <SwiperReact
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        renderPagination={DEFAULT_RENDER_PAGINATION}
        renderSlides={() => (
          <>
            {posters.map(({ file_path }) => {
              return (
                <div className="swiper-slide">
                  <Image src={file_path} size="w342" />
                </div>
              );
            })}
          </>
        )}
      />
      <style jsx global>
        {`
          .posters-wrapper .swiper-container .swiper-slide {
            width: fit-content;
            height: fit-content;
          }
        `}
      </style>
    </div>
  );
};

export default Posters;
