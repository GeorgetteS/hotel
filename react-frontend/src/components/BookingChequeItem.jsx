import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

const BookingChequeItem = ({
  oldPrice,
  price,
  discount,
  roomInfo,
  roomTitle,
  tariffName,
  number,
  isOneRoom,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  const toggleSpoiler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="apartments-selection__room room-apartments">
      <button className="room-apartments__display " onClick={toggleSpoiler} aria-expanded={true}>
        <div className="room-apartments__title">
          <div className="room-apartments__room-number">
            {classNames((isOneRoom && 'Номер:') || `Номер ${number}:`)}
          </div>
          <div className="room-apartments__price">{price} ₽</div>
        </div>
        <div className={classNames('room-apartments__room-type', isOpen && 'open')}>
          {roomTitle}
        </div>
      </button>
      <div
        className="room-apartments__info info-room-apartments"
        ref={contentRef}
        aria-hidden={!isOpen}
        style={{
          maxHeight: isOpen && contentHeight,
        }}>
        <div className="info-room-apartments__secondary info-room-apartments__item">
          <div className="info-room-apartments__title">
            {classNames(
              `${roomInfo.countOfAdults} взрослый`,
              roomInfo.children.length && roomInfo.children.length + ' ребёнок',
            )}
          </div>
          <div className="info-room-apartments__info">
            <span className="info-room-apartments__text">{tariffName}</span>
            <span className="info-room-apartments__price">{oldPrice} ₽</span>
          </div>
        </div>
        {discount ? (
          <div className="info-room-apartments__discount info-room-apartments__item ">
            <div className="info-room-apartments__info">
              <span className="info-room-apartments__text">Скидка</span>
              <span className="info-room-apartments__price">-{oldPrice - price} ₽</span>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className="info-room-apartments__service info-room-apartments__item ">
          <div className="info-room-apartments__title">Услуги</div>
          <ul className="service-room-apartments">
            <li className="service-room-apartments__item">
              <div className="service-room-apartments__option">Завтрак "Шведский стол"</div>
              <div className="service-room-apartments__include">вкл</div>
            </li>
            <li className="service-room-apartments__item">
              <div className="service-room-apartments__option">Завтрак "Шведский стол"</div>
              <div className="service-room-apartments__include">вкл</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingChequeItem;
