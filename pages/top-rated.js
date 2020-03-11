import Layout from '../components/layout';
import makeKey from '../fetch/makeKey';
import requester from '../fetch/requester';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import MovieList from '../components/movies_list';
import Pagination from '../components/pagination';

const TopRate = ({ moviesResult }) => {
  const { query: { page = 1 } = {} } = useRouter();
  const apiKey = makeKey({
    urlKey: 'movie.GET_MOVIE_TOP_RATED',
    params: { page: String(page) }
  });
  const { data: _moviesResult } = useSWR(apiKey, requester, {
    initialData: moviesResult || {}
  });
  const { results: popularMovies = [], total_pages: totalPage } = _moviesResult;
  return (
    <Layout>
      <section className="centered">
        <h3>Top Rates Movies</h3>
        <MovieList movies={popularMovies} />
        <Pagination totalPage={totalPage} />
      </section>
    </Layout>
  );
};

TopRate.getInitialProps = async ctx => {
  const { query: { page = 1 } = {} } = ctx;
  const key = makeKey({
    urlKey: 'movie.GET_MOVIE_TOP_RATED',
    params: { page: String(page) }
  });
  const moviesResult = await requester(...key);

  return { moviesResult };
};

export default TopRate;
