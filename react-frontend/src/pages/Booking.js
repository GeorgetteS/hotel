import Result from '../components/Result';
import BookingForm from '../components/Bookingpage/BookingForm';

function Booking() {
  return (
    <main className="booking">
      <Result />

      <div className="container">
        <div className="booking__title">Бронирование Номеров</div>
        <div className="booking__body">
          <div className="booking__content-container">
            <BookingForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Booking;
