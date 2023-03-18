function Result({ className }) {
  return (
    <div className={`result ${className}`}>
      <div className="result__body">
        <div className="result__row">
          <div className="result__date">9 Декабря - 10 Декабря</div>
          <div className="result__quests">
            <div className="result__countOfQuests">2</div>
            <div className="result__icon">
              <img src="./img/person.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
