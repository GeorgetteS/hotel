import BookingButton from '../UI/BookingButton/BookingButton';

const TariffOption = ({ tariffIcons, showButton, extraPlace, ratio }) => {
  return (
    <li className="tariffs__room">
      <div className="tariffs__info">
        <div className="tariffs__price-sale">
          <span className="tariffs__discount">- 20%</span>
          <span className="tariffs__sale">5 000 ₽</span>
        </div>

        <div className="tariffs__info-row">
          <div className="tariffs__quests">
            {tariffIcons.map((icon) => {
              return (
                <div className="tariffs__icon" key={icon}>
                  <img src={icon} alt="" />
                </div>
              );
            })}
          </div>
          <div className="tariffs__price">5 000 ₽</div>
        </div>
      </div>
      {showButton ? (
        <div className="tariff__button">
          <BookingButton />
        </div>
      ) : (
        <div className="tariffs__input ">
          <input readOnly placeholder={'Выбрать'} />
          <span className="triangle"></span>
        </div>
      )}
    </li>
  );
};

export default TariffOption;
