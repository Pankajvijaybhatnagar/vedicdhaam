import React from 'react';
import styles from './VideoCard.module.css';

const VideoCard = ({ video }) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnailWrapper}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className={styles.thumbnail}
        />
        {/* Play button */}
        <div className={styles.playOverlay}>
          <div className={styles.playIcon}>
            ▶
          </div>
        </div>
        {/* Duration */}
        <span className={styles.duration}>{formatDuration(video.duration)}</span>
      </div>

      <div className={styles.details}>
        <h2 className={styles.title}>{video.title}</h2>
        <p className={styles.views}>{video.views} views</p>
      </div>
    </div>
  );
};

// Helper to format seconds to mm:ss
const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default VideoCard;
