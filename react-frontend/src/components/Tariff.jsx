import TariffSelect from './TariffSelect';

import writeDeclinationNights from '../utils/writeDeclinationNights';

import useDate from '../hooks/useDate';

const Tariff = ({
  title,
  ratio,
  clauses,
  extraPlace,
  price,
  roomTitle,
  countOfAvailiableRooms,
}) => {
  const { countOfDays } = useDate();

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
            Стоимость за <b>{writeDeclinationNights(countOfDays)}</b>
          </div>
          <TariffSelect
            ratio={ratio}
            tariffPrice={price}
            extraPlace={extraPlace}
            title={title.name}
            roomTitle={roomTitle}
            countOfAvailiableRooms={countOfAvailiableRooms}
          />
        </div>
      </div>
    </div>
  );
};

export default Tariff;
