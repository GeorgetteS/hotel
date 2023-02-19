import { useEffect, useRef, useState } from "react";
import KidInput from "./KidInput";

function QuestSelect({ handleSelector, changeCountOfQuests, className }) {

	const [adultCount, setAdultCount] = useState(1)
	const [kidCount, setKidCount] = useState(0)
	const [kids, setKids] = useState([])

	const refOne = useRef(null);
	const refTwo = useRef(null);


	const changeInputCount = (e) => {
		if (refOne.current.contains(e.target)) {
			changeAdultCount(e)
		} else if (refTwo.current.contains(e.target)) {
			changeChildCount(e)
		}
	}
	function changeAdultCount(e) {
		if (e.target.classList.contains('plus') && adultCount !== 7) {
			setAdultCount(prev => prev + 1)
		} else if (e.target.classList.contains('minus') && adultCount !== 1) {
			setAdultCount(prev => prev - 1)
		}
	}

	function changeChildCount(e) {
		if (e.target.classList.contains('plus') && kidCount !== 5) {
			setKidCount(prev => prev + 1);
			addKid()
		} else if (e.target.classList.contains('minus') && kidCount !== 0) {
			setKidCount(prev => prev - 1)
			deleteKid(kids.length - 1)
		}
	}

	function addKid() {
		setKids(prev => [...prev, { id: kidCount }])

	}
	function deleteKid(id) {

		setKids(prev => prev.filter(item => {
			return item.id !== id
		}))

	}


	let questsCount = adultCount + kidCount

	function closeSelector() {
		handleSelector()
		console.log(questsCount);
		changeCountOfQuests(questsCount)
	}



	return (
		<div className={`quest-select ${className}`}>
			<div className="quest-select__body">
				<div className="quest-select__title">Количество гостей</div>
				<div className="quest-select__room room-select">
					<div className="room-select__title">Номер 1</div>
					<div className="room-select__row" onClick={changeInputCount}>
						<div className="room-select__column">
							<span className="room-select__subtitle">Взрослые</span>
							<div className="room-select__selector" ref={refOne}>
								<div className="room-select__input" >{adultCount}</div>
								<input value={adultCount} name='adult' hidden readOnly type="text" />
								<button className="plus" ></button>
								<button className="minus"></button>
							</div>
						</div>
						<div className="room-select__column">
							<span className="room-select__subtitle">Дети младше 10 лет</span>
							<div className="room-select__selector" ref={refTwo}>
								<div className="room-select__input">{kidCount}</div>
								{/* <input value={0} readOnly type="text" /> */}
								<button className="plus" ></button>
								<button className="minus"></button>
							</div>
						</div>

					</div>
					{/* <div className="room-select__kid kid-select">
						<div className="kid-select__column" >
							<div className="kid-select__age">Возраст 1 ребенка</div>
							<div className="kid-select__control" >
								<input type="text" hidden />
								<div className="kid-select__view" onClick={() => setShowKidList(prev => !prev)}>
									{kidValue}
									<span className="triangle"></span>

								</div>
								<ul className={`kid-select__list  ${showKidList ? 'active' : ''}`} onClick={changeKidValue } >
									<li>Ребенок до 1 года</li>
									<li>Ребенок от  1 до 3 лет</li>
									<li>Ребенок от 3 до 10 лет</li>
								</ul>
							</div>

						</div>
					</div> */}
					{/* <KidInput/> */}
					{kids.map((item) => {
						return (<KidInput key={item.id} id={item.id} />)
					})
					}

				</div>


				<div className="quest-select__control">
					<button hidden className="quest-select__add ">Добавить еще комнату</button>
					<button className="quest-select__finish" onClick={closeSelector}>Готово</button>
				</div>
			</div>
		</div>

	)
}


export default QuestSelect