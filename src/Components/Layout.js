import { Outlet, Link } from "react-router-dom";
import styles from './css/Navbar.module.css';
// import logo from './images/ROAM.png';


const Layout = () => {
  return (
    <div className="App" >
        {/* <header className="App-header"> */}
        {/*className={`${styles.navbar}`}*/}
        {/* style={{background:'#5f9ea0', border: '2px solid red'}} */}
        <nav className={`${styles.navbar}`}>

            {/* logo */}
            <Link className='custom-link' to="/Welcome">
                    <h1>RoamReady</h1>
                    {/* <img src={logo} alt="logo" style={{width: 200, height: 200}}/> */}
            </Link>
            {/* className={`${styles.navMenu}` */}
            <ul className={`${styles.navMenu}`}>
                <li>
                    <Link to="/Card">About Us</Link>
                </li>
                    
                <li>
                    <Link to="/MyTrips">My Trips</Link>                    
                </li>

                <li>
                    <Link to="/FormScreen">Create</Link>
                </li>

                <li>
                    <Link to="/Card">Profile</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        {/* </header> */}
    </div>
    );
}

export default Layout;
