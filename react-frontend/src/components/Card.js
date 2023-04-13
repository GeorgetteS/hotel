import { Link, useNavigate } from 'react-router-dom';

import Slider from '../UI/Slider';

function Card({ price, title, text, images, icons, countOfQuests, type }) {
  const navigate = useNavigate();

  return (
    <div className="gallery__room-card room-card">
      <div className="room-card__column">
        <div className="room-card__slider">
          <Slider images={images} icons={icons} quests={countOfQuests} hover={true} />
        </div>

        <div className="room-card__info">
          <div className="room-card__title">
            <Link to={`/rooms/${type}`} className=" title">
              {title}
            </Link>
            <div className="room-card__cost">
              <span className="opacity"> 1 ночь 1 гость</span>{' '}
              <span className="no-opacity">{price} руб.</span>{' '}
            </div>
          </div>
          <div className="room-card__text">{text}</div>
        </div>
        <button className="room-card__btn" onClick={() => navigate(`/booking?type=${type}`)}>
          Забронировать
        </button>
      </div>
    </div>
  );
}

export default Card;
