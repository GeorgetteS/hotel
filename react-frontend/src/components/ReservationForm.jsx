import { Formik, Form, Field } from 'formik';

import * as Yup from 'yup';

import BookingButton from '../UI/BookingButton/BookingButton.jsx';

import Input from '../UI/Input/Input';
import PhoneInput from '../UI/Input/PhoneInput';

const phoneTest = /^\+7 \(\d{3}\) \d{3}-\d{3}$/;

const validationSchema = Yup.object().shape({
  mainFamilyName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Необходимо указать фамилию'),
  mainName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Необходимо указать имя'),
  mainPatronymic: Yup.string().max(15, 'Must be 15 characters or less'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Необходимо указать электронную почту'),
  phone: Yup.string()
    .required('Необходимо указать номер телефона')
    .matches(phoneTest, 'Неверно указан номер телефона'),
  agreement: Yup.bool().oneOf([true], 'Необходимо согласиться с условиями бронирования'),
});

const initialValues = {
  mainFamilyName: '',
  mainName: '',
  mainPatronymic: '',
  email: '',
  phone: '',
  wishes: '',
  proof: false,
  news: false,
  another: false,
  agreement: true,
};

const onSubmit = (values, { setSubmitting }) => {
  // event.preventDefault();
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const ReservationForm = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ errors, touched }) => (
        <Form className="form">
          <div className="form__body">
            <div className="form__conclusion conclusion-form"></div>
            <div className="form__social social-form form-blok">
              <div className="form__title">Контактные данные</div>
              <div className="social-form__body form-blok-border">
                <div className="social-form__warning">
                  <span>
                    На электронную почту вам придёт подтверждение бронирования. При необходимости мы
                    свяжемся с вами по телефону, чтобы уточнить детали.
                  </span>
                </div>
                <div className="social-form__grid">
                  <div className="social-form__item">
                    <Input name="mainFamilyName" placeholder="Фамилия" type="text" />
                  </div>
                  <div className="social-form__item">
                    <Input name="mainName" placeholder="Имя" type="text" />
                  </div>{' '}
                  <div className="social-form__item">
                    <Input name="mainPatronymic" placeholder="Отчество" type="text" />
                  </div>
                  <div className="social-form__item">
                    <Input
                      name="email"
                      placeholder="Электронная почта"
                      type="email"
                      icon={'../img/letter.png'}
                    />
                  </div>{' '}
                  <div className="social-form__item">
                    <PhoneInput
                      name="phone"
                      placeholder="Номер телефона"
                      type="tel"
                      icon={'../img/booking__phone.png'}
                    />
                  </div>
                </div>
                <div className="social-form__checkbox-column">
                  <div className="social-form__checkbox">
                    <Field
                      name="proof"
                      type="checkbox"
                      id="formProof"
                      className="checkbox__input"
                    />
                    <label htmlFor="formProof" className="social-form__label checkbox-label">
                      <span>
                        Я хочу дополнительно получить подтверждение бронирования на телефон
                      </span>
                    </label>
                  </div>
                  <div className="social-form__checkbox">
                    <Field type="checkbox" id="formNews" className="checkbox__input" name="news" />
                    <label htmlFor="formNews" className="social-form__label checkbox-label">
                      <span>
                        Я хочу узнавать о специальных предложениях и новостях по email или SMS
                      </span>
                    </label>
                  </div>
                  <div className="social-form__checkbox">
                    <Field
                      type="checkbox"
                      id="formAnother"
                      className="checkbox__input"
                      name="another"
                    />
                    <label htmlFor="formAnother" className="social-form__label checkbox-label">
                      <span> Я бронирую для другого человека</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* todo */}
            {/* <div className="form__visitors visitors-form form-blok form-blok_dashed">
              <h3 className="form__title">Информация о гостях</h3>
              <div className="visitors-form__rooms-column">
                <div className="visitors-form__body form-blok-border ">
                  <div className="visitors-form__title">
                    <b>Номер:</b> Стандартный с двумя кроватями. 1 взрослый
                  </div>
                  <div className="visitors-form__column">
                    <div className="visitors-form__item">
                      <div className="visitors-form__input-wrapper">
                        <Input name="mainFamilyName" placeholder="Фамилия" type="text" />
                      </div>
                      <div className="visitors-form__input-wrapper">
                        <Input name="mainFamilyName" placeholder="Фамилия" type="text" />
                      </div>
                      <div className="visitors-form__input-wrapper">
                        <Input name="mainFamilyName" placeholder="Фамилия" type="text" />
                      </div>
                      <button className="visitors-form__delete">Удалить</button>
                    </div>
                    <div className="visitors-form__item">
                      <div className="visitors-form__input-wrapper">
                        <Input name="mainFamilyName" placeholder="Фамилия" type="text" />
                      </div>
                      <div className="visitors-form__input-wrapper">
                        <Input name="mainFamilyName" placeholder="Фамилия" type="text" />
                      </div>
                      <div className="visitors-form__input-wrapper">
                        <Input name="mainFamilyName" placeholder="Фамилия" type="text" />
                      </div>
                      <button className="visitors-form__delete">Удалить</button>
                    </div>
                  </div>
                  <div className="add-item visitors-form__add-visitor">
                    Указать следующего гостя
                  </div>
                </div>
              </div>
            </div> */}
            <div className="form__textarea textarea-form form-blok">
              <div className="form__title form__title_weight">Дополнительные комментарии</div>
              <textarea
                className="textarea-form__item"
                name="wishes"
                rows="3"
                placeholder="Если у вас есть дополнительные пожелания, пожалуйста, дайте нам знать. Мы постараемся учесть ваши пожелания при наличии такой возможности."
              />
            </div>
            <div className="payments-form form-blok-border">
              <div className="payments-form__body">
                <div className="payments-form__agreement">
                  <div className="social-form__checkbox">
                    <Field
                      name="agreement"
                      type="checkbox"
                      id="agreement"
                      className="checkbox__input"
                    />
                    <label htmlFor="agreement" className="checkbox-label">
                      <span>
                        Я согласен с правилами онлайн-бронирования, обработкой персональных данных и
                        политикой конфиденциальности
                      </span>
                    </label>
                  </div>
                  {touched.agreement && errors.agreement ? (
                    <div className={'social-form__error'}>{errors.agreement}</div>
                  ) : null}
                </div>
                <div className="payments-form__item">
                  <div className="payments-form__header">
                    <div className="payments-form__header-text">
                      <div className="payments-form__title">Оплатить при заселении</div>
                    </div>
                  </div>
                  <div className="payments-form__row">
                    <div className="payments-form__text">
                      <p>
                        Выбирая этот способ оплаты, Вы НЕ ВНОСИТЕ ПРЕДОПЛАТУ за бронь. Получаете
                        ваучер-подтверждение и предъявляете его при заселении.
                      </p>
                      <p>
                        В случае высокой загрузки гостиница оставляет за собой право отменить данное
                        бронирование после 16:00 мск , в день заезда, согласно Правилам
                        предоставления гостиничных услуг в ПАО ГК Космос, которые размещены на
                        сайте.
                      </p>
                    </div>
                    <div className="payments-form__pay">
                      <div className="payments-form__prepay payments-form__prepay_b">
                        Без предоплаты
                      </div>
                      <BookingButton type={'submit'} />
                    </div>
                  </div>
                </div>
                <div className="payments-form__item">
                  <div className="payments-form__header">
                    <div className="payments-form__header-text">
                      <div className="payments-form__title">
                        <span className="colored">Оплата по QR-коду (СБП)</span>
                      </div>
                      <div className="payments-form__subtitle">Система быстрых платежей</div>
                    </div>
                    <div className="payments-form__header-icons">
                      <div className="payments-form__header-icon">
                        <img src="../img/CreditCardsIcons/sbp.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="payments-form__row">
                    <div className="payments-form__text">
                      <p>
                        Оплачивается <b>вся сумма</b> брони.
                      </p>

                      <p>
                        Кассовый чек в электронном виде будет предоставлен компанией ComfortBooking.
                        Вы получите его после оплаты на адрес электронной почты, который указали при
                        бронировании. Закрывающие документы, подтверждающие факт проживания и
                        оказания услуг за весь период, предоставит средство размещения.
                      </p>
                      <p>
                        Система Быстрых Платежей - самый простой и безопасный способ оплаты. Вам не
                        нужно указывать данные вашей карты: просто отсканируйте QR-код через
                        приложение своего банка на смартфоне и подтвердите платеж. Данный способ
                        оплаты поддерживают многие банки, например «ВТБ», «Тинькофф», «Русский
                        Стандарт», «Ак Барс Банк», «Райффайзенбанк» и другие. Смотреть полный список
                        банков.
                      </p>

                      <p>Обработка платежей осуществляется процессинговой системой PayAnyWay.</p>
                    </div>
                    <div className="payments-form__pay">
                      <div className="payments-form__prepay">Размер предоплаты</div>
                      <div className="payments-form__cost">4 240  ₽</div>
                      <BookingButton type={'submit'} />
                    </div>
                  </div>
                </div>
                <div className="payments-form__item">
                  <div className="payments-form__header">
                    <div className="payments-form__header-text">
                      <div className="payments-form__title">Российская банковская карта</div>
                      <div className="payments-form__subtitle">
                        Visa, MasterCard, МИР, SberPay, Yandex Pay
                      </div>
                    </div>
                    <div className="payments-form__header-icons">
                      <div className="payments-form__header-icon">
                        <img src="../img/CreditCardsIcons/mastercard.png" alt="" />
                      </div>
                      <div className="payments-form__header-icon">
                        <img src="../img/CreditCardsIcons/mir.svg" alt="" />
                      </div>
                      <div className="payments-form__header-icon">
                        <img src="../img/CreditCardsIcons/paypal.svg" alt="" />
                      </div>
                      <div className="payments-form__header-icon">
                        <img src="../img/CreditCardsIcons/visa.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="payments-form__row">
                    <div className="payments-form__text">
                      <p>
                        Оплачивается <b>вся сумма</b> брони.
                      </p>

                      <p>
                        В пакет отчетных документов при оплате кредитной картой входят: выписка из
                        банка-эмитента с транзакцией на оплату услуг проживания, оригинал ваучера с
                        подписью и печатью. Счета-фактуры и акты выполненных работ при данном виде
                        оплаты не предоставляются. При необходимости получения этих документов,
                        пожалуйста, выбирайте способ оплаты «Безналичный расчет для юридических
                        лиц». Данный способ оплаты поддерживает платежи только с карт, выпущенных
                        российскими банками.
                      </p>
                      <p>
                        Кассовый чек в электронном виде будет предоставлен компанией ComfortBooking.
                        Вы получите его после оплаты на адрес электронной почты, который указали при
                        бронировании. Закрывающие документы, подтверждающие факт проживания и
                        оказания услуг за весь период, предоставит средство размещения.
                      </p>
                      <p>Обработка платежей осуществляется процессинговой системой PayAnyWay.</p>
                    </div>
                    <div className="payments-form__pay">
                      <div className="payments-form__prepay">Размер предоплаты</div>
                      <div className="payments-form__cost">4 240  ₽</div>
                      <BookingButton type={'submit'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
