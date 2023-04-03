import BookingButton from '../UI/BookingButton/BookingButton';

const TariffOption = ({ tariffIcons, showButton }) => {
  // console.log(tariffIcons);

  function renderSwitch(iconItem) {
    switch (iconItem) {
      case 'adult':
        return '../img/snowflake.svg';

      case 'child':
        return '../img/tv.svg';

      case 'plus':
        return '../img/hairdryer.svg';
      default:
    }
  }

  return (
    <li className="tariffs__room">
      <div className="tariffs__info">
        <div className="tariffs__price-sale">
          <span className="tariffs__discount">- 20%</span>{' '}
          <span className="tariffs__sale">5 000 ₽</span>
        </div>

        <div className="tariffs__info-row">
          <div className="tariffs__quests">
            {tariffIcons.map((icon) => {
              // console.log(icon, 'ar');
              return (
                <div className="tariffs__icon">
                  <img src={renderSwitch(icon)} alt="" />
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
