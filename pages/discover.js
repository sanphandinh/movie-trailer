import Layout from '../components/layout';
import makeKey from '../fetch/makeKey';
import requester from '../fetch/requester';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import MovieList from '../components/movies_list';
import Pagination from '../components/pagination';
import DiscoverFilter from '../components/discover_filter';

const Discover = ({ moviesResult }) => {
  const { query } = useRouter();
  const apiKey = makeKey({
    urlKey: 'discover.GET_DISCOVER_MOVIES',
    params: query
  });
  const { data: _moviesResult } = useSWR(apiKey, requester, {
    initialData: moviesResult || {}
  });
  const { results: popularMovies = [], total_pages: totalPage } = _moviesResult;
  return (
    <Layout>
      <section className="centered">
        <h3>Discover New Movies</h3>
        <DiscoverFilter />
        <MovieList movies={popularMovies} />
        <Pagination totalPage={totalPage} />
      </section>
    </Layout>
  );
};

Discover.getInitialProps = async ctx => {
  const { query } = ctx;
  const key = makeKey({
    urlKey: 'discover.GET_DISCOVER_MOVIES',
    params: query
  });
  const moviesResult = await requester(...key);

  return { moviesResult };
};

export default Discover;
