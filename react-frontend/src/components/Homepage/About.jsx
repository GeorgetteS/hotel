import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

import useMatchMedia from '../../hooks/useMatchMedia';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const { isTablet } = useMatchMedia();

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <>
      <section className="about" ref={ref}>
        <div className="container">
          <div className={classNames('about__body', isVisible && 'active')}>
            <h2 className="about__title title">
              Гостиница "Prestige" <br />
              <span>г. Ростов‑на‑Дону</span>
            </h2>{' '}
            <h2 className="about__subtitle ">
              В апреле 2022 года после капитального ремонта мы вновь открыли двери для наших гостей
              Приветствуем Вас на официальном сайте гостиницы Prestige в Ростове-на-Дону!
            </h2>
            {!isTablet && (
              <div className="about__text">
                <p>
                  Гостиница находится на одной из центральных улиц Ростова-на-Дону - в Соборном
                  переулке рядом с красивым городским парком. Уникальное местоположение отеля
                  открывает нашим гостям быстрый доступ к основным достопримечательностям. Развитая
                  транспортная инфраструктура позволит рационально спланировать поездки по городу,
                  затратив на них минимум времени.
                </p>
                <p>
                  Дизайн отеля выполнен в стиле современной классики. 130 номеров различных
                  категорий располагают всем необходимым для проживания и комфортного отдыха.
                </p>

                <p>
                  Завтрак по типу «шведский стол» будет сервироваться в ресторане «Ассамблея» на 1
                  этаже отеля. Здесь же Вы сможете пообедать и поужинать по меню.
                </p>

                <p>Планируйте свои путешествия в 2022 году интересными и вдохновляющими.</p>
                <p>Будем рады, если Вы выберите для проживания гостиницу Prestige!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
