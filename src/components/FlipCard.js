import React from 'react';
import '../styles/FlipCard.css';
import gsapImg from '../assets/gsap.png';

function FlipCard() {
    return (
        <section className="section-second">

            <div className="card">
                <figure className="card-front">
                    <h1>React.js</h1>
                    <i className="fab fa-react"></i>
                </figure>
                <figure className="card-back">
                    <h1>React.js</h1>
                    <p>Open-source JavaScript library used for building user interfaces specifically for single-page applications. React also allows us to create reusable UI components. The main purpose of React is to be fast, scalable, and simple.</p>
                </figure>
            </div>

            <div className="card">
                <figure className="card-front">
                    <h1>JavaScript</h1>
                    <i className="fab fa-js-square"></i>
                </figure>
                <figure className="card-back">
                    <h1>JavaScript</h1>
                    <p>JavaScript is a dynamic programming language that can add interactivity to a website. It is used when a webpage is to be made dynamic and add special effects on pages like rollover, roll out and many types of graphics.</p>
                </figure>
            </div>

            <div className="card">
                <figure className="card-front">
                    <h1>GSAP</h1>
                    <img src={gsapImg} alt="GSAP" />
                </figure>
                <figure className="card-back">
                    <h1>GSAP</h1>
                    <p>Professional-grade JavaScript animation for the modern web. Simply put, GSAP is the most robust high-performance javascript animation library on the planet, which is probably why Google recommends it for JS-based animations</p>
                </figure>
            </div>
        </section>
    )
};

export default FlipCard;