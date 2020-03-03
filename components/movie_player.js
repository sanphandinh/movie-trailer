import React from 'react';
import ClientOnlyModal from './clien_only_modal';

const MoviePlayer = ({ youtubeKey, close }) => {
  return (
    <ClientOnlyModal selector="#movie-player-modal">
      <div
        className="backdrop"
        onClick={e => {
          close();
          e.stopPropagation();
        }}
      >
        <div className="modal">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeKey}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <style jsx>{`
        :global(body) {
          overflow: hidden;
        }
        .backdrop {
          position: fixed;
          background-color: rgba(0, 0, 0, 0.7);
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal {
          width: 80%;
          height: 90%;
          position: relative;
        }
      `}</style>
    </ClientOnlyModal>
  );
};

export default MoviePlayer;
