import { useEffect, useState } from 'react';

import BookingCheque from './BookingCheque';

import SelectionRoom from './SelectionRoom';
import ToggleShowButton from './ToggleShowButton';
import useMatchMedia from '../hooks/useMatchMedia';

const RoomsSelectionWhenMany = ({ rooms, onlyOne, goToNextStep }) => {
  const [showOne, setShowOne] = useState(false);
  const [roomArr, setRoomArr] = useState([]);
  const { isTablet } = useMatchMedia();

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
    return <SelectionRoom key={room.id} {...room} goToNextStep={goToNextStep} />;
  });
  return (
    <div className="booking__selection selection-booking">
      <div className="selection-booking__body">
        <div className="selection-booking__rooms rooms-selection">
          <div className="rooms-selection__body">
            <div className="rooms-selection__card card-selection ">
              <div className="card-selection__body">
                {showOne ? allRooms[0] : allRooms}

                <ToggleShowButton
                  showOne={showOne}
                  onlyOne={onlyOne}
                  toggle={(bool) => setShowOne(bool)}
                />
              </div>
            </div>
          </div>
        </div>
        {!isTablet && <BookingCheque goToNextStep={goToNextStep} />}
      </div>
    </div>
  );
};

export default RoomsSelectionWhenMany;
