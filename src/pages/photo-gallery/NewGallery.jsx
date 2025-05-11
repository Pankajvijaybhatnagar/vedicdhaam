import React from 'react';

const NewGallery = () => {
    const media = [
        { type: "image", src: "/pics/1.jpg", alt: "Image 1" },
        { type: "video", src: "/pics/2.mp4", alt: "Image 2" },
        { type: "image", src: "/pics/3.jpg", alt: "Image 3" },
        { type: "image", src: "/pics/4.jpg", alt: "Image 4" },
        { type: "image", src: "/pics/5.jpg", alt: "Image 5" },
        { type: "image", src: "/pics/16.jpg", alt: "Image 16" },
    ];

    return (
        <div>
            <h1>New Gallery</h1>
            <p>This is the new photo gallery page.</p>
            <div className="gallery" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {media.map((item, index) => (
                    item.type === "image" ? (
                        <img
                            key={index}
                            src={item.src}
                            alt={item.alt}
                            style={{ width: "calc(33.33% - 10px)", height: "auto", objectFit: "cover" }}
                        />
                    ) : (
                        <video
                            key={index}
                            src={item.src}
                            controls
                            style={{ width: "calc(33.33% - 10px)", height: "auto", objectFit: "cover" }}
                        >
                            Your browser does not support the video tag.
                        </video>
                    )
                ))}
            </div>
        </div>
    );
};

export default NewGallery;