import { useState } from 'react';
import Videos from './videos';
import classes from '../../helpers/classes.helper';
import Backdrops from './backdrops';
import Posters from './posters';

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
        <li
          className={classes({ active: MEDIA_TYPE.MOST_POPULAR === select })}
          onClick={() => setSelect(MEDIA_TYPE.MOST_POPULAR)}
        >
          Most Popular
        </li>
        <li
          className={classes({ active: MEDIA_TYPE.VIDEOS === select })}
          onClick={() => setSelect(MEDIA_TYPE.VIDEOS)}
        >
          Videos
        </li>
        <li
          className={classes({ active: MEDIA_TYPE.BACKDROPS === select })}
          onClick={() => setSelect(MEDIA_TYPE.BACKDROPS)}
        >
          Backdrops
        </li>
        <li
          className={classes({ active: MEDIA_TYPE.POSTERS === select })}
          onClick={() => setSelect(MEDIA_TYPE.POSTERS)}
        >
          Posters
        </li>
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
          <Backdrops backdrops={backdrops} />
        </div>
        <div
          className={`display--none${
            select === MEDIA_TYPE.POSTERS ? ' display--block' : ''
          }`}
        >
          <Posters posters={posters} />
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
        .media-tab .active {
          color: blue;
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
