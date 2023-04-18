import { ReactComponent as Wifi } from '../../assets/svg/wifi.svg';
import { ReactComponent as Parking } from '../../assets/svg/parking.svg';
import { ReactComponent as Speaker } from '../../assets/svg/speaker.svg';
import { ReactComponent as Serving } from '../../assets/svg/serving.svg';
import { ReactComponent as Wallet } from '../../assets/svg/wallet.svg';
import { ReactComponent as Location } from '../../assets/svg/location.svg';
import { ReactComponent as Dog } from '../../assets/svg/dog.svg';
import { ReactComponent as Taxi } from '../../assets/svg/taxi.svg';

const Comfort = () => {
  return (
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
  );
};

export default Comfort;
