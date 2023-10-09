import { Outlet, Link } from "react-router-dom";
import styles from './css/Navbar.module.css';

const Layout = () => {
  return (
    <div className="App">
        <header className="App-header">
            <nav className={`${styles.navbar}`}>

                {/* logo */}
                <a href='#home' className={`${styles.logo}`}>RoamReady</a>
                <ul className={`${styles.navMenu}`}>
                    <li>
                        <Link to="/">Home</Link>                    
                    </li>

                    <li>
                        <Link to="/ScratchForm">Create</Link>
                    </li>

                    <li>
                        <Link to="/Card">Profile</Link>
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
