import React from 'react';
import Layout from '../components/layout';
import HomeSlider from '../components/home_slider';

export default function Index() {
  return (
    <Layout homeSlider={<HomeSlider />}>
      <main className="center">
        <section className="panel">
          <h2>Recently Added</h2>
          <div className="recentslider">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/9.jpg" />
                    <h3 className="hometitle">Space Betwen Us</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/2.jpg" />
                    <h3 className="hometitle">John Wick</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/3.jpg" />
                    <h3 className="hometitle">Spider-Man Homecoming</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/4.jpg" />
                    <h3 className="hometitle">Beauty and the Beast</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/5.jpg" />
                    <h3 className="hometitle">
                      Pirates of the Caribbean: Dead Men Tell No Tales
                    </h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/6.jpg" />
                    <h3 className="hometitle">Fifty Shades Darker</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/7.jpg" />
                    <h3 className="hometitle">Transformers: The Last Knight</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/8.jpg" />
                    <h3 className="hometitle">xXx: Return of Xander Cage</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/9.jpg" />
                    <h3 className="hometitle">Space Betwen Us</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/2.jpg" />
                    <h3 className="hometitle">John Wick</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/3.jpg" />
                    <h3 className="hometitle">Spider-Man Homecoming</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/4.jpg" />
                    <h3 className="hometitle">Beauty and the Beast</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/5.jpg" />
                    <h3 className="hometitle">
                      Pirates of the Caribbean: Dead Men Tell No Tales
                    </h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/6.jpg" />
                    <h3 className="hometitle">Fifty Shades Darker</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/7.jpg" />
                    <h3 className="hometitle">Transformers: The Last Knight</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/8.jpg" />
                    <h3 className="hometitle">xXx: Return of Xander Cage</h3>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="mostwatched.html">
                    <img src="img/others.png" />
                  </a>
                </div>
              </div>
              <div className="nextdirection recent-next">
                <img src="img/right-arrow.svg" />{' '}
              </div>
              <div className="leftdirection recent-prev">
                <img src="img/left-arrow.svg" />{' '}
              </div>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Most Watched</h2>
          <div className="mostslider">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/9.jpg" />
                    <h3 className="hometitle">Space Betwen Us</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/2.jpg" />
                    <h3 className="hometitle">John Wick</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/3.jpg" />
                    <h3 className="hometitle">Spider-Man Homecoming</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/4.jpg" />
                    <h3 className="hometitle">Beauty and the Beast</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/5.jpg" />
                    <h3 className="hometitle">
                      Pirates of the Caribbean: Dead Men Tell No Tales
                    </h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/6.jpg" />
                    <h3 className="hometitle">Fifty Shades Darker</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/7.jpg" />
                    <h3 className="hometitle">Transformers: The Last Knight</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/8.jpg" />
                    <h3 className="hometitle">xXx: Return of Xander Cage</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/9.jpg" />
                    <h3 className="hometitle">Space Betwen Us</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/2.jpg" />
                    <h3 className="hometitle">John Wick</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/3.jpg" />
                    <h3 className="hometitle">Spider-Man Homecoming</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/4.jpg" />
                    <h3 className="hometitle">Beauty and the Beast</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/5.jpg" />
                    <h3 className="hometitle">
                      Pirates of the Caribbean: Dead Men Tell No Tales
                    </h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/6.jpg" />
                    <h3 className="hometitle">Fifty Shades Darker</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/7.jpg" />
                    <h3 className="hometitle">Transformers: The Last Knight</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/8.jpg" />
                    <h3 className="hometitle">xXx: Return of Xander Cage</h3>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="mostwatched.html">
                    <img src="img/others.png" />
                  </a>
                </div>
              </div>
              <div className="nextdirection most-next">
                <img src="img/right-arrow.svg" />{' '}
              </div>
              <div className="leftdirection most-prev">
                <img src="img/left-arrow.svg" />{' '}
              </div>
              {/* <!-- Add Pagination --> */}
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Top Rated</h2>
          <div className="topslider">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/9.jpg" />
                    <h3 className="hometitle">Space Betwen Us</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/2.jpg" />
                    <h3 className="hometitle">John Wick</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/3.jpg" />
                    <h3 className="hometitle">Spider-Man Homecoming</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/4.jpg" />
                    <h3 className="hometitle">Beauty and the Beast</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/5.jpg" />
                    <h3 className="hometitle">
                      Pirates of the Caribbean: Dead Men Tell No Tales
                    </h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/6.jpg" />
                    <h3 className="hometitle">Fifty Shades Darker</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/7.jpg" />
                    <h3 className="hometitle">Transformers: The Last Knight</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/8.jpg" />
                    <h3 className="hometitle">xXx: Return of Xander Cage</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/9.jpg" />
                    <h3 className="hometitle">Space Betwen Us</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/2.jpg" />
                    <h3 className="hometitle">John Wick</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/3.jpg" />
                    <h3 className="hometitle">Spider-Man Homecoming</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/4.jpg" />
                    <h3 className="hometitle">Beauty and the Beast</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/5.jpg" />
                    <h3 className="hometitle">
                      Pirates of the Caribbean: Dead Men Tell No Tales
                    </h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/6.jpg" />
                    <h3 className="hometitle">Fifty Shades Darker</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/7.jpg" />
                    <h3 className="hometitle">Transformers: The Last Knight</h3>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="single.html">
                    <img src="images/8.jpg" />
                    <h3 className="hometitle">xXx: Return of Xander Cage</h3>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="mostwatched.html">
                    <img src="img/others.png" />
                  </a>
                </div>
              </div>
              <div className="nextdirection top-next">
                <img src="img/right-arrow.svg" />{' '}
              </div>
              <div className="leftdirection top-prev">
                <img src="img/left-arrow.svg" />{' '}
              </div>
              {/* <!-- Add Pagination --> */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
