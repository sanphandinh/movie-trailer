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
  fetch,
  images
}) {
  const { detailKey, videosOfMovieKey, movieSimilarApiKey } = fetch;
  const { data: _movieDetail } = useSWR(detailKey, { initialData: detail });
  const { data: _videos } = useSWR(videosOfMovieKey, { initialData: videos });
  const { data: _movieSimilar } = useSWR(movieSimilarApiKey, {
    initialData: movieSimilar
  });
  const { poster_path, title, overview, genres, vote_average } = _movieDetail;
  const { results } = _movieSimilar;
  const topSimilar = results.slice(0, 6);
  return (
    <Layout>
      <div className="single">
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
        <MediaSection
          videos={_videos?.results}
          posters={images?.posters}
          backdrops={images?.backdrops}
        />
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
  const imagesApiKey = makeKey({
    urlKey: 'movie.GET_IMAGES_OF_MOVIE',
    pathParams: { movie_id: id }
  });
  const movieDetailFetcher = requester(...detailKey);
  const videosFetcher = requester(...videosOfMovieKey);
  const movieSimilarFetcher = requester(...movieSimilarApiKey);
  const imagesFetcher = requester(...imagesApiKey);
  const [movieDetail, videos, movieSimilar, images] = await Promise.all([
    movieDetailFetcher,
    videosFetcher,
    movieSimilarFetcher,
    imagesFetcher
  ]);
  return {
    id,
    detail: movieDetail,
    videos,
    images,
    movieSimilar,
    fetch: { detailKey, videosOfMovieKey, movieSimilarApiKey }
  };
};
