import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppendHead from 'react-append-head';
import { useNavigate } from 'react-router-dom';
import '../Style/style.css';

const Navbar = () => {
    const navigate = useNavigate();

   
    const [isMobile, setIsMobile] = useState(false);
    return (
        <div>
            <div>

                <AppendHead>
                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
                </AppendHead>
            </div>

            <nav className="nav-bar">
             <span className="logo3">E-books</span>
                <h3 className="logo"><img src={require('../assets/logo.png')} alt="" className="imglogo" /></h3>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}
                >
                   
                    <Link to="/" className="listf">
                        <li>Home</li>
                    </Link>
                   <Link to="/about" className="listf">
                        <li>About Us</li>
                    </Link>
                    <Link to="/contacts" className="listf">
                        <li>Contact Us</li>
                    </Link>

                    <Link to="/login" className="listf">
                        <li>Sign in</li></Link>
                        <Link to="/signup" className="signup">
                            <li>Sign up</li>
                        </Link>
                </ul>
                <button className="mobile-menu-icon"
                    onClick={() => setIsMobile(!isMobile)}
                >
                    {isMobile ?
                        (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)}
                </button>
            </nav>

        </div>
    )
}

export default Navbar;