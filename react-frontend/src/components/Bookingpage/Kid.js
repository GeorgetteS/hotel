import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { ChildListContext } from '../../App';
import { removeChild } from '../../redux/booking/bookingSlice';

function Kid({ id, ageValue, room }) {
  const childList = useContext(ChildListContext);

  const dispatch = useDispatch();

  const findChildLabel = () => {
    const value = childList.find((item) => item.ageValue === ageValue);
    return value;
  };

  const value = findChildLabel();

  return (
    <div className="booking-input booking-input_padding form-quests__kid">
      <input type="text" readOnly value={value?.label} placeholder="Добавить детей" />
      <div className="quest-adult__icon quests-icon">
        <img src="./img/child.svg" alt="" />
      </div>
      <button
        type="button"
        onClick={() => dispatch(removeChild({ id: room, childId: id }))}
        className="delete">
        {' '}
      </button>
    </div>
  );
}

export default Kid;
