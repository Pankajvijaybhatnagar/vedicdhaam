import React, { useState, useRef } from 'react';
import styles from './VideoCard.module.css';

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className={styles.card}>
      <div className={styles.thumbnailWrapper}>
        {!isPlaying ? (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              className={styles.thumbnail}
            />
            <div className={styles.playOverlay} onClick={handlePlayClick}>
              <div className={styles.playIcon}>▶</div>
            </div>
            <span className={styles.duration}>
              {formatDuration(video.duration)}
            </span>
          </>
        ) : (
          <video
            ref={videoRef}
            className={styles.videoPlayer}
            src={video.videoLink}
            controls
          />
        )}
      </div>

      <div className={styles.details}>
        <h2 className={styles.title}>{video.title}</h2>
        <p className={styles.views}>{video.views} views</p>
      </div>
    </div>
  );
};

// Format duration like 0:13
const formatDuration = (seconds) => {
  const mins = Math.floor(seconds);
  const secs = Math.round((seconds - mins) * 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default VideoCard;
