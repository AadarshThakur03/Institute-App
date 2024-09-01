import React from 'react';

// import { Outlet } from 'react-router-dom';
import './Dashboard.css';
import Home from '../Home/Home';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Topbar />
      <div className="dashboard-content">
        <Sidebar />
        {/* <div className="main-content">
          <Home />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
