import classNames from 'classnames';
import { useSelector } from 'react-redux';

import useDate from '../hooks/useDate';

import {
  bookingRoomsSelector,
  bookingCountOfQuestsSelector,
} from '../redux/booking/bookingSelector';

function Result({ setShowForm, disableResult }) {
  const countOfQuests = useSelector(bookingCountOfQuestsSelector());
  const { startDateWithoutYear, endDateWithoutYear } = useDate();
  const rooms = useSelector(bookingRoomsSelector());

  const numRooms = rooms.length;

  let message;

  if (numRooms === 1) {
    message = `${numRooms} номер`;
  } else if (numRooms >= 2 && numRooms <= 4) {
    message = `${numRooms} номера`;
  } else {
    message = `${numRooms} номеров`;
  }

  return (
    <div className="result">
      <div className="result__body">
        <div
          className={classNames('result__row', disableResult && 'disable-result')}
          onClick={() => setShowForm()}>
          <div className="result__date">
            {startDateWithoutYear} - {endDateWithoutYear}
          </div>
          <div className="result__room-info">
            <div className="result__rooms">{message}</div>
            <div className="result__quests">
              <div className="result__countOfQuests">{countOfQuests}</div>
              <div className="result__icon">
                <img src="./img/person.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Result;
