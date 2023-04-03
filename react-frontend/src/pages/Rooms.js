import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card';
import RoomsMain from '../components/RoomsPage/RoomsMain';
import Spinner from '../components/Spinner';
import { roomSelector } from '../redux/rooms/roomSelector';

import { fetchRooms } from '../redux/rooms/roomSlice';

function Rooms() {
  const dispatch = useDispatch();
  const { rooms, status, error } = useSelector(roomSelector());

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const roomCards = rooms.map((item) => <Card key={item.id} {...item} type={item.id}></Card>);

  return (
    <main className="rooms">
      <RoomsMain />

      <div className="rooms__gallery gallery">
        <div className="container">
          <div className="gallery__item">
            <div className="gallery__row">
              {error && <p className="error">{error}</p>}
              {status === 'loading' ? <Spinner /> : roomCards}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Rooms;
