import React from 'react';
import Logo from '../../../img/logo/Logo-White-sf.png'
import  "./styles/navBar.css";

const NavBar = () => {
    return (
        <nav className='navHome'>
            <img src={Logo} className='logoNavbar'/>
            <h1 className='nameLogo'>AMI</h1>
        </nav>
    );
}

export default NavBar;
