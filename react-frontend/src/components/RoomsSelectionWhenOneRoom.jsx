import { useEffect, useState } from 'react';

import SelectionRoom from './SelectionRoom';

const RoomsSelectionWhenOneRoom = ({ rooms, selectedRoom }) => {
  const [roomsArr, setRoomsArr] = useState([]);

  useEffect(() => {
    if (selectedRoom) {
      const newArr = rooms.filter((room) => room.id === selectedRoom);
      setRoomsArr(newArr);
    } else {
      setRoomsArr(rooms);
    }
  }, [rooms, selectedRoom]);

  return (
    <div className="booking__selection selection-booking">
      <div className="selection-booking__panel"></div>
      <div className="selection-booking__body">
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
      </div>
    </div>
  );
};

export default RoomsSelectionWhenOneRoom;
