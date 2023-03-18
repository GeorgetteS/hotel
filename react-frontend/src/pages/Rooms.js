import { useState, useEffect } from 'react';

import Card from '../components/Card';
import RoomsMain from '../components/RoomsPage/RoomsMain';

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchRooms = async () => {
    await fetch('https://640ed1cc4ed25579dc3d72f1.mockapi.io/rooms')
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      });
  };

  useEffect(() => {
    try {
      fetchRooms();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main className="rooms">
      <RoomsMain />

      {isLoading ? (
        <div>'Загрузка...'</div>
      ) : (
        <div className="rooms__gallery gallery">
          <div className="container">
            <div className="gallery__item">
              <div className="gallery__row">
                {rooms.map((item, index) => {
                  return <Card key={item.type} {...item} type={item.id}></Card>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Rooms;
