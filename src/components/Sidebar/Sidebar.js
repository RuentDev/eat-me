import React from 'react'
import './sidebar.css'
import { SidebarData } from './SidebarData'
import SideBarMenu from './SideBarMenu'
const Sidebar = () => {


    const toggleSideBar = () => {
        const sidebar = document.getElementById('sideBar')
        sidebar.classList.toggle('is-active')
    }

    function renderSideBarHumbergerIcon() {
        return(
            <div className='sidebar-hamburger' onClick={toggleSideBar}>
                <span className="hamburger-line active"></span>
                <span className="hamburger-line active"></span>
                <span className="hamburger-line active"></span>
            </div>
        )
    }

    return (
        <div className='sidebar' id='sideBar'>
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    <img src="images/logo_02.png" alt="Logo" />
                </div>
                {renderSideBarHumbergerIcon()}

                <SideBarMenu data={SidebarData}/>
            </div>
        </div>
    )
}

export default Sidebar
