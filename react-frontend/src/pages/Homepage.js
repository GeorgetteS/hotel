import Fullscreen from '../components/Homepage/Fullscreen';
import About from '../components/Homepage/About';
import Comfort from '../components/Homepage/Comfort';
import Contacts from '../components/Contacts';

function Homepage() {
  return (
    <main>
      <Fullscreen></Fullscreen>
      <About />
      <Comfort />
      {/* <Room/> */}
      <Contacts />
    </main>
  );
}

export default Homepage;
