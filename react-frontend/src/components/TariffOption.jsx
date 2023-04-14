import BookingButton from '../UI/BookingButton/BookingButton.jsx';

const TariffOption = ({ tariffIcons, showButton, oldPrice, price, discount }) => {
  return (
    <li className="tariffs__room">
      <div className="tariffs__info">
        {discount ? (
          <div className="tariffs__price-sale">
            <span className="tariffs__discount">- {discount}%</span>
            <span className="tariffs__sale">{oldPrice} ₽</span>
          </div>
        ) : (
          ''
        )}

        <div className="tariffs__info-row">
          <div className="tariffs__quests">
            {tariffIcons.map((icon, index) => {
              return (
                <div className="tariffs__icon" key={index}>
                  <img src={icon} alt="" />
                </div>
              );
            })}
          </div>
          <div className="tariffs__price">{price} ₽</div>
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
