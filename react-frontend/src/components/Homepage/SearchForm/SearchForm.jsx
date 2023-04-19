import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import QuestSelect from '../QuestSelect';
import { bookingCountOfQuestsSelector } from '../../../redux/booking/bookingSelector';

import useHide from '../../../hooks/useHide';

import { useHideQuestsCounter } from './useHideQuestsCounter';
import useDate from '../../../hooks/useDate';
import Calendar from '../../../UI/Calendar';

const SearchForm = () => {
  const refCalendar = useRef(null);
  const refCounter = useRef(null);

  const [openCalendar, setOpenCalendar] = useHide(refCalendar);
  const [showQuestSelector, setShowQuestSelector, setQuests] = useHideQuestsCounter(refCounter);

  const date = useDate();

  const countOfQuests = useSelector(bookingCountOfQuestsSelector());

  const navigate = useNavigate();

  return (
    <>
      <div className="fullscreen__search-form search-form">
        <div className="search-form__body">
          <div className="search-form__form">
            <div className="search-form__calendar-panel" ref={refCalendar}>
              {openCalendar && (
                <Calendar date={date} className="calendarElement scroll-bar calendarWrapper " />
              )}

              <div className="search-form__arrival search-form__item arrival">
                <div className="arrival__input">
                  <input
                    type="text"
                    readOnly
                    onClick={() => setOpenCalendar((prev) => !prev)}
                    value={date.startDate}
                    className="arrival__date"
                  />
                </div>
                <div className="search-form__label">Заезд</div>
              </div>
              <div className="search-form__departure search-form__item departure">
                <div className="departure__input">
                  <input
                    type="text"
                    readOnly
                    onClick={() => setOpenCalendar((prev) => !prev)}
                    value={date.endDate}
                    className="arrival__date"
                  />
                </div>
                <div className="search-form__label">Выезд</div>
              </div>
            </div>
            <div
              className={classNames(
                `search-form__quests search-form__item quests`,
                showQuestSelector && 'active',
              )}
              ref={refCounter}>
              <input
                className="quests counter"
                type="text"
                readOnly
                value={countOfQuests}
                onClick={() => setShowQuestSelector((prev) => !prev)}
              />
              <div className="search-form__label">Гости</div>
              {
                <QuestSelect
                  handleSelector={() => setQuests()}
                  className={showQuestSelector && 'active'}
                />
              }
            </div>
          </div>
          <button className="search-form__search" onClick={() => navigate('/booking')}>
            <div className="search-form__search-icon">
              <img src="./img/search.svg" alt="" />
            </div>
            <input type="button" value="Найти номер" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
