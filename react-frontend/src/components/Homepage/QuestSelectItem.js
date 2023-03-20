import { useDispatch } from 'react-redux';

// import { bookingChildrenSelector, bookingSelector } from "../../../redux/booking/bookingSelector";
import {
  addAdult,
  removeAdult,
  addChild,
  removeChild,
  removeRoom,
} from '../../redux/booking/bookingSlice';

import KidInput from './KidInput';

const QuestSelectItem = ({ id, countOfAdults, children, number }) => {
  const dispatch = useDispatch();

  const plusAdult = () => {
    dispatch(addAdult({ id, countOfAdults: 1 }));
  };

  const minusAdult = () => {
    dispatch(removeAdult({ id, countOfAdults: 1 }));
  };

  const plusChild = () => {
    dispatch(
      addChild({
        id,
        childId: JSON.stringify(new Date()),
        childNumber: children.length,
      }),
    );
  };

  const minusChild = () => {
    dispatch(removeChild({ id }));
  };

  const deleteRoom = () => {
    dispatch(removeRoom(id));
  };

  const localCountOfQuests = countOfAdults + children.length;

  return (
    <div className="quest-select__room room-select">
      <div className="room-select__title">
        Номер {number + 1}{' '}
        {number !== 0 && (
          <button className="room-select__delete" onClick={deleteRoom}>
            {' '}
            <img src="./img/booking/trash_unhover.svg" alt="" />
          </button>
        )}
      </div>
      <div className="room-select__row">
        <div className="room-select__column">
          <span className="room-select__subtitle">Взрослые</span>
          <div className="room-select__selector">
            <div className="room-select__input">{countOfAdults}</div>

            <button
              className="plus"
              disabled={localCountOfQuests >= 3}
              onClick={plusAdult}></button>
            <button className="minus" disabled={countOfAdults === 1} onClick={minusAdult}></button>
          </div>
        </div>
        <div className="room-select__column">
          <span className="room-select__subtitle">Дети младше 10 лет</span>
          <div className="room-select__selector">
            <div className="room-select__input">{children.length}</div>
            <button
              className="plus"
              disabled={localCountOfQuests >= 3}
              onClick={plusChild}></button>
            <button
              className="minus"
              disabled={children.length === 0}
              onClick={minusChild}></button>
          </div>
        </div>
      </div>
      {children?.map((item) => {
        return (
          <KidInput
            key={item.childId}
            id={item.childId}
            ageValue={item.ageValue}
            room={id}
            isError={item.error}
            childNumber={item.childNumber}
          />
        );
      })}
    </div>
  );
};

export default QuestSelectItem;
