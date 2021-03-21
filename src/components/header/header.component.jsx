import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = () => {
    return(
        <div className='header'>
            <header className="u-clearfix u-header u-header" id="sec-ecb5">
                <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                    <div className="menu-collapse" >
                        <a className="u-button-style u-custom-active-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
                            
                        </a>
                    </div>
                    <div className="u-custom-menu u-nav-container">
                        <ul className="u-nav u-unstyled u-nav-1">
                            <li className="u-nav-item"><Link className="u-active-grey-50 u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" to="/" >Home</Link></li>
                            <li className="u-nav-item"><Link className="u-active-grey-50 u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" to="/about" >About</Link></li>
                            <li className="u-nav-item"><Link className="u-active-grey-50 u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" to="/contact" >Contact</Link></li>
                            <li className="u-nav-item"><Link className="u-active-grey-50 u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" to="/login">Login</Link></li>
                            <li className="u-nav-item"><Link className="u-active-grey-50 u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" to="/society" >Society</Link></li>
                            <li className="u-nav-item"><Link className="u-active-grey-50 u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" to="/event" >Event</Link></li>
                            <li className="u-nav-item"><Link className="u-active-grey-50 u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" to="/department" >Department</Link></li>
                            <li className="u-nav-item"><Link className="u-active-grey-50 u-button-style u-nav-link u-text-active-palette-5-base u-text-hover-palette-2-base" to="/transaction" >Transaction</Link></li>
                        </ul>
                    </div>
                    <div className="u-custom-menu u-nav-container-collapse">
                        <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                            <div className="u-sidenav-overflow">
                                <div className="u-menu-close"></div>
                                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="Home.html" >Home</a></li>
                                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="About.html" >About</a></li>
                                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="Contact.html" >Contact</a></li>
                                    <li className="u-nav-item"><a className="u-button-style u-nav-link"  href="Login.html">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                </nav>
                <a href="/" className="u-image u-logo u-image-1"> 
                    <img src="./images/aust.png" className="u-logo-image u-logo-image-1" alt="aust top logo" data-image-width="204.9296" />
                </a>
                <h5 className="u-align-center u-text u-text-custom-color-1 u-text-1">
                    AHSANULLAH UNIVERSITY OF SCIENCE AND TECHNOLOGY
                </h5>
            </header>
        </div>       
    );
}

export default Header;













{/* <div className='header'>
             <Link className='logo-container' to='/' >
                 AUST CSE
             </Link>
             <div className='options'>
                 <Link className='option' to='/' >
                     HOME
                 </Link>
                 <Link className='option' to='/events'>
                     EVENTS
                 </Link>
                 <Link className='option' to='/blogs'>
                     BLOGS
                 </Link>
                 <Link className='option' to='/society'>
                     SOCIETY
                 </Link>
                 <Link className='option' to='/department'>
                     DEPARTMENT
                 </Link>
                 <Link className='option' to='/about'>
                     ABOUT
                 </Link>
                 <Link className='option' to='/login'>
                     LOGIN
                 </Link>
             </div>
         </div> */}