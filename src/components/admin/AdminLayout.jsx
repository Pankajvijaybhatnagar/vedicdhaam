import React from 'react'

const AdminLayout = ({childrens}) => {
  return (
    <div className='container' style={{marginTop: '100px'}}>
        <header className="admin-header">
            <h1>Admin Dashboard</h1>
        </header>
        <main className="admin-main">
            {childrens}
        </main>
        <footer className="admin-footer">
            <p>&copy; 2023 VedicDhaam Admin</p>
        </footer>
    </div>
  )
}

export default AdminLayout