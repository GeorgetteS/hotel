const ToggleShowButton = ({ showOne, onlyOne, toggle }) => {
  function toggleShowButton(bool) {
    toggle(bool);
  }

  return (
    <p>
      {showOne && (
        <>
          <button className="booking__grid-show" onClick={() => toggleShowButton(false)}>
            Показать другие доступные номера
          </button>
        </>
      )}
      {!showOne && onlyOne && (
        <button className="booking__grid-show" onClick={() => toggleShowButton(true)}>
          Скрыть другие доступные номера
        </button>
      )}
    </p>
  );
};

export default ToggleShowButton;
