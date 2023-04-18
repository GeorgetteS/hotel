import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import BookingButton from '../UI/BookingButton/BookingButton.jsx';
import writeDeclinationNights from '../utils/writeDeclinationNights';

import List from '../UI/List/List.jsx';

import useHide from '../hooks/useHide';

const TariffOption = ({
  extraPlace,
  discount,
  price,
  oldPrice,
  roomInfo,
  tariffIcons,
  isOneRoom,
  countOfDays,
  countOfAvailiableRooms,
  selectOption,
  deleteOption,
  deleteId,
}) => {
  const [roomList, setRoomList] = useState([]);

  const [inputPlaceholderValue, setPlaceholderValue] = useState('Выбрать');

  const refList = useRef(null);

  const [isListVisible, setListVisible] = useHide(refList);

  useEffect(() => {
    if (!isOneRoom) {
      const roomList = ['отменить'];
      for (let i = 1; i < countOfAvailiableRooms + 1; i++) {
        //create string like "{i} номер = {price * i} / {countOfDays} ночь"
        const incredibleTrick = classNames(
          i,
          writeDeclinationRooms(i),
          ' = ',
          price * i,
          ' / ',
          writeDeclinationNights(countOfDays),
        );
        roomList.push(incredibleTrick);
      }
      setRoomList([...roomList]);
      // setRoomListValues([...roomList]);
    }
  }, [countOfAvailiableRooms]);

  function defineOperation(string) {
    if (string === 'отменить') {
      deleteOption(deleteId);
      // setRoomList([...roomListValues]);
      setPlaceholderValue(`Выбрать`);
    } else {
      returnOptionInfo(string[0]);
      // setRoomList(['отменить']);
      const stringArr = string.split(' ');
      setPlaceholderValue(`${stringArr[0]} ${stringArr[1]}`);
    }
  }

  function returnOptionInfo(countOfRooms = 1) {
    selectOption({
      oldPrice,
      price,
      discount,
      roomInfo,
      deleteId,
      countOfRooms: +countOfRooms,
    });
    // }
  }

  function writeDeclinationRooms(numberOfRooms) {
    switch (numberOfRooms) {
      case 1:
        return 'номер';
      case 2:
      case 3:
      case 4:
        return `номера`;
      default:
        return `номеров`;
    }
  }

  return (
    <li className="tariffs__room">
      <div className="tariffs__info">
        {discount ? (
          <div className="tariffs__price-sale">
            <span className="tariffs__discount">- {discount}%</span>
            <span className="tariffs__sale">{oldPrice} ₽</span>
          </div>
        ) : (
          ''
        )}

        <div className="tariffs__info-row">
          <div className="tariffs__quests">
            {tariffIcons.map((icon, index) => {
              return (
                <div className="tariffs__icon" key={index}>
                  <img src={icon} alt="" />
                </div>
              );
            })}
          </div>
          <div className="tariffs__price">{price} ₽</div>
        </div>
      </div>
      {isOneRoom ? (
        <div className="tariff__button">
          <BookingButton onCLickButton={returnOptionInfo} label={'Забронировать'} />
        </div>
      ) : (
        <div
          className="tariffs__input "
          onClick={() => setListVisible((prev) => !prev)}
          ref={refList}>
          <input readOnly placeholder={inputPlaceholderValue} />
          <span className="triangle"></span>
          {isListVisible && (
            <List
              isVisible={isListVisible}
              appear={'opacity'}
              items={roomList}
              setSelectedItem={(string) => defineOperation(string)}
            />
          )}
        </div>
      )}
    </li>
  );
};

export default TariffOption;

// const incredibleTrick = (
//   <div>
//     <b>{i}</b> {writeDeclinationRooms(i)}
//     <span>
//       = {price * countOfDays} р / {writeDeclinationNights(countOfDays)}
//     </span>
//   </div>
// );
