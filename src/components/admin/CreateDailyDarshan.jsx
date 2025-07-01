import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreateDailyDarshan.scss';
import conf from "../../conf/config.js"

const CreateDailyDarshan = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [isPublished, setIsPublished] = useState(false);
    const [errors, setErrors] = useState({});
    const [videoPreview, setVideoPreview] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileSize = file.size / (1024 * 1024);
            if (fileSize > 10) {
                setErrors({ ...errors, video: 'Video size exceeds 10MB' });
                setVideoFile(null);
                setVideoPreview(null);
            } else {
                setVideoFile(file);
                setVideoPreview(URL.createObjectURL(file));
                setErrors({ ...errors, video: '' });
            }
        }
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setThumbnailFile(file);
            setThumbnailPreview(URL.createObjectURL(file));
            setErrors({ ...errors, thumbnail: '' });
        } else {
            setErrors({ ...errors, thumbnail: 'Invalid image file' });
            setThumbnailFile(null);
            setThumbnailPreview(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!title.trim()) newErrors.title = 'Title is required';
        if (!description.trim()) newErrors.description = 'Description is required';
        if (!videoFile) newErrors.video = 'Video file is required';
        if (!thumbnailFile) newErrors.thumbnail = 'Thumbnail is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('video', videoFile);
        formData.append('thumbnail', thumbnailFile);
        formData.append('isPublished', isPublished);

        // Submit the formData to backend here

        try {
            setIsLoading(true)
            const url = `${conf.apiBaseUrl}/api/v1/video-posts/create`
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
                headers: {
                    authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
                },
            })
            response.then(data => {
                console.log('Response from server:', data);
                if (data.success) {
                    console.log('Form submitted successfully:', data);
                    // Reset form fields
                    setTitle('');
                    setDescription('');
                    setVideoFile(null);
                    setThumbnailFile(null);
                    setIsPublished(false);
                    setVideoPreview(null);
                    setThumbnailPreview(null);
                    setErrors({});
                    setIsLoading(false)

                } else {
                    console.error('Error submitting form:', data.message);
                    setErrors({ ...errors, submit: data.message });
                    setIsLoading(false)

                }
            })
            setIsLoading(false)
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({ ...errors, submit: 'Failed to submit the form. Please try again.' });

        }
    };

    return (
        <div className="create-daily-darshan">
            <form className="video-form" onSubmit={handleSubmit}>
                <div className="left">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        {errors.title && <span className="error">{errors.title}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <ReactQuill
                            theme="snow"
                            value={description}
                            onChange={setDescription}
                            style={{ color: 'black', }}
                            className="my-quill"
                        />
                        {errors.description && <span className="error">{errors.description}</span>}
                    </div>

                    {
                        isLoading?(
                            <img style={{height:130,width:130}} src='/loading.gif'></img>
                        ):
                    
                        (<button disabled={isLoading} type="submit">{isLoading ? "Please wait ..." : "Create"}</button>)
                    }
                </div>

                <div className="right">
                    <div
                        className="form-group videoInput"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                            e.preventDefault();
                            const file = e.dataTransfer.files[0];
                            handleVideoChange({ target: { files: [file] } });
                        }}
                    >
                        <label htmlFor="video">
                            <span>Video</span>
                            <input type="file" id="video" accept=".mp4" onChange={handleVideoChange} hidden />
                            <span style={{ fontSize: 12 }}>click or drag to upload</span>
                        </label>
                        {errors.video && <span className="error">{errors.video}</span>}
                        {videoPreview && <video src={videoPreview} controls width="100%" height="100%" />}
                    </div>

                    <div
                        className="form-group thumbnial"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                            e.preventDefault();
                            const file = e.dataTransfer.files[0];
                            handleThumbnailChange({ target: { files: [file] } });
                        }}
                    >
                        <label htmlFor="thumbnail">
                            <span >Thumbnail</span>
                            <input type="file" id="thumbnail" accept=".jpg, .jpeg, .png" onChange={handleThumbnailChange} hidden />
                            <span style={{ fontSize: 12 }}>click or drag to upload</span>
                        </label>
                        {errors.thumbnail && <span className="error">{errors.thumbnail}</span>}
                        {thumbnailPreview && <img src={thumbnailPreview} alt="Thumbnail preview" />}
                    </div>

                    <div className="form-group checkbox-group">
                        <input
                            type="checkbox"
                            id="ispublished"
                            checked={isPublished}
                            onChange={(e) => setIsPublished(e.target.checked)}
                        />
                        <label htmlFor="ispublished">Publish Now</label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateDailyDarshan;
