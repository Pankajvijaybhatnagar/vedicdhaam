import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import styles from './VideoGallery.module.css';
import conf from '../../conf/config';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  const getVideoPost = async () =>{
    console.log("Fetching video posts from API...");
    try {
        const response = await fetch(`${conf.apiBaseUrl}/api/v1/video-posts`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Fetched video posts:", data);
        // setVideos(data);
    } catch (error) {
      console.error("Error fetching video posts:", error);
        
    }
  }

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      const mockData = [
        {
          title: 'Learn Vedic Chanting',
          thumbnail: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
          duration: 215,
          views: 13456,
        },
        {
          title: 'Introduction to Bhagavad Gita',
          thumbnail: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
          duration: 190,
          views: 10234,
        },
        {
          title: 'Meditation Techniques',
          thumbnail: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
          duration: 245,
          views: 8890,
        },
        // Add more mock video items
      ];

      setVideos(mockData);
    };

    fetchData();
    getVideoPost();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Video Library</h1>
      <div className={styles.grid}>
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
