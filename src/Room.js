
import Result from "./components/Result";
import Slider from "./components/Slider";


function Room({images, icons, quests}) {



	return (
		<main className="room">

			<div className="container">
			<Result className = {"room__result"}/>

				<div className="room__row">
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
					<div className="room__info">
						<div className="room-card__info">
							<div className="room-card__title title">Ридженси Люкс</div>
							<div className="room-card__text">Ридженси Люкс
								Насладитесь отдыхом в уютном люксе площадью 70 кв. м. В номере есть просторная гостиная, удобное рабочее место, душевая с ванной и большая кровать (King).
							</div>
						</div>
						<button className="room-card__btn">Проверить наличие</button>
					</div>
				</div>
			</div>
		</main>
	)
}


export default Room