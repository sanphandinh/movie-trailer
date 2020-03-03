import classes from '../helpers/classes.helper';
import React from 'react';
import MoviePlayer from './movie_player';

class MovieCard extends React.Component {
  state = {
    show: false
  };

  render() {
    const { youtubeId, className } = this.props;
    const { show } = this.state;
    const thumbnailImg = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
    return (
      <div
        onClick={e => {
          e.preventDefault();
          this.setState({ show: true });
        }}
        className={classes('movie-card-wrapper', className)}
      >
        <div className="play-background">
          <div className="play-button">
            <div className="triangle"></div>
          </div>
        </div>
        {show && (
          <MoviePlayer
            youtubeKey={youtubeId}
            close={() => {
              this.setState(prevState => {
                return {
                  ...prevState,
                  show: !prevState.show
                };
              });
            }}
          />
        )}
        <style jsx>
          {`
          .movie-card-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 300px;
            background-image: url(${thumbnailImg});
            background-repeat: no-repeat;
            background-size: cover;
            cursor: pointer; 
          }
          .play-background {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            background: rgba(0,0,0,0.7);
            border-radius: 50%;
          }
          .play-button {
            width: 40px;
            height: 40px;
            border: 5px solid #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .triangle{
            content: '',
            width: 0;
            height: 0;
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            border-left: 15px solid #fff;
            transform: translateX(10%); 
          }
          .movie-card-wrapper:hover .play-button
          {
            border-color: #00d573;
          }
          .movie-card-wrapper:hover .triangle {
            border-left-color: #00d573;
          }
        `}
        </style>
      </div>
    );
  }
}

export default MovieCard;
