import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import styles from './VideoGallery.module.css';
import conf from '../../conf/config';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // assume initially we can load more

  const getVideoPost = async (pageNo = 1) => {
    console.log(`Fetching page ${pageNo} of video posts from API...`);
    setLoading(true);
    try {
      const url = `${conf.apiBaseUrl}/api/v1/video-posts?page=${pageNo}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const fetchedVideos = data.data.videoPosts || [];

      setVideos((prev) => [...prev, ...fetchedVideos]);

      // If fewer videos than expected, stop fetching
      if (fetchedVideos.length < 10) {
        setHasMore(false);
      }

      setPage((prev) => prev + 1);
    } catch (error) {
      console.error('Error fetching video posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideoPost(); // fetch first page on mount
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>

      {loading && <p className={styles.loading}>Loading...</p>}

      {!loading && hasMore && (
        <button className={styles.loadMoreBtn} onClick={() => getVideoPost(page)}>
          Show More
        </button>
      )}
    </div>
  );
};

export default VideoGallery;
