import Slider from "./Slider";

function Card({ title, text, images, icons, quests }) {

	// const [currentIndex, setCurrentIndex] = useState(0);

	// useEffect(() => {
	// 	const lastIndex = images.length - 1;
	// 	if (currentIndex < 0) {
	// 		setCurrentIndex(images.length - 1)
	// 	}
	// 	if (currentIndex > lastIndex) {
	// 		setCurrentIndex(0)
	// 	}
	// }, [currentIndex, images])



	// console.log(icons)
	return (
		<div className="gallery__room-card room-card">
			<div className="room-card__column">
				{/* <div className="room-card__slider slider">

					<div className="slider__hover hover-slider">
						<div className="hover-slider__icons">
							{
								icons.map((item, index) => {
									return (<div className="hover-slider__icon"><img src={item} alt="" /></div>)
								})
							}
							<div className="hover-slider__icon"><img src="./img/snowflake.svg" alt="" /></div>
						<div className="hover-slider__icon"><img src="./img/hairdryer.svg" alt="" /></div>
						<div className="hover-slider__icon"><img src="./img/tv.svg" alt="" /></div>

						</div>
						<div className="hover-slider__quests hover-quests">
							<div className="hover-quests__number">{quests}</div>
							<div className="hover-quests__icon"><img src="./img/person.svg" alt="" /></div>
						</div>
					</div>

					{images.map((item, itemIndex) => {
						let position = "nextSlide";

						if (itemIndex === currentIndex) {
							position = 'activeSlide'
						}

						if (itemIndex === currentIndex - 1 || (currentIndex === 0 && itemIndex === images.length - 1)) {
							position = 'lastSlide';
						}


						return (

							<div className={`slider__img ${position}`}>
								<img src={item} alt="xcvbn" />
							</div>)
					})}



					<button className="slider__prev prev" onClick={() => setCurrentIndex(prev => prev - 1)}><span className=" _icon-arrow_left"></span></button>
					<button className="slider__next next" onClick={() => setCurrentIndex(prev => prev + 1)}><span className=" _icon-arrow_right "></span></button>

				</div> */}
				<Slider images={images} icons={icons} quests ={quests}/>

				<div className="room-card__info">
					<div className="room-card__title">
						<div className=" title">{title}</div>
						<div className="room-card__cost"><span className="opacity" > 1 ночь 1 гость</span> <span className="no-opacity" >8 999 руб.</span> </div>
					</div>
					<div className="room-card__text">
						{text}

					</div>
				</div>
				<button className="room-card__btn">Проверить наличие</button>
			</div>
		</div>
	)
}

export default Card