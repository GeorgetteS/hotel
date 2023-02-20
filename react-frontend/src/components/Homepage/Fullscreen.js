// import CalendarComp from './CalendarComp'
import { useEffect, useState, useRef } from 'react';
import format from 'date-fns/format/index';
import { previousDay } from 'date-fns';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import ru from 'date-fns/locale/ru';
import QuestSelect from './QuestSelect';


function Fullscreen() {

	const refOne = useRef(null)
	const refTwo = useRef(null)

	const [openCalendar, setOpenCalendar] = useState(false)
	const [range, setRange] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 1),
			key: 'selection'
		}
	]
	)
	const [showQuestSelector, setShowQuestSelector] = useState(false)
	const [countOfQuests, setCountOfQuests] = useState(1)



	useEffect(() => {
		// setDateValue(format(new Date(), 'MM/dd/yyyy'))
		document.addEventListener('keyup', hideOnEscape, true)
		document.addEventListener('click', hideOnClickOutside, true)
	}, [])

	const hideOnEscape = (e) => {
		if (e.key === 'Escape') {
			setOpenCalendar(false)
			setShowQuestSelector(false)
		}
	}



	const hideOnClickOutside = (e) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			setOpenCalendar(false)
		}
		if (refTwo.current && !refTwo.current.contains(e.target)) {
			setShowQuestSelector(false)
		}else if(showQuestSelector && refTwo.current === e.target){
			setShowQuestSelector(false)
		}

	}



	return (
		<section className="fullscreen">
			<div className="fullscreen__bg"><img src="./img/main__bg.png" alt="" /></div>
			<div className="container">
				<div className="fullscreen__body">
					{/* <div className="fullscreen__top" style={{visibility:"hidden"}}></div> */}
					<div className="fullscreen__text text-fullscreen">
						<h1 className="text-fullscreen__title">
							Гостиница,<br />
							в которой хочется остаться!
						</h1>
						<div className="text-fullscreen__adress">
							<div className="text-fullscreen__icon"><img src="./img/direction.svg" alt="" /></div>
							<div className="text-fullscreen__adress-text">Курорт “LoremIpsum”, Ростов-на-Дону, Россия</div>
						</div>
					</div>
					<div ref={refOne} >
						{openCalendar && <DateRange
							editableDateInputs={false}
							onChange={item => setRange([item.selection])}
							moveRangeOnFirstSelection={false}
							ranges={range}
							months={2}
							className='calendarElement'
							direction='horizontal'
							// direction='vertical'
							showDateDisplay={false}
							showMonthArrow={false}
							showPreview={false}
							showMonthAndYearPickers={false}
							locale={ru}
						/>}
					</div >
					<div className="fullscreen__search-form search-form" 	>
						<div ref={refTwo}>
							{ <QuestSelect
								handleSelector={() => setShowQuestSelector(false)}
								changeCountOfQuests={(item) => setCountOfQuests(item)}
								className = {showQuestSelector && 'active'}
							/>}
						</div>

						<div className="search-form__body">
							<div className="search-form__form" >
								<div className="search-form__arrival search-form__item arrival">
									<div className="arrival__input">
										<input type="text" readOnly
											onClick={() => setOpenCalendar((prev) => !prev)}
											value={`${format(range[0].startDate, 'MM/dd/yyyy')}`}
											className="arrival__date" />
									</div>
									<div className="search-form__label">Заезд</div>

								</div>
								<div className="search-form__departure search-form__item departure">
									<div className="departure__input">
										<input type="text" readOnly
											onClick={() => setOpenCalendar((prev) => !prev)}
											value={`${format(range[0].endDate, 'MM/dd/yyyy')}`}
											className="arrival__date" />
									</div>
									<div className="search-form__label">Выезд</div>

								</div>
								<div className={`search-form__quests search-form__item quests ${showQuestSelector ? 'active' :  ''}`} onClick={() => setShowQuestSelector(prev => !prev)}>
									<input type="text" readOnly value={countOfQuests} className="quests counter" />
									<div className="search-form__label">Гости</div>


								</div>
							</div >

							<div className="search-form__search">
								<div className="search-form__search-icon"><img src="./img/search.svg" alt="" /></div >
								<input type="button" value="Найти номер" />
							</div>
						</div>
					</div>
				</div>
				<button className="fullscreen__down-btn _icon-down"></button>

			</div>
		</section>
	)
}


export default Fullscreen;