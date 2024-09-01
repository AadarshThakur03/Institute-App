import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    // State to manage visibility of submenu
    const [showSubMenu, setShowSubMenu] = useState(false);

    // Toggle function to show/hide submenu
    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    return (
        <div className="sidebar">
            <div className="logo">COREUI</div>
            <ul className="sidebar-menu">
                <li className="menu-item">
                    <i className="fas fa-tachometer-alt sidebar-icon"></i>
                    <span className="menu-text">Dashboard</span>
                </li>
                <li className="menu-item">
                    <i className="fas fa-palette sidebar-icon"></i>
                    <span className="menu-text">Colors</span>
                </li>
                <li className="menu-item">
                    <i className="fas fa-font sidebar-icon"></i>
                    <span className="menu-text">Typography</span>
                </li>
                <li className="menu-item collapsible-menu" onClick={toggleSubMenu}>
                    <i className="fas fa-wrench sidebar-icon"></i>
                    <span className="menu-text">Components</span>
                    <i className={`fas ${showSubMenu ? 'fa-chevron-up' : 'fa-chevron-down'} toggle-icon`}></i>
                </li>
                {showSubMenu && (
                    <ul className="submenu">
                        <li className="submenu-item">Base</li>
                        <li className="submenu-item">Buttons</li>
                        <li className="submenu-item">Charts</li>
                        <li className="submenu-item">Forms</li>
                        <li className="submenu-item">Icons</li>
                        <li className="submenu-item">Notifications</li>
                        <li className="submenu-item">Widgets</li>
                    </ul>
                )}
                <li className="menu-item">
                    <i className="fas fa-bell sidebar-icon"></i>
                    <span className="menu-text">Notifications</span>
                </li>
                <li className="menu-item">
                    <i className="fas fa-th sidebar-icon"></i>
                    <span className="menu-text">Widgets</span>
                </li>
            </ul>
            <div className="sidebar-footer">
                <img src="path_to_profile_image.jpg" alt="Profile" />
                <span>Jane Doe</span>
            </div>
        </div>
    );
};

export default Sidebar;
