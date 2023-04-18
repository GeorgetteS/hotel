import { useSelector } from 'react-redux';
import { useState } from 'react';

import { IconsList } from '../UI/IconsList';
import Slider from '../UI/Slider';
import Tariff from './Tariff';

import { bookingRoomsSelector } from '../redux/booking/bookingSelector';

const tariffs = [
  {
    title: {
      name: 'Спецпредложение -20%',
      icon: '../img/snowflake.svg',
    },
    clauses: [
      {
        name: 'Завтрак "Шведский стол" ВКЛЮЧЕН',
        icon: '../img/snowflake.svg',
      },
      {
        name: 'Оплата: ПРИ ЗАСЕЛЕНИИ, банковской картойпо QR-коду (СБП)',
        icon: '../img/snowflake.svg',
      },
      {
        name: 'ВКЛЮЧЕНО: Спецпредложения от партнеров',
        icon: '../img/snowflake.svg',
      },
    ],
    ratio: 0.8,
    extraPlace: false,
  },
  {
    title: {
      name: 'Лучшая цена дня с завтраком ',
      icon: '../img/snowflake.svg',
    },
    clauses: [
      {
        name: 'Завтрак "Шведский стол" ВКЛЮЧЕН',
        icon: '../img/snowflake.svg',
      },
      {
        name: 'Оплата: ПРИ ЗАСЕЛЕНИИ, банковской картойпо QR-коду (СБП)',
        icon: '../img/snowflake.svg',
      },
      {
        name: 'ВКЛЮЧЕНО: Спецпредложения от партнеров',
        icon: '../img/snowflake.svg',
      },
    ],
    ratio: 1,
    extraPlace: true,
  },
];

const SelectionRoom = ({ title, text, images, icons, countOfQuests, type, price }) => {
  const items = useSelector(bookingRoomsSelector());

  const [countOfAvailiableRooms, setCountOfAvailiableRooms] = useState(5);

  return (
    <div className="card-selection__item">
      <div className="card-selection__room-info room-info">
        <div className="room-info__slider">
          <Slider images={images} />
        </div>
        <div className="room-info__info">
          <div className="room-info__title">{title}</div>
          <div className="room-info__parameters parameters-room">
            <div className="parameters-room__item">
              <div className="parameters-room__icon">
                <img src="../img/person.svg" alt="" />
              </div>
              <div className="parameters-room__text">до {countOfQuests} мест</div>
            </div>
          </div>
          <div className="room-info__icons">
            <IconsList icons={icons} />
          </div>
          <div className="room-info__text">{text}</div>
        </div>
      </div>
      <div className="card-selection__tariffs tariffs">
        {tariffs.map((tariff) => (
          <Tariff
            key={tariff.title.name}
            price={price}
            rooms={items}
            {...tariff}
            roomTitle={title}
            countOfAvailiableRooms={countOfAvailiableRooms}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectionRoom;
