import SwiperReact, {
  DEFAULT_RENDER_NEXT_NAVIGATION,
  DEFAULT_RENDER_PREV_NAVIGATION
} from '../swiper';
import Image from '../image';

const Backdrops = ({ backdrops = [] }) => {
  return (
    <div className="backdrops-wrapper">
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
        effect="fade"
        renderPrevNavigation={DEFAULT_RENDER_PREV_NAVIGATION}
        renderNextNavigation={DEFAULT_RENDER_NEXT_NAVIGATION}
        renderSlides={() => (
          <>
            {backdrops.map(({ file_path }) => {
              return (
                <div key={file_path} className="swiper-slide">
                  <Image
                    style={{ width: '100%', height: '100%' }}
                    className="slide-image"
                    size="w1280"
                    src={file_path}
                  />
                </div>
              );
            })}
          </>
        )}
      />
    </div>
  );
};

export default Backdrops;
