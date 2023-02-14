// import React, { useState } from 'react';
// import { DateRange } from 'react-date-range';
// import format from 'date-fns/format/index';
// import { addDays } from 'date-fns';

// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file

// function CalendarComp({ handleDate }) {

// 	const [range, setRange] = useState([
// 		{
// 			startDate: new Date(),
// 			endDate: addDays(new Date(), 7),
// 			key: 'selection'
// 		}
// 	]
// 	)



// 	// console.log(format(range[0].startDate, 'MM/dd/yyyy'))

// 	// inputValue



// 	function handle(item){

// 		handleDate(range);
// 		setRange([item.selection]);
// 	}

// 	// handleDate

// 	//  const	handleSelect = (date) =>{
// 	// 	console.log(format(date, 'MM/dd/yyyy'));
// 	// 	handleDate(format(date, 'MM/dd/yyyy'))
// 	//  }



// 	return (
// 		<div className="calendarWrap">

// 			<DateRange
// 				editableDateInputs={false}
// 				// onChange={item => setRange([item.selection])}
// 				onChange={item => handle(item)}
// 				moveRangeOnFirstSelection={false}
// 				ranges={range}
// 				months={2}
// 				className ='calendarElement'
// 				direction='horizontal'

// 			// range = {range}
// 			// onChange = {handleDate}


// 			/>


// 		</div>
// 	)
// }








// export default CalendarComp 