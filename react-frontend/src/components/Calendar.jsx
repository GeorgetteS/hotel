import DateRange from 'react-date-range/dist/components/DateRange';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import ru from 'date-fns/locale/ru';
import { addDays } from 'date-fns';

const Calendar = ({ date, className, ref }) => {
  return (
    <div className={className}>
      <DateRange
        editableDateInputs={false}
        onChange={(item) => date.setDate(item)}
        moveRangeOnFirstSelection={false}
        ranges={date.getDate()}
        months={2}
        // className="calendarElement"
        direction="horizontal"
        showDateDisplay={false}
        showMonthArrow={false}
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
