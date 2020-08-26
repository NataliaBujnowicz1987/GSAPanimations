import React from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

// navigation list
const navList = [
    { name: "GSAP", path: "/GSAPanimations", exact: "true" },
    { name: "Weather App", path: "/weatherapp" },
    { name: "Recipe App", path: "/recipeapp" },
    { name: "Admin", path: "/admin" }
]

const Header = () => {
    const navSlide = () => {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            // each link animation
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navFade 1s linear forwards ${index / 7 + 2}s`;
                }
            });
            // burger animation to x symbol
            hamburger.classList.toggle('toggle');
        });
    }

    // navigation
    const menu = navList.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <header>
            <div className="logo">FOXdesign</div>
            <nav>

                <ul className="nav-links">
                    {menu}
                </ul>

                <div onClick={navSlide} className="hamburger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    )
};

export default Header;