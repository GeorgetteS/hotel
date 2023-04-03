import classNames from 'classnames';
import { useEffect, useState } from 'react';

import Slider from './Slider';
import ToggleShowButton from './ToggleShowButton';

export const BookingRoomList = ({ rooms, onlyOne, onSelelectRoom }) => {
  const [showOne, setShowOne] = useState(false);
  const [roomArr, setRoomArr] = useState([]);

  useEffect(() => {
    if (onlyOne) {
      const currentRoom = rooms.filter((room) => room.id === onlyOne);
      const indexOfCurrentRoom = rooms.indexOf(currentRoom[0]);
      const newRooms = JSON.parse(JSON.stringify(rooms));

      if (indexOfCurrentRoom) {
        [newRooms[0], newRooms[indexOfCurrentRoom]] = [newRooms[indexOfCurrentRoom], newRooms[0]];
      }

      setShowOne(true);
      setRoomArr(newRooms);
    } else {
      setShowOne(false);
      setRoomArr(rooms);
    }
  }, [rooms, onlyOne]);

  const allRooms = roomArr.map((room) => {
    return <BookingRoom key={room.id} {...room} onSelelectRoom={onSelelectRoom} />;
  });

  return (
    <div className={classNames('booking__grid')}>
      {showOne ? allRooms[0] : allRooms}
      <ToggleShowButton showOne={showOne} onlyOne={onlyOne} toggle={(bool) => setShowOne(bool)} />
      <div></div>
    </div>
  );
};

const BookingRoom = ({ title, images, icons, countOfQuests, id, onSelelectRoom }) => {
  const onClickSelect = () => {
    onSelelectRoom(id);
  };

  return (
    <div className="booking__grid-item">
      <div className="booking__grid-slider">
        <Slider images={images} icons={icons} quests={countOfQuests} hover={true} />
      </div>
      <div className="booking__grid-item-info">
        <div className="booking__grid-name">{title}</div>
        <div className="booking__grid-row">
          <div className="booking__grid-cost-column">
            <div className="booking__grid-price"> 8 300 P</div>
            <div className="booking__grid-night-quests">1 ночь / 3 гостя</div>
          </div>
          <button onClick={() => onClickSelect()} className="booking__grid-button">
            Выбрать
          </button>
        </div>
      </div>
    </div>
  );
};
