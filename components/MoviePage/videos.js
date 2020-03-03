import MovieCard from '../movie_card';
import SwiperReact, { DEFAULT_RENDER_PAGINATION } from '../swiper';

const Videos = ({ videos = [] }) => {
  return (
    <div className="videos-wrapper">
      <SwiperReact
        slidesPerView={3}
        spaceBetween={10}
        renderSlides={() => (
          <>
            {videos.map(({ key }) => {
              return (
                <MovieCard className="swiper-slide" key={key} youtubeId={key} />
              );
            })}
          </>
        )}
      />
    </div>
  );
};

export default Videos;
