import React from 'react';
import Layout from '../components/layout';
import HomeSlider from '../components/home_slider';
import FlatSliderMovie from '../components/flat_slider_movie';
import makeKey from '../fetch/makeKey';
import requester from '../fetch/requester';
import useSWR from 'swr';

const nowPlayingApiKey = makeKey({ urlKey: 'movie.GET_MOVIE_NOW_PLAYING' });
const popularApiKey = makeKey({ urlKey: 'movie.GET_MOVIE_POPULAR' });
const topRatedApiKey = makeKey({ urlKey: 'movie.GET_MOVIE_TOP_RATED' });

export default function Index({ topRatedInit, popularInit, nowPlayingInit }) {
  const { data: topRated } = useSWR(topRatedApiKey, requester, {
    initialData: topRatedInit || {}
  });
  const { data: popular } = useSWR(popularApiKey, requester, {
    initialData: popularInit || {}
  });
  const { data: nowPlaying } = useSWR(nowPlayingApiKey, requester, {
    initialData: nowPlayingInit || {}
  });
  const { results: topRatedList = [] } = topRated;
  const { results: popularList = [] } = popular;
  const { results: nowPlayingList = [] } = nowPlaying;
  const homeSlider = nowPlayingList.slice(0, 5);
  return (
    <Layout homeSlider={<HomeSlider slides={homeSlider} />}>
      <main className="center">
        <section className="panel">
          <h2>Now Playing</h2>
          <div className="recentslider">
            <FlatSliderMovie movies={nowPlayingList} viewOtherUrl="/other" />
          </div>
        </section>

        <section className="panel">
          <h2>Popular</h2>
          <div className="mostslider">
            <FlatSliderMovie movies={popularList} viewOtherUrl="/other" />
          </div>
        </section>

        <section className="panel">
          <h2>Top Rated</h2>
          <div className="topslider">
            <FlatSliderMovie movies={topRatedList} viewOtherUrl="/other" />
          </div>
        </section>
      </main>
    </Layout>
  );
}

Index.getInitialProps = async () => {
  const fetchTopRatedMovies = requester(...topRatedApiKey);
  const fetchPopularMovies = requester(...popularApiKey);
  const fetchNowPlayingMoview = requester(...nowPlayingApiKey);
  const [topRated, popular, nowPlaying] = await Promise.all([
    fetchTopRatedMovies,
    fetchPopularMovies,
    fetchNowPlayingMoview
  ]);
  return {
    topRatedInit: topRated || {},
    popularInit: popular || {},
    nowPlayingInit: nowPlaying || {}
  };
};
