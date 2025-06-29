import React from 'react'
import './menus.scss'
import { Link } from 'react-router-dom'

const Menus = () => {

    const menuItems = [
        { name: 'Dashboard', path: '/admin/' },
        { name: 'Daily Darshan', path: '/admin/daily-darshan' },
        { name: 'Users', path: '/admin/' },
        { name: 'Puja Services', path: '/admin/' },
        { name: 'Orders', path: '/admin/' },
        { name: 'Photos', path: '/admin/' },
        { name: 'Settings', path: '/admin/' },
    ]

    return (
        <div className='admin-menus'>
            <ul className='admin-menus-list'>
                {menuItems.map((item,index)=>(
                    <li><Link className='link'  to={item.path} >{item.name}</Link></li>
                ))}
               
            </ul>
            <ul className='admin-menus-list'>
                
                <li><button className='logout-btn'>Logout</button></li>
            </ul>
        </div>
    )
}

export default Menus