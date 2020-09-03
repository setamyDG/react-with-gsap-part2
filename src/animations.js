import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fromBottomToTop = ({ target, stagger = 0.3, start = '0px, 80%', duration = 1 }) => {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start,
    },
    y: '+=50',
    autoAlpha: 0,
    duration,
    stagger
  });
};

export default fromBottomToTop
