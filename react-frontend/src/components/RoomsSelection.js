import { useEffect, useState } from 'react';

import SelectionRoom from './SelectionRoom';

const RoomsSelection = ({ rooms, onlyOne }) => {
  const [roomsArr, setRoomsArr] = useState([]);

  useEffect(() => {
    if (onlyOne) {
      const newArr = rooms.filter((room) => room.id === onlyOne);
      setRoomsArr(newArr);
    } else {
      setRoomsArr(rooms);
    }
  }, [rooms, onlyOne]);

  return (
    <div className="selection-booking__rooms rooms-selection">
      <div className="rooms-selection__body">
        <div className="rooms-selection__card card-selection ">
          <div className="card-selection__body">
            {roomsArr.map((room) => (
              <SelectionRoom key={room.id} {...room} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsSelection;
