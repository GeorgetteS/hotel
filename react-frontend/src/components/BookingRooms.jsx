import { useState } from 'react';

import { BookingRoomList } from './BookingRoomList';

import BookingSelectionWhenOneRoom from './RoomsSelectionWhenOneRoom';

import Result from './Result';
import BookingPanel from './BookingPanel';
import ReservationForm from './ReservationForm';

const BookingRooms = ({ rooms, roomsType, setShowForm }) => {
  const [step, setStep] = useState(0);
  const [selectedRoom, setselectedRoom] = useState();

  function goToSecondStep(room) {
    setselectedRoom(room);
    setStep(step + 1);
  }

  function switchTitle(step) {
    switch (step) {
      case 0:
        return 'Выберите Номер';

      case 1:
        return 'Выберите Тариф';

      case 2:
        return 'Введите данные гостей';
      default:
    }
  }
  function switchPrev(step) {
    switch (step) {
      case 0:
        return '';

      case 1:
        return 'К номерам';

      case 2:
        return 'К тарифам';
      default:
        return '';
    }
  }
  function switchNext(step) {
    switch (step) {
      case 0:
        return 'Продолжить бронирование';

      case 1:
        return 'Продолжить бронирование';

      case 2:
        return '';
      default:
    }
  }

  return (
    <>
      <Result setShowForm={() => setShowForm()} disableResult={step === 0 ? false : true} />
      <BookingPanel
        now={(step + 1) * 25}
        color={'#9da3be'}
        title={switchTitle(step)}
        prev={switchPrev(step)}
        next={switchNext(step)}
        onClickPrev={() => setStep((prev) => prev - 1)}
        onClickNext={() => setStep((prev) => prev + 1)}
      />
      {step === 0 && (
        <BookingRoomList
          rooms={rooms}
          onSelelectRoom={(room) => goToSecondStep(room)}
          onlyOne={roomsType}
        />
      )}
      {step === 1 && <BookingSelectionWhenOneRoom rooms={rooms} selectedRoom={selectedRoom} />}
      {step === 2 && <ReservationForm />}
    </>
  );
};

export default BookingRooms;
