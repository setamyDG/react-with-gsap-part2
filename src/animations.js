import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fromBottomToTop = ({ target, stagger, start = '0px, 50%', duration = 1, scaleX}) => {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start,
      // markers: true
    },
    y: '+=50',
    autoAlpha: 0,
    scaleX,
    duration,
    stagger: stagger
  });
};

export default fromBottomToTop
