import React from 'react';
import Layout from '../components/layout';
import HomeSlider from '../components/home_slider';
import FlatSliderMovie from '../components/flat_slider_movie';

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

export default function Index() {
  return (
    <Layout homeSlider={<HomeSlider />}>
      <main className="center">
        <section className="panel">
          <h2>Recently Added</h2>
          <div className="recentslider">
            <FlatSliderMovie movies={TEST_LIST} viewOtherUrl="/other" />
          </div>
        </section>

        <section className="panel">
          <h2>Most Watched</h2>
          <div className="mostslider">
            <FlatSliderMovie movies={TEST_LIST} viewOtherUrl="/other" />
          </div>
        </section>

        <section className="panel">
          <h2>Top Rated</h2>
          <div className="topslider">
            <FlatSliderMovie movies={TEST_LIST} viewOtherUrl="/other" />
          </div>
        </section>
      </main>
    </Layout>
  );
}
