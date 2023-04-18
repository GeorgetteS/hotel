import { useEffect } from 'react';

import ProgressBar from '../UI/ProgressBar/ProgressBar';

const BookingPanel = ({ title, color, now, next, prev, onClickPrev, onClickNext }) => {
  const keyDownBack = (event) => {
    if (event.altKey && event.keyCode === 37) {
      event.preventDefault();
      onClickPrev();
    }
  };

  useEffect(() => {
    if (!prev) {
      return;
    }
    document.addEventListener('keydown', keyDownBack);

    return () => {
      document.removeEventListener('keydown', keyDownBack);
    };
  }, [prev]);

  const keyDownNext = (event) => {
    if (event.altKey && event.keyCode === 39) {
      event.preventDefault();
      onClickNext();
    }
  };

  useEffect(() => {
    if (!next) {
      return;
    }
    document.addEventListener('keydown', keyDownNext);

    return () => {
      document.removeEventListener('keydown', keyDownNext);
    };
  }, [next]);

  return (
    <div className="booking-panel">
      <div className="booking-panel__row">
        <button
          className=" booking-panel__button booking-panel__button_prev"
          onClick={() => onClickPrev()}
          hidden={!prev}>
          {prev}
        </button>
        <div className="booking-panel__title">{title}</div>
        <button
          className=" booking-panel__button booking-panel__button_next"
          onClick={() => onClickNext()}
          hidden={!next}>
          {next}
        </button>
      </div>
      <ProgressBar color={color} now={now} />
    </div>
  );
};

export default BookingPanel;
