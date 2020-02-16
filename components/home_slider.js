const HomeSlider = () => (
  <div className="homeslider">
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="/images/slider/poster2.jpg" />
          <div className="caption">
            <div className="captioninside">
              <h3>Movie Title</h3>
              <p>Lorem ipsum dolor siamet</p>
              <a href="single.html" className="playbutton">
                Play
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <img src="/images/slider/poster1.jpg" />
          <div className="caption">
            <div className="captioninside">
              <h3>Movie Title 2</h3>
              <p>Lorem ipsum dolor siamet</p>
              <a href="single.html" className="playbutton">
                Play
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <img src="/images/slider/poster2.jpg" />
          <div className="caption">
            <div className="captioninside">
              <h3>Movie Title 3</h3>
              <p>Lorem ipsum dolor siamet</p>
              <a href="single.html" className="playbutton">
                Play
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Add Pagination --> */}
      <div className="swiper-pagination"></div>
    </div>
  </div>
);

export default HomeSlider;
