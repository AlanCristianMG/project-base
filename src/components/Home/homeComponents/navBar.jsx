import React from 'react';
import Logo from '../../../img/logo/logo_2.png'
import  "./styles/navBar.css";

const NavBar = () => {
    return (
        <nav className='navHome'>
            <img src={Logo} className='logoNavbar'/>
        </nav>
    );
}

export default NavBar;
