import { useNavigate } from 'react-router-dom';

import Slider from '../../UI/Slider';
import { IconsList } from '../../UI/IconsList';

const RoomInfo = ({ images, icons, quests, text, title, countOfQuests, premium, id }) => {
  const navigate = useNavigate();

  return (
    <div className="room__main main-room">
      <div className="main-room__body">
        <h2 className="main-room__title">НОМЕР «{title}»</h2>
        <div className="main-room__subtitle">
          <div className="main-room__info">
            <div className="main-room__square">
              Площадь номера: <br /> <span>87 м²</span>
            </div>
            <div className="main-room__quests">
              Количество гостей: <br />
              <span> {countOfQuests} чел.</span>
            </div>
          </div>
          <a href="" className="main-room__link" onClick={() => navigate(`/booking?type=${id}`)}>
            Узнать цену
          </a>
        </div>
        <div className="main-room__view">
          <Slider images={images} icons={icons} quests={quests} gallery={true} />
        </div>
        <div className="main-room__text">{text}</div>
        <IconsList icons={icons} className={'main-room__icons'} />
        {premium && (
          <div className="main-room__premium premium-main">
            <h5 className="premium-main__title">В стоимость номера включено:</h5>
            <ul className="premium-main__list">
              <li>Приветственный напиток (вода в день заезда в номере)</li>
              <li>Завтрак с 7:00 до 10:30 по системе «шведский стол» в ресторане «Галактика»</li>
              <li>
                Посещение фитнес-центра "Космос" (1 раз в день в течение всего срока проживания на
                кол-во человек в зависимости от размещения){' '}
              </li>
              <li>Wi-Fi в номере</li>
              <li>Поднос багажа, сейф на стойке регистрации</li>
            </ul>
          </div>
        )}
        <div className="main-room__special special-main">
          <h6 className="special-main__title">В номере категории «{title}» имеется:</h6>

          <div className="special-main__body">
            <div className="special-main__item">
              <div className="special-main__subtitle">В номере</div>
              <ul className="special-main__list">
                <li>телевизор</li>
                <li>кабельное телевидение</li>
                <li>кабельное телевидение</li>
                <li>телефон</li>
                <li>кондиционер</li>
                <li>стулья</li>
                <li>зеркало</li>
                <li>тумбы</li>
                <li>письменный стол</li>
              </ul>
            </div>
            <div className="special-main__item">
              <div className="special-main__subtitle">В ванной комнате</div>
              <ul className="special-main__list">
                <li>душ</li>
                <li>раковина</li>
                <li>унитаз</li>
                <li>косметические средства</li>
                <li>банные полотенца</li>
              </ul>
            </div>
            <div className="special-main__item">
              <div className="special-main__subtitle">Прочее</div>
              <ul className="special-main__list">
                <li>набор посуды</li>
                <li>отопление</li>
                <li>Wi-Fi</li>
                <li>Wi-Fi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
