import { useState, useEffect } from 'react';

import Card from '../components/Card';
import RoomsMain from '../components/RoomsPage/RoomsMain';
import Spinner from '../components/Spinner';

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRooms = async () => {
    try {
      await fetch('https://640ed1cc4ed25579dc3d72f1.mockapi.io/rooms')
        .then((res) => res.json())
        .then((data) => {
          setRooms(data);
        });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  if (error) {
    return <main>Беда!</main>;
  }

  const roomCards = rooms.map((item) => <Card key={item.id} {...item} type={item.id}></Card>);

  return (
    <main className="rooms">
      <RoomsMain />
      <div className="rooms__gallery gallery">
        <div className="container">
          <div className="gallery__item">
            <div className="gallery__row">{isLoading ? <Spinner /> : roomCards}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Rooms;
