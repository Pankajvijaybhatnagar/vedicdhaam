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
                        <textarea rows={12} id="description" name="description" required></textarea>
                    </div>
                    <button type="submit" >Create </button>
                </div>
                <div className='right'>
                    <div className="form-group">
                        <label className='videoInput' htmlFor="video">
                            <span>Video</span>
                            <input required type="file" name="video" id="video" />
                            <span style={{fontSize:10}}>click to change</span>
                        </label>
                    </div>
                    <div className="form-group ">
                        <label className='thumbnial' htmlFor="thumbnail">Thumbnail
                            <input required hidden type="file" name="thumbnail" id="thumbnail" />
                            <span style={{fontSize:10}}>click to change</span>
                        </label>
                    </div>
                    <div className="form-group " style={{flexDirection:'row'}}>
                        <input type="checkbox" name="ispublished" id="ispublished" />
                        <label htmlFor='ispublished'>Publish Now</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateDailyDarshan