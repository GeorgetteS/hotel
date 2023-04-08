import { useRef } from 'react';

import Fullscreen from '../components/Homepage/Fullscreen';
import About from '../components/Homepage/About';
import Contacts from '../components/Contacts';

function Homepage() {
  const abourtRef = useRef(null);

  const handleButtonClick = () => {
    abourtRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Fullscreen scrollTo={handleButtonClick}></Fullscreen>
      <div className="scroll-wrapper" ref={abourtRef}>
        {' '}
        <About />
      </div>
      <Contacts />
    </div>
  );
}

export default Homepage;
