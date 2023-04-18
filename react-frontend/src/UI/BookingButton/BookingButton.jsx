import styles from './BookingButton.module.scss';

const BookingButton = ({ type, onCLickButton, disabled, label }) => {
  return (
    <button
      onClick={onCLickButton}
      type={type || 'button'}
      className={styles.root}
      disabled={disabled}>
      {label}
    </button>
  );
};

export default BookingButton;
