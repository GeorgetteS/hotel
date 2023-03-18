import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import format from 'date-fns/format/index';

import DateRange from 'react-date-range/dist/components/DateRange';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import ru from 'date-fns/locale/ru';
import { addDays } from 'date-fns';
import classNames from 'classnames';

import QuestSelect from './QuestSelect';
import { bookingCountOfQuestsSelector } from '../../../redux/booking/bookingSelector';
import { setChildError, setCountOfQuests } from '../../../redux/booking/bookingSlice';

import useHide from '../../../hooks/useHide';

const SearchForm = () => {
  const refCalendar = useRef(null);
  const refCounter = useRef(null);

  const [openCalendar, setOpenCalendar] = useHide(refCalendar);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ]);
  const [showQuestSelector, setShowQuestSelector] = useState(false);

  const countOfQuests = useSelector(bookingCountOfQuestsSelector());
  const dispatch = useDispatch();

  const setQuests = () => {
    setShowQuestSelector(false);
    dispatch(setCountOfQuests());
    dispatch(setChildError());
  };

  useEffect(() => {
    const hideOnClickOutside = (e) => {
      if (refCounter.current && !e.composedPath().includes(refCounter.current)) {
        setQuests();
      }
    };
    const hideOnEscape = (e) => {
      if (e.key === 'Escape') {
        setQuests();
      }
    };
    document.addEventListener('keyup', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
    return () => {
      document.removeEventListener('keyup', hideOnEscape, true);
      document.removeEventListener('click', hideOnClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div ref={refCalendar}>
        {openCalendar && (
          <DateRange
            editableDateInputs={false}
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            className="calendarElement"
            direction="horizontal"
            showDateDisplay={false}
            showMonthArrow={false}
            showPreview={false}
            showMonthAndYearPickers={false}
            locale={ru}
          />
        )}
      </div>
      <div className="fullscreen__search-form search-form">
        <div className="search-form__body">
          <div className="search-form__form">
            <div className="search-form__arrival search-form__item arrival">
              <div className="arrival__input">
                <input
                  type="text"
                  readOnly
                  onClick={() => setOpenCalendar((prev) => !prev)}
                  value={`${format(range[0].startDate, 'dd MMMM yyyy', { locale: ru })}`}
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
                  value={`${format(range[0].endDate, 'dd MMMM yyyy', { locale: ru })}`}
                  className="arrival__date"
                />
              </div>
              <div className="search-form__label">Выезд</div>
            </div>
            <div
              // eslint-disable-next-line max-len
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
          <div className="search-form__search">
            <div className="search-form__search-icon">
              <img src="./img/search.svg" alt="" />
            </div>
            <input type="button" value="Найти номер" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
