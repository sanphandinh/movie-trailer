import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';

export const DEFAULT_RENDER_PAGINATION = _ref => (
  <div ref={_ref} className="swiper-pagination"></div>
);

export const DEFAULT_RENDER_SCROLLBAR = _ref => (
  <div ref={_ref} className="swiper-scrollbar"></div>
);

export const DEFAULT_RENDER_NEXT_NAVIGATION = _ref => (
  <div ref={_ref} className="swiper-button-next"></div>
);

export const DEFAULT_RENDER_PREV_NAVIGATION = _ref => (
  <div ref={_ref} className="swiper-button-prev"></div>
);

/**
 * Swiper Component
 * It's parsed from SwiperJS libary.
 * You can find document at here: https://swiperjs.com/
 * @param {Function} getSwiperInstance - The function to get swiper instance. getSwiperInstance is run after component did mount
 * @param {Function} renderSlides - Render function for render slide. Please use one div wrapper with class swiper-slide. Example: <div className="swiper-slide"></div>
 * @param {Object} pagination - This is pagination option as document of swiperjs
 * @param {Object} scrollbar - Option object as document scrollbar of swiperjs
 * @param {Object} navigation - Option object as document navigation of swiperjs
 * @param {Function} renderPagination - render function of pagination. Example: (ref) => <div ref={ref}>{...content}</div>
 * @param {Function} renderScrollbar - render function of scrollbar. Example: (ref) => <div ref={ref}>{...content}</div>
 * @param {Function} renderPrevNavigation - render function of prev navigation. Example: (ref) => <div ref={ref}>{...content}</div>
 * @param {Function} renderNextNavigation - render function of next navigation. Example: (ref) => <div ref={ref}>{...content}</div>
 * @param {any} children
 */

const SwiperReact = ({
  getSwiperInstance,
  renderSlides,
  pagination,
  scrollbar,
  navigation,
  renderPagination,
  renderScrollbar,
  renderPrevNavigation,
  renderNextNavigation,
  children,
  ...rest
}) => {
  const _ref = useRef(null); //for swiper-container element instance
  const _paginationRef = useRef(null); //for swiper-pagination element instance
  const _scrollbarRef = useRef(null); //for swiper-scrollbar element instance
  const _navigationNextRef = useRef(null); // for swiper next navigation element instance
  const _navigationPrevRef = useRef(null); // for swiper prev navigation element instance
  const _swiperRef = useRef(null); // for swiper instance (from swiperjs)

  //initialize swiperJS instance
  // It only run only once after component did mount
  useEffect(() => {
    if (_ref.current) {
      const option = { ...rest };
      if (renderPagination) {
        option.pagination = { el: _paginationRef.current, ...pagination };
      }
      if (renderScrollbar) {
        option.scrollbar = { el: _scrollbarRef.current, ...scrollbar };
      }
      if (renderPrevNavigation || renderNextNavigation) {
        if (renderNextNavigation) {
          option.navigation = { nextEl: _navigationNextRef.current };
        }
        if (renderPrevNavigation) {
          option.navigation = {
            ...option.navigation,
            prevEl: _navigationPrevRef.current
          };
        }
        option.navigation = { ...option.navigation, ...navigation };
      }
      const _swiper = new Swiper(_ref.current, option);
      _swiperRef.current = _swiper;
      if (getSwiperInstance) {
        getSwiperInstance(_swiper);
      }
    }
  }, []);

  //Update swiperjs instance when component did updated
  useEffect(() => {
    if (_swiperRef.current) {
      _swiperRef.current.update();
    }
  });

  return (
    <div ref={_ref} className="swiper-container">
      <div className="swiper-wrapper">{renderSlides(_swiperRef?.current)}</div>
      {/* <!-- If we need pagination --> */}
      {renderPagination && renderPagination(_paginationRef)}

      {/* <!-- If we need navigation buttons --> */}
      {renderPrevNavigation && renderPrevNavigation(_navigationPrevRef)}
      {renderNextNavigation && renderNextNavigation(_navigationNextRef)}

      {/* <!-- If we need scrollbar --> */}
      {renderScrollbar && renderScrollbar(_scrollbarRef)}
      {children}
    </div>
  );
};

SwiperReact.defaultProps = {
  pagination: {},
  navigation: {},
  scrollbar: {}
};

export default SwiperReact;
