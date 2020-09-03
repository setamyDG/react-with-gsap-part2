import React, { useRef, useEffect } from 'react';
import './App.css';
import {ReactComponent as Logo } from './logo.svg';
import {ReactComponent as JsLogo } from './javascript.svg';
import {ReactComponent as ReduxLogo } from './redux.svg';
import {ReactComponent as FbLogo } from './facebook.svg';
import {ReactComponent as TwitterLogo } from './twitter.svg';
import fromBottomToTop from './animations';

const App = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const reactLogoRef = useRef(null);
  const textRef = useRef(null);
  const animateChildren = useRef(null);

  useEffect(() => {
    fromBottomToTop({target: titleRef.current, start: '0px, 50%'});
    fromBottomToTop({target: subTitleRef.current, start: '0px, 50%'});
    fromBottomToTop({target: reactLogoRef.current, start: '0px, 50%'});
    fromBottomToTop({target: textRef.current, start: '0px, 50%'});
    fromBottomToTop({target: animateChildren.current.children, start: '0px 50%', stagger: 0.2});
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
