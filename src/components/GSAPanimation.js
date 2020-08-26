import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/GSAPanimation.css';

import { ReactComponent as Fox } from '../assets/fox.svg';
import { ReactComponent as Paw } from '../assets/paw.svg';
import { ReactComponent as Paw2 } from '../assets/paw2.svg';

function GSAPanimation() {

    useEffect(() => {
        // FOX animation
        const nose = document.getElementById('nose');
        const eyes = document.getElementById('eyes');
        const head = document.getElementById('head');
        const body = document.getElementById('body');

        // PAW animation
        const paw = document.getElementById('paw');
        const paw2 = document.getElementById('paw2');

        const tl = gsap.timeline({ delay: 0.5, defaults: { visibility: 'hidden', ease: 'power2.inOut' } })

        // fox
        tl.staggerFromTo(body.children, 0.7,
            { scale: 0.4, opacity: 0, },
            { scale: 1, opacity: 1, visibility: "visible" }, 0.1)
            .staggerFromTo(head.children, 0.7, { scale: 0.4, opacity: 0, }, { scale: 1, opacity: 1, visibility: "visible" }, 0.1)
            .fromTo(nose, 1, { opacity: 0 }, { visibility: "visible", opacity: 1 })
            .fromTo(eyes, 1, { opacity: 0 }, { visibility: "visible", opacity: 1 }, '-=1');

        // paw
        tl.staggerFromTo(paw2.children, 1,
            { scale: 0.4, opacity: 0, left: 0 },
            { scale: 1, opacity: 1, visibility: "visible" }, 0.1)
            .staggerFromTo(paw.children, 1, { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, visibility: "visible" }, 0.1)
    });

    return (
        <section className="section-first">
            <div className="svg-animation">
                <Fox />
            </div>
            <p>
                <div className="fox-paw ">
                    <div className="paw1">
                        <Paw />
                    </div>
                    <div className="paw2">
                        <Paw2 />
                    </div>
                </div>
                Welcome here! I've learned some useful things over the past weeks using CSS, JavaScript, React.js and GSAP. Instead of adding each one separately on Github, I add them all in this app. I really hope you will like it.
            </p>
        </section>
    );
}

export default GSAPanimation;