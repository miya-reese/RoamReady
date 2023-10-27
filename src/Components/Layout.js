import { Outlet, Link } from "react-router-dom";
//import styles from './css/Navbar.module.css';
// import logo from './images/ROAM.png';


const Layout = () => {
  return (
    <div className="App">
        <header className="App-header">
            {/*className={`${styles.navbar}`}*/}
            <nav className='p-1 m-0' style={{background:'#5f9ea0'}}>

                {/* logo */}
                <Link to="/Welcome">
                        <h1 style={{fontFamily:'League Spartan', color:'white'}}>RoamReady</h1>
                        {/* <img src={logo} alt="logo" style={{width: 200, height: 200}}/> */}
		        </Link>
                {/* className={`${styles.navMenu}` */}
                <ul>
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
        </header>
    </div>
    );
}

export default Layout;
