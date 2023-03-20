import SearchForm from './SearchForm/SearchForm';

function Fullscreen() {
  return (
    <section className="fullscreen">
      <div className="fullscreen__bg">
        <img src="./img/main__bg.png" alt="" />
      </div>
      <div className="container">
        <div className="fullscreen__body">
          <div className="fullscreen__text text-fullscreen">
            <h1 className="text-fullscreen__title">
              Гостиница,
              <br />в которой хочется остаться!
            </h1>
            <div className="text-fullscreen__adress">
              <div className="text-fullscreen__icon">
                <img src="./img/direction.svg" alt="" />
              </div>
              <div className="text-fullscreen__adress-text">
                Курорт “LoremIpsum”, Ростов-на-Дону, Россия
              </div>
            </div>
          </div>
          <SearchForm />
        </div>
        <button className="fullscreen__down-btn _icon-down"></button>
      </div>
    </section>
  );
}

export default Fullscreen;
