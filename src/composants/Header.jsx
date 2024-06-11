import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <NavLink to="/">
                        <li>accueil</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>favoris</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;