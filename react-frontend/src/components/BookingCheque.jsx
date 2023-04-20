import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectChequeRooms } from '../redux/cheque/chequeSelector';
import useDate from '../hooks/useDate';
import writeDeclinationNights from '../utils/writeDeclinationNights';
import BookingChequeItem from './BookingChequeItem';
import BookingButton from '../UI/BookingButton/BookingButton';

const BookingCheque = ({ goToNextStep }) => {
  const chequeRooms = useSelector(selectChequeRooms());

  const unpackedChequeRooms = chequeRooms.reduce((total, room) => {
    for (let i = 0; i < room.countOfRooms; i++) {
      total.push(room);
    }
    return total;
  }, []);

  const [totalPrice, setTotalPrice] = useState(0);

  const { countOfDays, startDateWithoutYear, startDateDay, endDateWithoutYear, endDateDay } =
    useDate();

  useEffect(() => {
    const newPrice = chequeRooms.reduce((sum, item) => (sum += item.price * item.countOfRooms), 0);
    setTotalPrice(newPrice);
  }, [chequeRooms]);

  const rooms = unpackedChequeRooms.map((room, index, rooms) => {
    return (
      <BookingChequeItem key={index} {...room} number={index + 1} isOneRoom={rooms.length === 1} />
    );
  });

  return (
    <div className="selection-booking__menu menu-selection">
      <div className="menu-selection__body">
        <div className="menu-selection__title">Ваше бронирование</div>
        <div className="menu-selection__date date-selection">
          <div className="date-selection__nights">{writeDeclinationNights(countOfDays)}</div>
          <div className="date-selection__date">
            <div className="date-selection__row">
              <div className="date-selection__start-date date-selection__item">
                <div className="date-selection__day">{startDateWithoutYear}</div>
                <div className="date-selection__week-day">{startDateDay}</div>
              </div>
              <span></span>
              <div className="date-selection__end-date date-selection__item">
                <div className="date-selection__day">{endDateWithoutYear}</div>
                <div className="date-selection__week-day">{endDateDay} </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-selection__apartments apartments-selection">
          <div className="apartments-selection__body scroll-bar">{rooms}</div>
        </div>
        <div className="menu-selection__total">
          {totalPrice ? <div className="menu-selection__total-price">{totalPrice}  ₽</div> : ''}
          <div className="menu-selection__continue">
            <BookingButton
              disabled={!totalPrice}
              label={'Продолжить'}
              onCLickButton={goToNextStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCheque;
