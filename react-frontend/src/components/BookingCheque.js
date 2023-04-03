const BookingCheque = () => {
  return (
    <div className="selection-booking__menu menu-selection">
      <div className="menu-selection__body">
        <div className="menu-selection__title">Ваше бронирование</div>
        <div className="menu-selection__date date-selection">
          <div className="date-selection__nights">1 ночь</div>
          <div className="date-selection__date">
            <div className="date-selection__row">
              <div className="date-selection__start-date date-selection__item">
                <div className="date-selection__day">21 марта</div>
                <div className="date-selection__week-day">Вторник</div>
              </div>
              <span></span>
              <div className="date-selection__end-date date-selection__item">
                <div className="date-selection__day">21 марта</div>
                <div className="date-selection__week-day">Вторник </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-selection__apartments apartments-selection">
          <div className="apartments-selection__body">
            <div className="apartments-selection__room room-apartments">
              <div className="room-apartments__display">
                <div className="room-apartments__title">
                  <div className="room-apartments__room-number">Номер 1:</div>
                  <div className="room-apartments__price">7 200 ₽</div>
                </div>
                <div className="room-apartments__room-type">Стандартный с двумя кроватями</div>
              </div>
              <div className="room-apartments__info info-room-apartments">
                <div className="info-room-apartments__secondary info-room-apartments__item">
                  <div className="info-room-apartments__title">1 взрослый, 1 ребёнок</div>
                  <div className="info-room-apartments__info">
                    <span className="info-room-apartments__text">Лучшая цена дня с завтраком</span>
                    <span className="info-room-apartments__price">5 400 ₽</span>
                  </div>
                </div>
                <div className="info-room-apartments__secondary info-room-apartments__item">
                  <div className="info-room-apartments__title">1 взрослый, 1 ребёнок</div>
                  <div className="info-room-apartments__info">
                    <span className="info-room-apartments__text">Лучшая цена дня с завтраком</span>
                    <span className="info-room-apartments__price">5 400 ₽</span>
                  </div>
                </div>
                <div className="info-room-apartments__discount info-room-apartments__item ">
                  <div className="info-room-apartments__info">
                    <span className="info-room-apartments__text">Скидка</span>
                    <span className="info-room-apartments__price">-800 ₽</span>
                  </div>
                </div>
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
          </div>
        </div>
        <div className="menu-selection__total-price">10  720  ₽</div>
        <div className="menu-selection__continue">
          <button className="menu-selection__button">Продолжить</button>
        </div>
      </div>
    </div>
  );
};

export default BookingCheque;
