import React from 'react';
import Menus from './Menus';
import './adminLayout.scss';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-container">
      <aside className="admin-aside">
        <Menus />
      </aside>

      <main className="admin-main">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
