import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = () => {
    return(
        <div className='header'>
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
        </div>
    );
}

export default Header;