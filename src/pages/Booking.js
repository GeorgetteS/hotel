import Result from "../components/Result";
import { useEffect, useRef, useState } from "react";
import Kid from "../components/Kid";

function Booking({ children }) {

	const refOne = useRef(null)
	const refTwo = useRef(null)


	const [showQuests, setShowQuests] = useState(false)
	const [showChild, setShowchild] = useState(false)
	const [childArr, setChildArr] = useState([])
	const [showChildList, setShowChildList] = useState(true)

	const [questsInputValue, setQuestsInputValue] = useState('1 Взрослый')



	useEffect(() => {
		document.addEventListener('click', hideOnClickOutside )
	}, [])



	const addChild = (e) => {
		// console.log(e.target)
		// console.log(refOne.current)
		if(e.target === refTwo.current){
			return
		//  setShowchild()
		 return
		}
		if(childArr.length === 4){
			setShowChildList(prev => !prev)
		}
		setChildArr((prev) => [...prev, {value:e.target.innerHTML, id: prev.length }])
	}

	function deleteChild(id){
		if(childArr.length === 5){
			setShowChildList(prev => !prev)
		}
		setChildArr((prev) =>  prev.filter((item) =>{
			return item.id !== id
		})
		)
			// console.log(childArr)

	}

	const handleQuestsMenu = () => {
		setShowQuests((prev) => !prev);
	}

	const handleChildsMenu = () => {
		setShowchild((prev) => !prev);
	}

	const changeInputValue = (e) => {
		// console.log(refOne.current)

		if(e.target === refOne.current){
			return
		}

		// if(e.target.closest()){
		setQuestsInputValue(e.target.innerHTML)

		// }

	}

	const hideOnClickOutside = (e)=>{

		console.log(refOne.current)
		console.log(e.target)
		console.log(showQuests)

		if(showQuests){
			if(e.target !== refOne){
				// setShowQuests(false)
			}
		}
		// if(e.target !== refTwo){

		// 	setShowchild(false)
		// }
	}

	return (
		<main className="booking">
			{children}

			<div className="container">
				<div className="booking__title">Бронирование Номеров</div>
				<div className="booking__body">

					<div className="booking__content-container">
						<form action="post" className="booking__form form-booking">
							<div className="form-booking__title">Выберите даты заезда, выезда и количество гостей</div>

							<div className="form-booking__date form-date">
								<div className="form-date__item form-date__item_arrival">
									<div className="form-date__title">Дата заезда
									</div>
									<div className="form-date__input booking-input">
										<input type="text" readOnly placeholder="9 Декабря 2022" />
										<div className="form-date__icon"><img src="./img/calendar.svg" alt="" /></div>
									</div>
								</div>
								<div className="form-date__item form-date__item_departure">
									<div className="form-date__title">Дата выезда
									</div>
									<div className="form-date__input booking-input">
										<input type="text" readOnly placeholder="10 Декабря 2022" />
										<div className="form-date__icon"><img src="./img/calendar.svg" alt="" /></div>
									</div>
								</div>
							</div>
							<div className="form-booking__quests form-quests">
								<h5 className="form-quests__title">Размещение в номере</h5>
								<h6 className="form-quests__subtitle">Взрослые от 6 лет и старше</h6>
								<div className="form-quests__row">
									<div className={`form-quests__item quests-adult  ${showQuests ? 'active' : ''}`}>
										<div className={`quest-adult__input booking-input booking-input_padding`} onClick={handleQuestsMenu}>
											<input type="text" value={questsInputValue} readOnly />
											<div className="quest-adult__icon quests-icon"><img src="./img/person.svg" alt="" /></div>
											<span className={`triangle ${showQuests ? 'active' : ''}`}></span>
										
												<ul className={`quests-adult__list quests-list ${showQuests ? 'active' : ''}`} onClick={changeInputValue} ref={refOne}>
													<li className="quests-list__item">1 Взрослый</li>
													<li className="quests-list__item">2 Взрослых</li>
													<li className="quests-list__item">3 Взрослых</li>
													<li className="quests-list__item">4 Взрослых</li>
													<li className="quests-list__item">5 Взрослых</li>
													<li className="quests-list__item">6 Взрослых</li>
													<li className="quests-list__item">7 Взрослых</li>
												</ul>
										
										</div>
									</div>

									<div className="form-quests__item ">

										<div className={`quests-child ${showChildList ? '' : 'display-none'}`}  onClick={handleChildsMenu}>
											{/* <input type="text" readOnly placeholder="Добавить детей" /> */}

											 <div className="quests-child__input booking-input booking-input_padding">
												<input type="text" readOnly placeholder="Добавить детей" />
												{/* <input type="text" readOnly placeholder="Добавить детей" />
												<h5 className="form-quests__title">Размещение в номере</h5>
												<h5 className="form-quests__title">Размещение в номере</h5> */}


												{/* <input type="text" readOnly placeholder="Добавить детей" /> */}
												<span className="quests-child__icon quests-icon"></span>
												<ul className={`quests-child__list quests-list quests-list_low-height ${showChild ? 'active' : ''}`} ref = {refTwo} onClick={addChild}>
													<li className="quests-list__item">Ребенок до 1 года</li>
													<li className="quests-list__item">Ребенок от  1 до 3 лет</li>
													<li className="quests-list__item">Ребенок от 3 до 10 лет</li>
												</ul>
											</div>


										</div>
										{childArr.map((item) => {
											return (
												<Kid key={item.id} id = {item.id} deleteKid={(id) => deleteChild(id)} value={item.value} />
											)
										})}
										{/* <div className="booking-input booking-input_padding form-quests__kid">
											<input type="text" readOnly placeholder="Добавить детей" />
											<div className="quest-adult__icon quests-icon"><img src="./img/child.svg" alt="" /></div>
										</div> */}
										{/* <input type="text" readOnly placeholder="Добавить детей" />
										<input type="text" readOnly placeholder="Добавить детей" /> */}
									</div>
								</div>
							</div>
							<button type="submit" className="form-booking__submit">Найти</button>
						</form>


					</div >
				</div>

			</div >

			{/* <Result /> */}

		</main >

	)
}



export default Booking;