import { useState } from 'react';

import RoomsSelectionWhenMany from './RoomsSelectionWhenMany';

import Result from './Result';
import BookingPanel from './BookingPanel';
import ReservationForm from './ReservationForm';

const BookingRoomsWithCheque = ({ rooms, roomsType, setShowForm }) => {
  const [step, setStep] = useState(0);

  function switchTitle(step) {
    switch (step) {
      case 0:
        return 'Выберите Номер';

      case 1:
        return 'Введите данные гостей';

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

      default:
    }
  }

  return (
    <>
      <Result setShowForm={() => setShowForm()} disableResult={step === 0 ? false : true} />
      <BookingPanel
        now={(step + 1) * 33}
        color={'#9da3be'}
        title={switchTitle(step)}
        prev={switchPrev(step)}
        next={switchNext(step)}
        onClickPrev={() => setStep((prev) => prev - 1)}
        onClickNext={() => setStep((prev) => prev + 1)}
      />
      {step === 0 && (
        <RoomsSelectionWhenMany
          rooms={rooms}
          goToNextStep={() => setStep((prev) => prev + 1)}
          onlyOne={roomsType}
        />
      )}
      {step === 1 && <ReservationForm />}
    </>
  );
};

export default BookingRoomsWithCheque;
