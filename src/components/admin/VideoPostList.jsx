import React, { useState } from 'react';
import './VideoPostDashboard.scss';

const VideoPostList = ({ videoPosts }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    const openPopup = (post) => setSelectedPost(post);
    const closePopup = () => setSelectedPost(null);

    return (
        <div className="video-post-dashboard">

            <div className="video-grid">
                {videoPosts.map((post) => (
                    <div key={post._id} className="video-card">
                        <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="thumbnail"
                            onClick={() => openPopup(post)}
                        />
                        <div>
                            <h4>{post.title}</h4>
                            <p>{post.description}</p>
                            <small>Uploaded on: {new Date(post.createdAt).toLocaleDateString()} | Duration: {post.duration}s | views:{post.views} | owner:{post.owner.fullName}</small>
                            
                        </div>
                    </div>
                ))}
            </div>

            {selectedPost && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedPost.title}</h3>
                        <video src={selectedPost.videoLink} controls autoPlay className="video-player" />
                        <p>{selectedPost.description}</p>
                        <p><strong>Duration:</strong> {selectedPost.duration}s</p>
                        <p><strong>Uploaded:</strong> {new Date(selectedPost.createdAt).toLocaleString()}</p>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPostList;
