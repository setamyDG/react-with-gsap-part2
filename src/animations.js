import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fromBottomToTop = ({ target, stagger, start, duration = 1 }) => {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: start,
      markers: true
    },
    y: '+=50',
    autoAlpha: 0,
    duration,
    stagger: stagger
  });
};

export default fromBottomToTop
