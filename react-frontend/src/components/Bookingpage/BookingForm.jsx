import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { bookingSelector } from '../../redux/booking/bookingSelector';
import { addRoom } from '../../redux/booking/bookingSlice';

import useDate from '../../hooks/useDate';
import useHide from '../../hooks/useHide';

import BookingItem from './BookingItem';
import Calendar from '../../UI/Calendar';

const BookingForm = ({ closeForm }) => {
  const { items } = useSelector(bookingSelector());
  const refCalendar = useRef(null);

  const [openCalendar, setOpenCalendar] = useHide(refCalendar);

  // console.log(closeForm);

  const dispatch = useDispatch();

  const date = useDate();

  const plusRoom = () => {
    dispatch(addRoom(JSON.stringify(new Date())));
  };

  return (
    <div className="booking__body">
      <div className="booking__content-container">
        <form action="post" className="booking__form form-booking">
          <div className="form-booking__title">
            Выберите даты заезда, выезда и количество гостей
          </div>

          {openCalendar && (
            <div className={'form-date__calendar'} ref={refCalendar}>
              <Calendar date={date} />
            </div>
          )}
          <div className="form-booking__date form-date">
            <div className="form-date__item form-date__item_arrival">
              <div className="form-date__title">Дата заезда</div>
              <div
                className="form-date__input booking-input"
                onClick={() => setOpenCalendar((prev) => !prev)}>
                <input type="text" readOnly value={date.startDate} />
                <div className="form-date__icon">
                  <img src="./img/calendar.svg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="form-date__item form-date__item_departure"
              onClick={() => setOpenCalendar((prev) => !prev)}>
              <div className="form-date__title">Дата выезда</div>
              <div className="form-date__input booking-input">
                <input type="text" readOnly value={date.endDate} />
                <div className="form-date__icon">
                  <img src="./img/calendar.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-booking__quests form-quests">
            <div className="form-quests__body">
              <h5 className="form-quests__title">Размещение в номере</h5>
              <h6 className="form-quests__subtitle">Взрослые от 12 лет и старше</h6>
              <div className="form-quests__column">
                {items.map((room, index) => {
                  return <BookingItem key={room.id} {...room} number={index} />;
                })}
              </div>
              <button type="button" onClick={plusRoom} className="form-quests__add-room add-item">
                Нужен <b>еще 1</b> номер
              </button>
            </div>
          </div>
          <button type="button" className="form-booking__submit" onClick={closeForm}>
            Найти
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
