import styles from './BookingButton.module.scss';

const BookingButton = ({ type, value, onCLickButton }) => {
  // function onClickMe() {
  //   onCLickButton(value);
  // }
  return (
    <button
      type={type || 'button'}
      className={styles.root}
      //  onClick={onClickMe}
    >
      Забронировать
    </button>
  );
};

export default BookingButton;
