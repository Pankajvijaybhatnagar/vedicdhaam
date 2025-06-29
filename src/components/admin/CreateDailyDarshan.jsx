import React from 'react'
import './CreateDailyDarshan.scss'

const CreateDailyDarshan = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted");
    }
    return (
        <div>
            <form className='video-form' action="" method="post">
                <div className='left'>

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" required></textarea>
                    </div>
                    <button type="submit" >Create </button>
                </div>
                <div className='right'>
                    <div className="form-group">
                        <label htmlFor="video">Video</label>
                        <input type="file" name="video" id="video" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateDailyDarshan