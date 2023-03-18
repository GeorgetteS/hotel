function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__body">
          <h2 className="about__title title">Об отеле</h2>
          <div className="about__text">
            <p>
              “Prestige” изысканные традиции гостеприимства в новом дизайн-отеле. Комфортабельный
              гостиничный комплекс на 61 номер, c рестораном авторской кухни ProNejnost где царит
              умиротворение и индивидуальный подход к каждому гостю.
            </p>
            <p>
              {' '}
              Интерьер гостиницы, выполнен в неоклассическом стиле с элементами авангарда, сочетает
              в себе элегантность с ярким акцентом для Вашего идеального комфорта. С наилучшими
              пожеланиями, Коллектив отеля.
            </p>
          </div>
        </div>
        {/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A11d57b4445efe623bfa35675d14694c26c979a110a994d0375b22b7d221f8a65&amp;source=constructor" width="100%" height="474" frameborder="0"></iframe> */}
      </div>
    </section>
  );
}

export default About;
