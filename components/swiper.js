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
  const _ref = useRef(null);
  const _paginationRef = useRef(null);
  const _scrollbarRef = useRef(null);
  const _navigationNextRef = useRef(null);
  const _navigationPrevRef = useRef(null);
  const _swiperRef = useRef(null);
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
      // console.warn('option: ', option);
      const _swiper = new Swiper(_ref.current, option);
      _swiperRef.current = _swiper;
      if (getSwiperInstance) {
        getSwiperInstance(_swiper);
      }
    }
  }, []);
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
  useDefaultNavigation: false,
  useDefaultPagination: false,
  useDefaultScrollbar: false,
  pagination: {},
  navigation: {},
  scrollbar: {}
};

export default SwiperReact;
