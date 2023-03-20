import format from 'date-fns/format/index';
import ru from 'date-fns/locale/ru';

import { useSelector, useDispatch } from 'react-redux';

import { bookingRangeSelector } from '../redux/booking/bookingSelector';
import { setRange } from '../redux/booking/bookingSlice';

export default function useDate() {
  const dispatch = useDispatch();

  const range = useSelector(bookingRangeSelector());

  if (!range) {
    return;
  }

  function transformToDate(range) {
    return range.map((item) => {
      return {
        startDate: new Date(item.startDate),
        endDate: new Date(item.endDate),
        key: item.key,
      };
    });
  }
  function transformToTime(range) {
    const newStartDate = new Date(range.selection.startDate).getTime();
    const newEndDate = new Date(range.selection.endDate).getTime();
    return {
      startDate: newStartDate,
      endDate: newEndDate,
      key: range.selection.key,
    };
  }

  const changeDate = (date) => {
    dispatch(setRange(transformToTime(date)));
  };

  const date = transformToDate(range);

  const startDate = format(date[0].startDate, 'dd MMMM yyyy', { locale: ru });
  const endDate = format(date[0].endDate, 'dd MMMM yyyy', { locale: ru });

  return {
    getDate() {
      return transformToDate(range);
    },
    setDate(time) {
      changeDate(time);
    },
    startDate,
    endDate,
  };
}
