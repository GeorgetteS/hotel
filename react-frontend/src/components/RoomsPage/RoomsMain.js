const RoomsMain = () => {
  return (
    <div className="rooms__main main-rooms">
      <div className="container">
        <div className="main-rooms__row">
          <div className="main-rooms__column">
            <h1 className="main-rooms__title title">Номера</h1>
            <p className="main-rooms__text">
              “Prestige” предлагает 87 номеров, включая 19 люксов. Премиум-комфорт и удобное
              расположение вблизи достопримечательностей, делает “ Prestige” идеальным выбором как
              для бизнес-путешественников, так и для туристов.
            </p>
            <div className="main-rooms__time time">
              <div className="time__item">
                <div className="time__info">
                  РЕГИСТРАЦИЯ <span>В НОМЕРЕ</span>
                </div>
                <div className="time__clock">15:00</div>
              </div>
              <span className="time__trans"></span>
              <div className="time__item">
                <div className="time__info">ВЫЕЗД</div>
                <div className="time__clock">12:00</div>
              </div>
            </div>
          </div>
          <div className="main-rooms__img">
            <img src="./img/rooms/room1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsMain;
