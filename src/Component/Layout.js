import { Outlet, Link } from "react-router-dom";
import styles from './css/Navbar.module.css';

const Layout = () => {
  return (
    <div className="App">
        <header className="App-header">
            <nav className={`${styles.navbar}`}>

                {/* logo */}
                <Link to="/Welcome">RoamReady</Link>
                <ul className={`${styles.navMenu}`}>
                    <li>
                        <Link to="/MyTrips">My Trips</Link>                    
                    </li>

                    <li>
                        <Link to="/ScratchForm">Create</Link>
                    </li>

                    <li>
                        <Link to="/Card">Profile</Link>
                    </li>
                    <li>
                        <Link to="/SingleTrip">Test</Link>
                    </li>
                </ul>

                <div className={`${styles.hamburger}`}>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                </div>
            </nav>

            <Outlet />
        </header>
    </div>
    )

};

export default Layout;
