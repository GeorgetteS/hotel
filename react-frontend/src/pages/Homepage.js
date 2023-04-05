import { useRef } from 'react';

import Fullscreen from '../components/Homepage/Fullscreen';
import About from '../components/Homepage/About';
import Comfort from '../components/Homepage/Comfort';
import Contacts from '../components/Contacts';

function Homepage() {
  const abourtRef = useRef(null);

  //I know
  //Its look terrible when i use "document.querySelector('*')" in react app
  //But i need to scroll to my component taking into account fixed header
  //Which is changing its hight on different devices
  //And its located im my Layout component, so if i want to do it correctly
  //I must create extra context and ref
  //And cover with it all my app only for little scrollButton in my Homepage.js

  const handleButtonClick = () => {
    if (document.querySelector('header') && abourtRef.current) {
      const gotoBlockValue =
        abourtRef.current.getBoundingClientRect().top +
        window.scrollY -
        document.querySelector('header').offsetHeight;
      window.scrollTo({ top: gotoBlockValue, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Fullscreen scrollTo={handleButtonClick}></Fullscreen>
      <div ref={abourtRef}>
        <About />
      </div>
      <Comfort />
      <Contacts />
    </div>
  );
}

export default Homepage;
