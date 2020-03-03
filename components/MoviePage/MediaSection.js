import { useState } from 'react';
import Videos from './videos';

const MEDIA_TYPE = {
  MOST_POPULAR: 'most_popular',
  VIDEOS: 'videos',
  BACKDROPS: 'backdrops',
  POSTERS: 'poster'
};

const MediaSection = ({ videos = [], posters = [], backdrops = [] }) => {
  const videoMostPopular = videos[0];
  const [select, setSelect] = useState(MEDIA_TYPE.MOST_POPULAR);
  return (
    <section className="links">
      <h3>Media</h3>
      <ul className="media-tab">
        <li onClick={() => setSelect(MEDIA_TYPE.MOST_POPULAR)}>Most Popular</li>
        <li onClick={() => setSelect(MEDIA_TYPE.VIDEOS)}>Videos</li>
        <li onClick={() => setSelect(MEDIA_TYPE.BACKDROPS)}>Backdrops</li>
        <li onClick={() => setSelect(MEDIA_TYPE.POSTERS)}>Posters</li>
      </ul>
      <div className={`dlinks content`}>
        <div
          className={`display--none${
            select === MEDIA_TYPE.MOST_POPULAR ? ' display--block' : ''
          }`}
        >
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoMostPopular?.key}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className={`display--none${
            select === MEDIA_TYPE.VIDEOS ? ' display--block' : ''
          }`}
        >
          <Videos videos={videos} />
        </div>
        <div
          className={`display--none${
            select === MEDIA_TYPE.BACKDROPS ? ' display--block' : ''
          }`}
        >
          backdrop selected
        </div>
        <div
          className={`display--none${
            select === MEDIA_TYPE.POSTERS ? ' display--block' : ''
          }`}
        >
          {' '}
          poster selected
        </div>
      </div>
      <style jsx>{`
        .media-tab {
          float: right;
          color: #fff;
        }
        .media-tab li {
          display: inline;
          cursor: pointer;
          margin: 0px 10px 5px 0px;
        }
        .content {
          width: calc(100% - 20px);
        }
        .display--none {
          display: none;
        }
        .display--block {
          display: block;
        }
      `}</style>
    </section>
  );
};

export default MediaSection;
