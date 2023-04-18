import { useRef } from 'react';

import Fullscreen from '../components/Homepage/Fullscreen';
import About from '../components/Homepage/About';
import Contacts from '../components/Contacts';
import Comfort from '../components/Homepage/Comfort';

function Homepage() {
  const aboutRef = useRef(null);

  const handleButtonClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Fullscreen scrollTo={handleButtonClick}></Fullscreen>
      <div className="scroll-wrapper" ref={aboutRef}>
        <About />
      </div>
      <Comfort />
      <Contacts />
    </div>
  );
}

export default Homepage;
