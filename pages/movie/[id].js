import Layout from '../../components/layout';
import makeKey from '../../fetch/makeKey';
import requester from '../../fetch/requester';
import useSWR from 'swr';
import Image from '../../components/image';
import Link from 'next/link';
import MediaSection from '../../components/MoviePage/MediaSection';

export default function MovieDetail({
  id,
  detail,
  videos,
  movieSimilar,
  fetch
}) {
  const { detailKey, videosOfMovieKey, movieSimilarApiKey } = fetch;
  const { data: _movieDetail } = useSWR(detailKey, { initialData: detail });
  const { data: _videos } = useSWR(videosOfMovieKey, { initialData: videos });
  const { data: _movieSimilar } = useSWR(movieSimilarApiKey, {
    initialData: movieSimilar
  });
  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    genres,
    vote_average
  } = _movieDetail;
  const { results } = _movieSimilar;
  const topSimilar = results.slice(0, 6);
  return (
    <Layout>
      <div className="single">
        {/* <section className="trailer">
          <h3>Trailer</h3>
          <div className="trailer_frame">
            <Image src={backdrop_path} size="w1280" />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/x73-573aWfs"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </section> */}
        <section className="movie">
          <Image src={poster_path} size="w185" />
          <ul>
            <li>{title}</li>
            <li>{overview}</li>
            <li>
              {genres.map((item, index) => (
                <Link key={item.id} href="/genre/[id]" as={`/genre/${item.id}`}>
                  <>
                    {' '}
                    <a>{item.name}</a>
                    {index !== genres.length - 1 ? ', ' : ''}
                  </>
                </Link>
              ))}
            </li>
            <li>{`${vote_average * 10}% User score`}</li>
          </ul>
        </section>
        <MediaSection videos={_videos?.results} />
        <section className="related">
          <h3>Related movies</h3>
          {topSimilar.map(({ title, poster_path, id }) => (
            <div className="relatemovie" key={id}>
              <Link href="/movie/[id]" as={`/movie/${id}`}>
                <a>
                  <Image src={poster_path} size="w185" />
                </a>
              </Link>
              <Link href="/movie/[id]" as={`/movie/${id}`}>
                <a>
                  <span className="relatedname">{title}</span>
                </a>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}

MovieDetail.getInitialProps = async ctx => {
  const { query: { id } = {} } = ctx;
  const detailKey = makeKey({
    urlKey: 'movie.GET_DETAILS_OF_MOVIE',
    pathParams: {
      movie_id: id
    }
  });
  const videosOfMovieKey = makeKey({
    urlKey: 'movie.GET_VIDEOS_OF_MOVIE',
    pathParams: { movie_id: id }
  });
  const movieSimilarApiKey = makeKey({
    urlKey: 'movie.GET_SIMILAR_MOVIE_OF_MOVIE',
    pathParams: { movie_id: id }
  });
  const movieDetailFetcher = requester(...detailKey);
  const videosFetcher = requester(...videosOfMovieKey);
  const movieSimilarFetcher = requester(...movieSimilarApiKey);
  const [movieDetail, videos, movieSimilar] = await Promise.all([
    movieDetailFetcher,
    videosFetcher,
    movieSimilarFetcher
  ]);
  return {
    id,
    detail: movieDetail,
    videos,
    movieSimilar,
    fetch: { detailKey, videosOfMovieKey, movieSimilarApiKey }
  };
};
