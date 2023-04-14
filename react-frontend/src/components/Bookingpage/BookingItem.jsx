import { useState, useRef, useEffect, useContext } from 'react';

import { useDispatch } from 'react-redux';

import classNames from 'classnames';

import Kid from './Kid';

import {
  removeRoom,
  addChild,
  setChild,
  removeChild,
  setAdult,
  setCountOfQuests,
} from '../../redux/booking/bookingSlice';

import { ChildListContext } from '../../App';

import useHide from '../../hooks/useHide';

import useHover from '../../hooks/useHover';

const adultsList = [
  { value: 1, label: '1 Взрослый' },
  { value: 2, label: '2 Взрослых' },
  { value: 3, label: '3 Взрослых' },
  { value: 4, label: '4 Взрослый' },
  { value: 5, label: '5 Взрослых' },
  { value: 6, label: '6 Взрослых' },
  { value: 7, label: '7 Взрослых' },
];

const BookingItem = ({ id, children, number, countOfAdults }) => {
  const refAdultList = useRef(null);
  const refChildList = useRef(null);
  const refBacket = useRef(null);

  const [isHovered] = useHover(refBacket);
  const [isAdultsVisible, setAdultsVisible] = useHide(refAdultList);
  const [isChildVisible, setChildrenVisible] = useHide(refChildList);

  const [showChildList, setShowChildList] = useState(true);

  const dispatch = useDispatch();

  const childList = useContext(ChildListContext);

  // console.log(isHovered);

  const addKid = (item) => {
    const childId = JSON.stringify(new Date());
    dispatch(addChild({ id, childId: childId, childNumber: children.length }));
    dispatch(setChild({ id: id, ageValue: item.ageValue, childId: childId }));
    dispatch(setCountOfQuests());
  };

  const setAdults = (item) => {
    dispatch(setAdult({ id, countOfAdults: item.value }));
    dispatch(setCountOfQuests());
  };

  const deleteRoom = () => {
    dispatch(removeRoom(id));
  };

  useEffect(() => {
    if (children.length === 5) {
      setShowChildList(false);
    } else {
      setShowChildList(true);
    }
  }, [children]);

  const adults = adultsList.map((item, index) => (
    <li key={item.value} onClick={() => setAdults(item)}>
      {item.label}
    </li>
  ));

  return (
    <div className={classNames('form-quests__room ', isHovered && 'form-quests__room_hovered')}>
      <div className="form-quests__room-title">
        <span>Номер {number + 1}</span>
        {id ? (
          <button
            onClick={deleteRoom}
            ref={refBacket}
            type="button"
            className="form-quests__room-delete">
            <span>Удалить номер</span>
            <div type="button">
              <img
                src={
                  isHovered ? './img/booking/trash_hover.svg' : './img/booking/trash_unhover.svg'
                }
                alt=""
              />
            </div>
          </button>
        ) : (
          ''
        )}
      </div>
      <div className="form-quests__row">
        <div
          className={classNames(`form-quests__item quests-adult  `, isAdultsVisible && 'active')}>
          <div
            className={`quest-adult__input booking-input booking-input_padding`}
            ref={refAdultList}
            onClick={() => setAdultsVisible((prev) => !prev)}>
            <input
              type="text"
              value={adultsList.find((item) => item.value === countOfAdults).label}
              readOnly
            />
            <div className="quest-adult__icon quests-icon">
              <img src="./img/person.svg" alt="" />
            </div>
            <span className={classNames(`triangle `, isAdultsVisible && 'active')}></span>
            <ul
              className={classNames(
                `quests-adult__list quests-list `,
                isAdultsVisible && 'active',
              )}>
              {adults}
            </ul>
          </div>
        </div>
        <div className="form-quests__item ">
          <div
            className={`quests-child ${showChildList ? '' : 'display-none'}`}
            onClick={() => setChildrenVisible((prev) => !prev)}
            ref={refChildList}>
            <div className="quests-child__input booking-input booking-input_padding">
              <input type="text" readOnly placeholder="Добавить детей" />
              <span className="quests-child__icon quests-icon"></span>
              <ul
                className={`quests-child__list quests-list quests-list_low-height ${
                  isChildVisible ? 'active' : ''
                }`}>
                {childList.map((item) => (
                  <li key={item.ageValue} onClick={() => addKid(item)}>
                    {' '}
                    {item.label}{' '}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {children?.map((item) => {
            if (!item.ageValue) {
              dispatch(removeChild({ id, childId: item.childId }));
            }
            return <Kid key={item.childId} ageValue={item.ageValue} id={item.childId} room={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BookingItem;
