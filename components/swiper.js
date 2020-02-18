import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';

const SwiperReact = ({
  getSwiperInstance,
  renderSlides,
  pagination,
  scrollbar,
  navigation,
  useDefaultPagination,
  useDefaultScrollbar,
  useDefaultNavigation,
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
      if (pagination) {
        if (useDefaultPagination && _paginationRef.current) {
          option.pagination = { el: _paginationRef.current };
        }
        option.pagination = { ...option.pagination, ...pagination };
      }
      if (scrollbar) {
        if (useDefaultScrollbar && _scrollbarRef.current) {
          option.scrollbar = { el: _scrollbarRef.current };
        }
        option.scrollbar = { ...option.scrollbar, ...scrollbar };
      }
      if (navigation) {
        if (useDefaultNavigation && _navigationNextRef.current) {
          option.scrollbar = { nextEl: _navigationNextRef.current };
        }
        if (useDefaultNavigation && _navigationPrevRef.current) {
          option.scrollbar = { prevEl: _navigationPrevRef.current };
        }
        option.navigation = { ...option.navigation, ...navigation };
      }
      console.warn('option: ', option);
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
      {useDefaultPagination && (
        <div ref={_paginationRef} className="swiper-pagination"></div>
      )}

      {/* <!-- If we need navigation buttons --> */}
      {useDefaultNavigation && (
        <>
          <div ref={_navigationPrevRef} className="swiper-button-prev"></div>
          <div ref={_navigationNextRef} className="swiper-button-next"></div>
        </>
      )}

      {/* <!-- If we need scrollbar --> */}
      {useDefaultScrollbar && (
        <div ref={_scrollbarRef} className="swiper-scrollbar"></div>
      )}
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
