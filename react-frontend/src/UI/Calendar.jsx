import DateRange from 'react-date-range/dist/components/DateRange';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import ru from 'date-fns/locale/ru';
import { addDays } from 'date-fns';

import useMatchMedia from '../hooks/useMatchMedia';

const Calendar = ({ date, className }) => {
  const { isMobile } = useMatchMedia();

  return (
    <div className={className}>
      <DateRange
        editableDateInputs={false}
        onChange={(item) => date.setDate(item)}
        moveRangeOnFirstSelection={false}
        ranges={date.getDate()}
        months={2}
        direction={isMobile ? 'vertical' : 'horizontal'}
        showDateDisplay={false}
        showMonthArrow={true}
        showMonthAndYearPickers={false}
        locale={ru}
        minDate={new Date()}
        maxDate={addDays(new Date(), 15)}
        color={'rgba(157, 163, 190)'}
      />
    </div>
  );
};

export default Calendar;
