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

const TEST_LIST = [
  {
    id: 1,
    imgUrl: 'images/9.jpg',
    title: 'Space Betwen Us'
  },
  {
    id: 2,
    imgUrl: 'images/2.jpg',
    title: 'John Wick'
  },
  {
    id: 3,
    imgUrl: 'images/3.jpg',
    title: 'Spider-Man Homecoming'
  },
  {
    id: 4,
    imgUrl: 'images/4.jpg',
    title: 'Beauty and the Beast'
  },
  {
    id: 5,
    imgUrl: 'images/5.jpg',
    title: 'Pirates of the Caribbean: Dead Men Tell No Tales'
  },
  {
    id: 6,
    imgUrl: 'images/6.jpg',
    title: 'Fifty Shades Darker'
  },
  {
    id: 7,
    imgUrl: 'images/7.jpg',
    title: 'Transformers: The Last Knight'
  },
  {
    id: 8,
    imgUrl: 'images/8.jpg',
    title: 'xXx: Return of Xander Cage'
  },
  {
    id: 9,
    imgUrl: 'images/9.jpg',
    title: 'Space Betwen Us'
  },
  {
    id: 10,
    imgUrl: 'images/2.jpg',
    title: 'John Wick'
  },
  {
    id: 11,
    imgUrl: 'images/3.jpg',
    title: 'Spider-Man Homecoming'
  },
  {
    id: 12,
    imgUrl: 'images/4.jpg',
    title: 'Beauty and the Beast'
  },
  {
    id: 13,
    imgUrl: 'images/5.jpg',
    title: 'Pirates of the Caribbean: Dead Men Tell No Tales'
  },
  {
    id: 14,
    imgUrl: 'images/6.jpg',
    title: 'Fifty Shades Darker'
  },
  {
    id: 15,
    imgUrl: 'images/7.jpg',
    title: 'Transformers: The Last Knight'
  },
  {
    id: 16,
    imgUrl: 'images/8.jpg',
    title: 'xXx: Return of Xander Cage'
  }
];

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
