import { useSelector, useDispatch } from 'react-redux';

import { bookingSelector } from '../../../redux/booking/bookingSelector';
import { setChildError, addRoom, setCountOfQuests } from '../../../redux/booking/bookingSlice';

import QuestSelectItem from './QuestSelectItem';

function QuestSelect({ handleSelector, className }) {
  const { rooms } = useSelector(bookingSelector());

  const dispatch = useDispatch();

  function closeSelector(e) {
    if (rooms.find((room) => room.children.find((obj) => !obj.ageValue))) {
      dispatch(setChildError());
      return;
    }
    dispatch(setCountOfQuests());
    handleSelector(e);
  }

  const plusRoom = () => {
    dispatch(addRoom(JSON.stringify(new Date())));
  };

  return (
    <div className={`quest-select ${className}`}>
      <div className="quest-select__body">
        <div className="quest-select__title">Количество гостей</div>
        {rooms.map((room, index) => {
          return <QuestSelectItem key={room.id} {...room} number={index} />;
        })}
        <div className="quest-select__control">
          <button className="quest-select__finish" onClick={closeSelector}>
            Готово
          </button>
          <button className="quest-select__add " onClick={plusRoom}>
            Добавить комнату
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestSelect;
