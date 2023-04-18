import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card';
import Spinner from '../UI/Spinner';

import { roomSelector } from '../redux/rooms/roomSelector';

import { fetchRooms } from '../redux/rooms/roomSlice';

function Rooms() {
  const dispatch = useDispatch();
  const { rooms, status, error } = useSelector(roomSelector());

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const roomCards = rooms.map((item) => <Card key={item.id} {...item} type={item.id}></Card>);

  return (
    <main className="rooms">
      <div className="rooms__main main-rooms">
        <div className="container">
          <div className="main-rooms__row">
            <div className="main-rooms__column">
              <h1 className="main-rooms__title title">Номера</h1>
              <p className="main-rooms__text">
                “Prestige” предлагает 87 номеров, включая 19 люксов. Премиум-комфорт и удобное
                расположение вблизи достопримечательностей, делает “ Prestige” идеальным выбором как
                для бизнес-путешественников, так и для туристов.
              </p>
              <div className="main-rooms__time time">
                <div className="time__item">
                  <div className="time__info">
                    РЕГИСТРАЦИЯ <span>В НОМЕРЕ</span>
                  </div>
                  <div className="time__clock">15:00</div>
                </div>
                <span className="time__trans"></span>
                <div className="time__item">
                  <div className="time__info">ВЫЕЗД</div>
                  <div className="time__clock">12:00</div>
                </div>
              </div>
            </div>
            <div className="main-rooms__img">
              <img src="./img/rooms/room1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

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
