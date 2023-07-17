import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction, userProfileAction } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';

import profileImg from '../assets/img/profile.jpg';

const AdminDashboard = () => {
  const [ darkMode, setDarkMode ] = useState(false);
  const [ closeSidebar, setCloseSidebar ] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();	
  
  useEffect(() => {
    dispatch(userProfileAction());
  }, []);
  
  //log out 
  const logOut = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
        navigate('/login');
    }, 500)
  }

  return (
    <div className={`visa ${darkMode ? 'dark' : ''}`}>
      <nav className={`${closeSidebar ? 'close' : ''}`}>
        <div className="logo-name">
          <div className="logo-image">
            logo
            {/* <img src="images/logo.png" alt="" /> */}
          </div>

          <span className="logo_name">visabridge</span>
        </div>

        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <a href="#">
                <i className="uil uil-estate"></i>
                <span className="link-name">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-files-landscapes"></i>
                <span className="link-name">Content</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-chart"></i>
                <span className="link-name">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-thumbs-up"></i>
                <span className="link-name">Like</span>
              </a>
            </li>
          </ul>
          <ul className="logout-mode">
            <li onClick={logOut}>
              <Link to="#">
                <i className="uil uil-signout"></i>
                <span className="link-name">Logout</span>
              </Link>
            </li>

            <li className="mode">
              <a href="#">
                <i className="uil uil-moon"></i>
                <span className="link-name">Dark Mode</span>
              </a>

              <div onClick={() => setDarkMode(!darkMode)} className="mode-toggle">
                <span className="switch"></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <section className="dashboard">
        <div className="top">
          <i onClick={() => setCloseSidebar(!closeSidebar)} className="uil uil-bars sidebar-toggle"></i>

          <div className="search-box">
            <i className="uil uil-search"></i>
            <input type="text" placeholder="Search..." />
          </div>

          <div className="top-profile">
            <img src={profileImg} alt="profile" />
          </div>
        </div>
      
        <div className="dash-content">
          <div className="overview">
            <div className="title">
              <i className="uil uil-tachometer-fast-alt"></i>
              <span className="text">Dashboard</span>
            </div>

            <div className="boxes">
              <div className="box box1">
                <i className="uil uil-thumbs-up"></i>
                <span className="text">Total Likes</span>
                <span className="number">50,120</span>
              </div>
              <div className="box box2">
                <i className="uil uil-comments"></i>
                <span className="text">Comments</span>
                <span className="number">20,120</span>
              </div>
              <div className="box box3">
                <i className="uil uil-share"></i>
                <span className="text">Total Share</span>
                <span className="number">10,120</span>
              </div>
            </div>

            <div className="activity">
              <div className="title">
                <i className="uil uil-clock-three"></i>
                <span className="text">Recent Activity</span>
              </div>
              
              <div className="activity-data">
                <div className="data names">
                  <span className="data-title">Name</span>
                  <span className="data-list">John Doe</span>
                </div>
                <div className="data email">
                  <span className="data-title">Email</span>
                  <span className="data-list">jd@gmail.com</span>
                </div>
                <div className="data joined">
                  <span className="data-title">Joined</span>
                  <span className="data-list">2022-02-12</span>
                </div>
                <div className="data type">
                  <span className="data-title">Role</span>
                  <span className="data-list">Admin</span>
                </div>
                <div className="data status">
                  <span className="data-title">Status</span>
                  <span className="data-list">Active</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default AdminDashboard