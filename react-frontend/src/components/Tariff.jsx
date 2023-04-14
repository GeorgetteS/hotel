import TariffSelect from './TariffSelect';

import calcPrice from '../utils/calcPrice';
import writeDeclinationNights from '../utils/writeDeclinationNights';

import useDate from '../hooks/useDate';

const Tariff = ({ title, ratio, clauses, extraPlace, tariffIcons, price, rooms }) => {
  // console.log(prices);

  const { countOfDays } = useDate();

  const prices = rooms.map((room) => {
    const priceInfo = calcPrice(
      price,
      countOfDays,
      room.countOfAdults + room.children.length,
      ratio,
    );
    // console.log(priceInfo);
    return {
      ...priceInfo,
    };
  });

  return (
    <div className="tariffs__item">
      <div className="tariffs__row">
        <div className="tariffs__description">
          <div className="tariffs__name icon-with-text">
            <div className="tariffs__icon">
              <img src={title.icon} alt="" />
            </div>
            <span>{title.name}</span>
          </div>
          <ul className="tariffs__list">
            {clauses.map((claus) => {
              return (
                <li key={claus.name} className="tariffs__clause icon-with-text">
                  <div className="tariffs__icon">
                    <img src={claus.icon} alt="" />
                  </div>
                  <span>{claus.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="tariffs__panel">
          <div className="tariffs__nights">
            Стоимость за{' '}
            <b>
              {countOfDays} {writeDeclinationNights(countOfDays)}
            </b>
          </div>
          <TariffSelect
            ratio={ratio}
            prices={prices}
            extraPlace={extraPlace}
            tariffIcons={tariffIcons}
          />
        </div>
      </div>
    </div>
  );
};

export default Tariff;
