import React from 'react';
import './Topbar.css';

const Topbar: React.FC = () => {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <i className="fas fa-search topbar-icon"></i>
                <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <div className="topbar-right">
                <i className="fas fa-envelope topbar-icon"></i>
                <i className="fas fa-bell topbar-icon"></i>
                <i className="fas fa-cog topbar-icon"></i>
                <i className="fas fa-user-circle topbar-icon user-icon"></i>
            </div>
        </div>
    );
};

export default Topbar;
