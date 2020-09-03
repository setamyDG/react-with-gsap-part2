import React, { useRef, useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {ReactComponent as Logo } from './logo.svg';
import {ReactComponent as JsLogo } from './javascript.svg';
import {ReactComponent as ReduxLogo } from './redux.svg';
import {ReactComponent as FbLogo } from './facebook.svg';
import {ReactComponent as TwitterLogo } from './twitter.svg';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const reactLogoRef = useRef(null);
  const textRef = useRef(null);
  const animateChildren = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: '-50px, 50%',
        markers: true,
      },
      y: 100,
      opacity: 0,
      duration: 2,
    });
    gsap.from(subTitleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: '-20px, 50%',
        markers: true,
      },
      y: 100,
      opacity: 0,
      duration: 2,
    });
    gsap.from(reactLogoRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: '20px, 50%',
        markers: true,
      },
      y: 100,
      opacity: 0,
      duration: 2,
    });
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: '0px, 50%',
        markers: true,
      },
      y: 100,
      opacity: 0,
      duration: 2,
    });
    gsap.from(animateChildren.current.children, {
      scrollTrigger: {
        trigger: textRef.current.children,
        start: '60%, 50%',
        markers: true,
      },
      y: 100,
      stagger: 0.2,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="App">
      <p ref={titleRef}> You can animate everything!</p>
      <p ref={subTitleRef}> in so many ways!</p>
      <Logo ref={reactLogoRef} className="Logo"/>
      <p ref={textRef}>Learn more with gsap and make your site alive</p>
      <div className="Icons-Container" ref={animateChildren}> 
        <JsLogo className="Logo"/>
        <ReduxLogo className="Logo"/>
        <TwitterLogo className="Logo"/>
        <FbLogo className="Logo"/>
      </div>
    </div>
  );
}

export default App;
