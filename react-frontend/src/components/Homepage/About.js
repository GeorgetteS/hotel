import { useInView } from 'react-intersection-observer';

import { ReactComponent as Wifi } from '../../assets/svg/wifi.svg';
import { ReactComponent as Parking } from '../../assets/svg/parking.svg';
import { ReactComponent as Speaker } from '../../assets/svg/speaker.svg';
import { ReactComponent as Serving } from '../../assets/svg/serving.svg';
import { ReactComponent as Wallet } from '../../assets/svg/wallet.svg';
import { ReactComponent as Location } from '../../assets/svg/location.svg';
import { ReactComponent as Dog } from '../../assets/svg/dog.svg';
import { ReactComponent as Taxi } from '../../assets/svg/taxi.svg';
import classNames from 'classnames';

function About() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <>
      <section className="about" ref={ref}>
        <div className="container">
          <div className={classNames('about__body', inView && 'active')}>
            <h2 className="about__title title">
              Гостиница "Prestige" <br />
              <span>г. Ростов‑на‑Дону</span>
            </h2>{' '}
            <h2 className="about__subtitle ">
              В апреле 2022 года после капитального ремонта мы вновь открыли двери для наших гостей
              Приветствуем Вас на официальном сайте гостиницы Prestige в Ростове-на-Дону!
            </h2>
            <div className="about__text">
              <p>
                Гостиница находится на одной из центральных улиц Ростова-на-Дону - в Соборном
                переулке рядом с красивым городским парком. Уникальное местоположение отеля
                открывает нашим гостям быстрый доступ к основным достопримечательностям. Развитая
                транспортная инфраструктура позволит рационально спланировать поездки по городу,
                затратив на них минимум времени.
              </p>
              <p>
                Дизайн отеля выполнен в стиле современной классики. 130 номеров различных категорий
                располагают всем необходимым для проживания и комфортного отдыха.
              </p>

              <p>
                Завтрак по типу «шведский стол» будет сервироваться в ресторане «Ассамблея» на 1
                этаже отеля. Здесь же Вы сможете пообедать и поужинать по меню.
              </p>

              <p>Планируйте свои путешествия в 2022 году интересными и вдохновляющими.</p>
              <p>Будем рады, если Вы выберите для проживания гостиницу Prestige!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="comfort">
        <div className="comfort__body">
          <div className="container">
            <h2 className="comfort__title title">Удобства</h2>
            <div className="comfort__row row-comfort">
              <div className="row-comfort__item">
                <div className="row-comfort__icon">
                  <Wifi className="row-comfort__svg" />
                </div>
                <div className="row-comfort__title">Бесплатный wi-fi</div>
              </div>
              <div className="row-comfort__item">
                <div className="row-comfort__icon">
                  <Serving />
                </div>
                <div className="row-comfort__title">Ресторан на территории</div>
              </div>

              <div className="row-comfort__item">
                <div className="row-comfort__icon">
                  <Wallet className="row-comfort__svg" />
                </div>
                <div className="row-comfort__title">Доступные номера</div>
              </div>
              <div className="row-comfort__item">
                <div className="row-comfort__icon">
                  <Location />
                </div>
                <div className="row-comfort__title">Удобное расположение</div>
              </div>

              <div className="row-comfort__item">
                <div className="row-comfort__icon">
                  <Taxi />
                </div>
                <div className="row-comfort__title">Трансфер</div>
              </div>
              <div className="row-comfort__item">
                <div className="row-comfort__icon">
                  <Parking />
                </div>
                <div className="row-comfort__title">Парковка</div>
              </div>
              <div className="row-comfort__item">
                <div className="row-comfort__icon">
                  <Speaker />
                </div>
                <div className="row-comfort__title">Тихий центр</div>
              </div>

              <div className="row-comfort__item">
                <div className="row-comfort__icon">
                  <Dog />
                </div>
                <div className="row-comfort__title">Можно с животными</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
