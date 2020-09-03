import React, { useRef, useEffect } from 'react';
import './App.css';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as JsLogo } from './javascript.svg';
import { ReactComponent as ReduxLogo } from './redux.svg';
import { ReactComponent as FbLogo } from './facebook.svg';
import { ReactComponent as TwitterLogo } from './twitter.svg';
import fromBottomToTop from './animations';

const App = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const reactLogoRef = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const animateChildren = useRef(null);

  useEffect(() => {
    fromBottomToTop({target: titleRef.current, scaleX: 0.5});
    fromBottomToTop({target: subTitleRef.current});
    fromBottomToTop({target: reactLogoRef.current, scaleX: -1.5});
    fromBottomToTop({target: textRef.current});
    fromBottomToTop({target: textRef2.current});
    fromBottomToTop({target: textRef3.current, scaleX: 0.5});
    fromBottomToTop({target: animateChildren.current.children, stagger: 0.2, scaleX: 0});
  }, []);

  return (
    <div className="App">
      <p ref={titleRef}> You can animate everything!</p>
      <p ref={subTitleRef}> in so many ways!</p>
      <p ref={textRef}>for example one single element</p>
      <Logo ref={reactLogoRef} className="Logo"/>
      <p ref={textRef2}>or multitple elements</p>
      <div className="Icons-Container" ref={animateChildren}> 
        <JsLogo className="Logo"/>
        <ReduxLogo className="Logo"/>
        <TwitterLogo className="Logo"/>
        <FbLogo className="Logo"/>
      </div>
      <p className="Summary-Text" ref={textRef3}>Learn more with gsap animations to make your site alive!</p>
    </div>
  );
}

export default App;
