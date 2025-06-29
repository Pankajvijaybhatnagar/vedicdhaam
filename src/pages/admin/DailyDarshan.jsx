import React, { useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import conf from "../../conf/config"
import VideoPostList from '../../components/admin/VideoPostList';
import { Link } from 'react-router-dom';

const DailyDarshan = () => {
  const [loading, setLoading] = React.useState(true);
  const [videoPosts, setVideoPosts] = React.useState([]);


  const getVideoPosts = async () => {
    try {
      const url = `${conf.apiBaseUrl}/api/v1/video-posts/all`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Video posts fetched successfully:", data);
      setVideoPosts(data.data.videoPosts)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching video posts:", error);

    }
    setLoading(false);
  }


  useEffect(() => {
    getVideoPosts();
  }, [])
  return (
    <div>
      <AdminLayout>
        <div style={{marginBottom:10, display:'flex',justifyContent:'space-between'}}>
          <div>Showing x/y</div>
          <Link to={'/admin/daily-darshan/new'}>Add new</Link>
        </div>
        {
          loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
              <img style={{ width: '200px !important' }} src="/loading.gif" alt="" />
            </div>

          ) :
            (

              <VideoPostList videoPosts={videoPosts} />
            )
        }

      </AdminLayout>
    </div>
  )
}

export default DailyDarshan