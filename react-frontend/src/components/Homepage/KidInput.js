import { useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setChild } from '../../redux/booking/bookingSlice';
import { ChildListContext } from '../../App';

function KidInput({ id, isError, room, ageValue, childNumber }) {
  const childList = useContext(ChildListContext);

  const dispatch = useDispatch();

  const [showKidList, setShowKidList] = useState(false);
  const refOne = useRef(null);

  const changeKidValue = (item) => {
    setShowKidList(false);

    dispatch(setChild({ id: room, ageValue: item.ageValue, childId: id }));
  };

  const findChildLabel = () => {
    const value = ageValue ? childList.find((item) => item.ageValue === ageValue) : '';

    return value;
  };

  const value = findChildLabel();

  return (
    <div className="room-select__kid kid-select">
      <div className="kid-select__column">
        <div className="kid-select__age">Возраст {childNumber + 1} ребенка</div>
        <div className="kid-select__control">
          <div className="kid-select__view" onClick={() => setShowKidList((prev) => !prev)}>
            {value.label || 'Выбрать'}
            <span className="triangle"></span>
          </div>
          <ul className={`kid-select__list  ${showKidList ? 'active' : ''}`} ref={refOne}>
            {childList.map((item) => (
              <li key={item.ageValue} onClick={() => changeKidValue(item)}>
                {item.label}{' '}
              </li>
            ))}
          </ul>
        </div>

        {isError && <div className="kid-select__error">Укажите возраст ребенка </div>}
      </div>
    </div>
  );
}

export default KidInput;
