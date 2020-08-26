import React, { useState, useRef, useEffect } from 'react';
import { TweenLite, Power3 } from 'gsap';

import '../styles/Slider.css';

import arrowBack from '../assets/arrowBack.png';
import arrowNext from '../assets/arrowNext.png';

const instructors = [
    {
        name: "Dev Ed",
        title: 'Hello there my gorgeous friends on the internet ',
        image: `${require("../assets/ed.jpg")}`,
        quote: "Ed, better known online as Dev Ed, is a Romanian-German YouTuber who makes programming and design videos. He is mostly known for his web development tutorials, as that is his main type of video."
    },
    {
        name: "Mosh",
        title: 'My mission is to make coding and software engineering accessible to everyone',
        image: `${require("../assets/mosh.jpg")}`,
        quote: " I am a passionate and pragmatic software engineer with 20 years of professional experience and I've taught over 10 million people how to code or how to become professional software engineers through my YouTube channel and online courses. "
    },
    {
        name: "Kevin Powell",
        title: 'Teaching people how to make the web and how to make it look good while they are at it ',
        image: `${require("../assets/kevin.jpg")}`,
        quote: "I learned to make websites on my own. I know how fun and rewarding it is, but I also know that it can be incredibly frustrating. I'm here to help make your journey into web development as easy and as fun as possible."
    }
];

function Slider() {
    let imgList = useRef(null);
    let instructorsList = useRef(null);
    const imgWidth = 400;

    // 3 slides
    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false
    });

    useEffect(() => {
        // display specific children element from imgList
        TweenLite.to(instructorsList.children[0], 0, {
            opacity: 1
        });
    }, []);

    // function for animation (to not repeat code) - Image transition
    const slideLeft = (index, duration, muliplied = 1) => {
        // GSAP animation
        TweenLite.to(imgList.children[index], duration, {
            x: -imgWidth * muliplied,
            ease: Power3.easeOut
        });
    };

    const slideRight = (index, duration, muliplied = 1) => {
        // GSAP animation
        TweenLite.to(imgList.children[index], duration, {
            x: imgWidth * muliplied,
            ease: Power3.easeOut
        });
    };

    const scale = (index, duration) => {
        // GSAP animation
        TweenLite.from(imgList.children[index], duration, {
            scale: 1.2,
            ease: Power3.easeOut
        });
    };

    // content transition
    const fadeOut = (index, duration) => {
        TweenLite.to(instructorsList.children[index], duration, {
            opacity: 0
        });
    };

    const fadeIn = (index, duration) => {
        TweenLite.to(instructorsList.children[index], duration, {
            opacity: 1,
            delay: 1
        });
    };

    // Function for next and prev slide
    const nextSlide = () => {
        if (imgList.children[0].classList.contains('active')) {
            setState({ isActive1: false, isActive2: true });
            // we use function to animate the slider, we pass here arguments (img transition)
            slideLeft(0, 1);
            slideLeft(1, 1);
            scale(1, 1);
            slideLeft(2, 1);
            slideLeft(2, 0);
            fadeOut(0, 1);
            fadeIn(1, 1);

        } else if (imgList.children[1].classList.contains('active')) {
            setState({ isActive2: false, isActive3: true });
            slideRight(0, 1);
            slideLeft(1, 1, 2);
            slideLeft(2, 1, 2);
            scale(2, 1);
            fadeOut(1, 1);
            fadeIn(2, 1);

        } else if (imgList.children[2].classList.contains('active')) {
            setState({ isActive1: true, isActive3: false });
            slideLeft(2, 1, 3);
            slideLeft(0, 1, 0);
            slideLeft(1, 0, 0);
            scale(0, 1);
            fadeOut(2, 1);
            fadeIn(0, 1);
        }
    };

    const prevSlide = () => {
        if (imgList.children[0].classList.contains('active')) {
            setState({ isActive1: false, isActive3: true });
            // we use function to animate the slider, we pass here arguments
            slideLeft(2, 0, 3);
            slideLeft(2, 1, 2);
            scale(2, 1);
            slideRight(0, 1);
            slideRight(1, 1);
            fadeOut(0, 1);
            fadeIn(2, 1);

        } else if (imgList.children[1].classList.contains('active')) {
            setState({ isActive2: false, isActive1: true });
            //Image transition
            slideLeft(0, 0);
            slideRight(0, 1, 0);
            slideRight(1, 1, 0);
            slideRight(2, 1, 2);
            scale(0, 1);
            //content transtion
            fadeOut(1, 1);
            fadeIn(0, 1);

        } else if (imgList.children[2].classList.contains('active')) {
            setState({ isActive2: true, isActive3: false });
            slideLeft(2, 1);
            slideLeft(1, 0, 2);
            slideLeft(1, 1);
            scale(1, 1);
            //content transtion
            fadeOut(2, 1);
            fadeIn(1, 1);
        }
    };

    return (
        <div className="section4">
            <div className="slider-container">

                <div onClick={prevSlide} className="slider-arrows slider-arrows__back">
                    <span>
                        <img src={arrowBack} alt="arrow-back" />
                    </span>
                </div>

                <div className="inner">
                    <div className="slider-img">
                        <ul ref={el => (imgList = el)}>
                            <li className={state.isActive1 ? "active" : ""}>
                                <img src={instructors[0].image} alt={instructors[0].name} />
                            </li>
                            <li className={state.isActive2 ? "active" : ""}>
                                <img src={instructors[1].image} alt={instructors[1].name} />
                            </li>
                            <li className={state.isActive3 ? "active" : ""}>
                                <img src={instructors[2].image} alt={instructors[2].name} />
                            </li>
                        </ul>
                    </div>

                    <div className="slider-content">
                        <ul ref={el => (instructorsList = el)}>
                            <li className={state.isActive1 ? "active" : ""}>
                                <div className="content-instructor">
                                    <h3 className="name">{instructors[0].name}</h3>
                                    <h4 className="title">{instructors[0].title}</h4>
                                    <p className="quote">{instructors[0].quote}</p>
                                </div>
                            </li>

                            <li className={state.isActive2 ? "active" : ""}>
                                <div className="content-instructor">
                                    <h3 className="name">{instructors[1].name}</h3>
                                    <h4 className="title">{instructors[1].title}</h4>
                                    <p className="quote">{instructors[1].quote}</p>
                                </div>
                            </li>

                            <li className={state.isActive3 ? "active" : ""}>
                                <div className="content-instructor">
                                    <h3 className="name">{instructors[2].name}</h3>
                                    <h4 className="title">{instructors[2].title}</h4>
                                    <p className="quote">{instructors[2].quote}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div onClick={nextSlide} className="slider-arrows slider-arrows__next">
                    <span>
                        <img src={arrowNext} alt="arrow-next" />
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Slider;