import Card from "../components/Card";

function Rooms(props) {


	return (
		<main className="rooms">
			<div className="rooms__main main-rooms">

				<div className="container">
					<div className="main-rooms__row">
						<div className="main-rooms__column">
							<h1 className="main-rooms__title title">Номера</h1>
							<p className="main-rooms__text">
								“Prestige” предлагает 87 номеров, включая 19 люксов. Премиум-комфорт и удобное расположение вблизи достопримечательностей, делает “ Prestige” идеальным выбором как для бизнес-путешественников, так и для туристов.
							</p>
							<div className="main-rooms__time time">
								<div className="time__item">
									<div className="time__info">РЕГИСТРАЦИЯ <span >В НОМЕРЕ</span ></div>
									<div className="time__clock">15:00</div>
								</div>
								<span className="time__trans"></span>
								<div className="time__item">
									<div className="time__info">ВЫЕЗД
									</div>
									<div className="time__clock">12:00

									</div>
								</div>
							</div>
						</div>

						<div className="main-rooms__img">
							<img src="./img/rooms/room1.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="rooms__gallery gallery">
				<div className="container">
					<div className="gallery__item">
						<h2 className="gallery__title title">Люксы</h2>
						<div className="gallery__row">
							{props.rooms.map((item, index) => {
								return(<Card
									key={item.title}
									title={item.title}
									text = {item.text}
									images = {item.images}
									icons = {item.icons}
									quests = {item.countOfQuests}
								></Card>) 
							})}
							{/* <Room ></Room>
							<Room ></Room> */}
							{/* <div className="gallery__room-card room-card">
								<div className="room-card__column">
									<div className="room-card__slider slider">

										<div className="slider__hover hover-slider">
											<div className="hover-slider__icons">
												<div className="hover-slider__icon"><img src="./img/snowflake.svg" alt="" /></div>
												<div className="hover-slider__icon"><img src="./img/hairdryer.svg" alt="" /></div>
												<div className="hover-slider__icon"><img src="./img/tv.svg" alt="" /></div>

											</div>
											<div className="hover-slider__quests hover-quests">
												<div className="hover-quests__number">4</div>
												<div className="hover-quests__icon"><img src="./img/person.svg" alt="" /></div>
											</div>
										</div>
										<div className="slider__img">
											<img src="./img/rooms/room2.jpg" alt="" />
										</div>
										<button className="slider__prev prev"><span className=" _icon-arrow_left"></span></button>
										<button className="slider__next next"><span className=" _icon-arrow_right "></span></button>

									</div>


									<div className="room-card__info">
										<div className="room-card__title title">Ридженси Люкс</div>
										<div className="room-card__text">Ридженси Люкс
											Насладитесь отдыхом в уютном люксе площадью 70 кв. м. В номере есть просторная гостиная, удобное рабочее место, душевая с ванной и большая кровать (King).
										</div>
									</div>
									<button className="room-card__btn">Проверить наличие</button>
								</div>
							</div>
							<div className="gallery__room-card room-card">
								<div className="room-card__column">
									<div className="room-card__slider slider">
										<div className="slider__body">
											<div className="slider__img">
												<img src="./img/rooms/room2.jpg" alt="" />
											</div>
											<button className="slider__prev prev"></button>
											<button className="slider__next next"></button>
										</div>
									</div>


									<div className="room-card__info">
										<div className="room-card__title title">Ридженси Люкс</div>
										<div className="room-card__text">Насладитесь роскошью делюкса площадью 67 кв.м. с большой гостиной, панорамными окнами. В номере есть удобное рабочее место, большая кровать (King) и просторная ванная комната с душевой кабиной и отдельно стоящей ванной.
										</div>
									</div>
									<button className="room-card__btn">Проверить наличие</button>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}



export default Rooms;