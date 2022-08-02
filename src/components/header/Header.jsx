import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/templogo.png';
import { auth } from '../../firebase/firebase';
import { useAuth } from '../../contexts/AuthContext';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    },
    {
        display: 'Login', 
        path: '/login'
    }
];

const headerLoggedInNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    },
    {
        display: 'Account',
        path: '/dashboard'
    }
];
const Header = () => {
  




    const {currentUser} = useAuth();
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    
    const active = headerNav.findIndex(e => e.path === pathname);

    
     
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">MovieDiary</Link>
                </div>
                <div>
                <b>{currentUser ? `${currentUser.email}` : 'not'}</b> logged in.
	</div>
                <ul className="header__nav">
                    {currentUser ?
                        headerLoggedInNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                                
                            </li>
                        )): 

                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                                
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;