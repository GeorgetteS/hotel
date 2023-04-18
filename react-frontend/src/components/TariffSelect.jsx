import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import TariffOption from './TariffOption';
import { addRoomToChegue, deleteRoomsFromChegue } from '../redux/cheque/chequeSlice';

import { bookingRoomsSelector } from '../redux/booking/bookingSelector';
import getIcons from '../utils/getIcons';
import useDate from '../hooks/useDate.js';
import calcPrice from '../utils/calcPrice';
import getTariffInfo from '../utils/getTariffInfo';

const TariffSelect = ({
  extraPlace,
  tariffPrice,
  title,
  ratio,
  roomTitle,
  countOfAvailiableRooms,
  goToNextStep,
}) => {
  const [isOneRoom, setIsOneRoom] = useState(false);

  const dispatch = useDispatch();
  const items = useSelector(bookingRoomsSelector());

  const itemsWithoutDuplicates = items.filter((room, index) => {
    const info = JSON.stringify(room.countOfAdults + room.children);
    return (
      index ===
      items.findIndex((room) => {
        return JSON.stringify(room.countOfAdults + room.children) === info;
      })
    );
  });

  useEffect(() => {
    if (items.length !== 1) {
      setIsOneRoom(false);
    } else {
      setIsOneRoom(true);
    }
  }, [items]);

  const { countOfDays } = useDate();

  function chooseOption(info) {
    const id = new Date().getTime();
    dispatch(addRoomToChegue({ ...info, roomTitle, tariffName: title, id }));
  }

  function deleteOption(deleteId) {
    dispatch(deleteRoomsFromChegue(deleteId));
  }

  const options = itemsWithoutDuplicates.map((item, index) => {
    const tariffIcons = getIcons(item.countOfAdults, item.children);

    const children = item.children.filter((child) => child.ageValue);

    const { discount, oldPrice, price } = calcPrice(
      tariffPrice,
      countOfDays,
      item.countOfAdults + children.length,
      ratio,
    );

    const roomInfo = getTariffInfo(item.countOfAdults, children);

    const deleteId = JSON.stringify(roomInfo) + title;

    return (
      <TariffOption
        key={index}
        discount={discount}
        price={price}
        oldPrice={oldPrice}
        extraPlace={extraPlace}
        roomInfo={roomInfo}
        isOneRoom={isOneRoom}
        countOfDays={countOfDays}
        tariffIcons={tariffIcons}
        countOfAvailiableRooms={countOfAvailiableRooms}
        deleteId={deleteId}
        selectOption={(info) => chooseOption(info)}
        deleteOption={(deleteId) => deleteOption(deleteId)}
      />
    );
  });

  return <ul className="tariffs__rooms"> {options} </ul>;
};

export default TariffSelect;
