import React, { useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import conf from "../../conf/config"
import VideoPostList from '../../components/admin/VideoPostList';
import { Link } from 'react-router-dom';

const DailyDarshanCreate = () => {
  const [loading, setLoading] = React.useState(true);



  return (
    <div>
      <AdminLayout>
        <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
          <div>Creating New Post</div>
          <Link to={'/admin/daily-darshan'}>View All</Link>
        </div>

      </AdminLayout>
    </div>
  )
}

export default DailyDarshanCreate