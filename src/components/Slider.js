
import { useState, useEffect } from "react";

function Slider({ icons, images, quests }) {


	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const lastIndex = images.length - 1;
		if (currentIndex < 0) {
			setCurrentIndex(images.length - 1)
		}
		if (currentIndex > lastIndex) {
			setCurrentIndex(0)
		}
	}, [currentIndex, images])



	return (
		<div className="slider">

			<div className="slider__hover hover-slider">
				<div className="hover-slider__icons">
					{
						icons.map((item, index) => {
							return (<div className="hover-slider__icon"><img src={item} alt="" /></div>)
						})
					}
					{/* <div className="hover-slider__icon"><img src="./img/snowflake.svg" alt="" /></div>
			<div className="hover-slider__icon"><img src="./img/hairdryer.svg" alt="" /></div>
			<div className="hover-slider__icon"><img src="./img/tv.svg" alt="" /></div> */}

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

		</div>
	)
}



export default Slider