import * as React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Empatados from '../assets/img/EmpatadosLogo.png';
import {Dropdown} from '../components/Dropdown';
import {Button} from '../components/Button';
import '../index.css'

import { useTranslation } from 'react-i18next'

export const Navbar = () => {

    const [ t, i18n ] = useTranslation("navbar");

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-logo'>
                <img src={Empatados} alt='logo empatados'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        {t("navbar.navbar-title1")}
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to="/nosotros" className='nav-links' onClick={closeMobileMenu}>
                        {t("navbar.navbar-title2")}
                    </Link>
                </li>


                <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to="/proyectos" className='nav-links' onClick={closeMobileMenu}>
                        {t("navbar.navbar-title3")} <i className='fas fa-caret-down'></i>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>

                <li className='nav-item'>
                    <Link to="/testimonios" className='nav-links' onClick={closeMobileMenu}>
                        {t("navbar.navbar-title4")}
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to="/empatate" className='nav-links-mobile' onClick={closeMobileMenu}>
                        {t("navbar.navbar-title5")}
                    </Link>
                </li>

            </ul>

            <Button/>
        </nav>
    );
};
