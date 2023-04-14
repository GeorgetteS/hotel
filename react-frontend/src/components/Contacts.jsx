import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__body">
          <h2 className="contacts__title title">Контактная информация</h2>
          <div className="contacts__row">
            <div className="contacts__address contacts__item">
              {' '}
              <img src="" alt="" className="contacts__icon" />{' '}
              <span>Ростовская область, г. Ростов-на-Дону, ул. Левобережная, д. 2К</span>
            </div>
            <div className="contacts__phones phones-contacts contacts__item ">
              <div className="phones-contacts__title"></div>
              <ul className="phones-contacts__list">
                <li>
                  <span className="phones-contacts__description">Ресепшен: </span>
                  <a href="tel: +78632898982" className="phones-contacts__phone">
                    +7 (863) 286-86-82
                  </a>
                </li>
                <li>
                  <span className="phones-contacts__description">WhatsApp:</span>
                  <a href="tel: +78632898982" className="phones-contacts__phone">
                    +7 (863) 286-86-82
                  </a>
                </li>
                <li>
                  <span className="phones-contacts__description">Viber: </span>
                  <a href="tel: +78632898982" className="phones-contacts__phone">
                    +7 (863) 286-86-82
                  </a>
                </li>
              </ul>
            </div>
            <div className="phones-contacts__email contacts__item">
              {' '}
              <span className="phones-contacts__description"> Отель: </span>
              <a href="mailto:rus8442@yandex.ru">rus8442@yandex.ru</a>{' '}
            </div>
          </div>
        </div>
      </div>
      <YMaps>
        <div className="contacts__map map">
          <Map
            defaultState={{
              center: [47.224293, 39.704547],
              zoom: 15,
              controls: ['zoomControl', 'fullscreenControl'],
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
            className="map"
            width={'100%'}
            height={'100%'}>
            <Placemark
              modules={['geoObject.addon.balloon']}
              defaultGeometry={[47.224293, 39.704547]}
              properties={{
                balloonContentBody: '“Prestige”  Ростов-на-Дону',
              }}
            />
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default Contacts;
