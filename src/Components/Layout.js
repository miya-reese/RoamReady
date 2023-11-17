import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './css/Navbar.module.css';

const Layout = () => {
  const location = useLocation();

  // Define a function to check if a given path is the active route
  const isRouteActive = (path) => location.pathname === path;

  // Define a function to dynamically apply styles to the active link
  const getLinkStyle = (path) => ({
    color: isRouteActive(path) ? '#a4e0e1' : 'white',
    fontFamily: 'Glacial Indifference, sans-serif',
    fontSize: '0.8em',
  });

  return (
    <div className="App">
      <nav className={`${styles.navbar}`}>
        <Link className="text-decoration-none" style={{ fontFamily: 'League Spartan', fontSize: '3em', color: 'white' }} to="/Welcome">
          RoamReady
        </Link>
        <ul className={`${styles.navMenu}`}>
          <li>
            <NavLink to="/AboutUs" style={getLinkStyle('/AboutUs')}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/MyTrips" style={getLinkStyle('/MyTrips')}>
              My Trips
            </NavLink>
          </li>
          <li>
            <NavLink to="/FormScreen" style={getLinkStyle('/FormScreen')}>
              Create
            </NavLink>
          </li>
          <li>
            <NavLink to="/Profile" style={getLinkStyle('/Card')}>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
