import { useRef, useState } from "react"


function KidInput({id}){
	const [kidValue, setKidValue] = useState('Выбрать')
	const [showKidList, setShowKidList] = useState(false)

	const refOne = useRef(null)

	const changeKidValue = (e)=>{
		console.log(e.target.innerHtml);
		if(e.target === refOne.current){
			return
		}
		setKidValue(e.target.innerHTML);
		setShowKidList(false)
	}

	return(
	<div className="room-select__kid kid-select">
	<div className="kid-select__column" >
		<div className="kid-select__age">Возраст {id + 1} ребенка</div>
		<div className="kid-select__control" >
			<input type="text" hidden />
			<div className="kid-select__view" onClick={() => setShowKidList(prev => !prev)}>
				{kidValue}
				<span className="triangle"></span>

			</div>
			<ul className={`kid-select__list  ${showKidList ? 'active' : ''}`} ref={refOne} onClick = {changeKidValue} >
				<li>Ребенок до 1 года</li>
				<li>Ребенок от  1 до 3 лет</li>
				<li>Ребенок от 3 до 10 лет</li>
			</ul>
		</div>

	</div>
</div>

	)

}


export default KidInput