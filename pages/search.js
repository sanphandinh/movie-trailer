import Layout from '../components/layout';
import makeKey from '../fetch/makeKey';
import requester from '../fetch/requester';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import MovieList from '../components/movies_list';
import Pagination from '../components/pagination';

const Search = ({ moviesResult }) => {
  const { query } = useRouter();
  const { id, page = 1 } = query;
  const apiKey = makeKey({
    urlKey: 'keyword.GET_MOVIES_OF_KEYWORD',
    params: { page },
    pathParams: { keyword_id: id }
  });
  const { data: _moviesResult } = useSWR(apiKey, requester, {
    initialData: moviesResult || {}
  });
  const { results: popularMovies = [], total_pages: totalPage } = _moviesResult;
  return (
    <Layout>
      <section className="centered">
        <h3>Result: </h3>
        <MovieList movies={popularMovies} />
        <Pagination totalPage={totalPage} />
      </section>
    </Layout>
  );
};

Search.getInitialProps = async ctx => {
  const { query } = ctx;
  const { id, page = 1 } = query;
  const key = makeKey({
    urlKey: 'keyword.GET_MOVIES_OF_KEYWORD',
    params: { page },
    pathParams: { keyword_id: id }
  });
  const moviesResult = await requester(...key);

  return { moviesResult };
};

export default Search;
