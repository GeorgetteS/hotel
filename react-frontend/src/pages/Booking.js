import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import BookingRooms from '../components/BookingRooms';

import { bookingSelector } from '../redux/booking/bookingSelector';

import { roomSelector } from '../redux/rooms/roomSelector';

import { fetchRooms } from '../redux/rooms/roomSlice';
import Spinner from '../UI/Spinner';
import BookingForm from '../components/Bookingpage/BookingForm';
import { setCountOfQuests } from '../redux/booking/bookingSlice';
import BookingRoomsWithCheque from '../components/BookingRoomsWithCheque';

function Booking() {
  const [roomsType, setRoomsType] = useState(null);

  const [showAll, setShowAll] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const { items } = useSelector(bookingSelector());
  const { rooms, status, error } = useSelector(roomSelector());

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length === 1) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  }, [items]);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  useEffect(() => {
    if (searchParams.has('type')) {
      setRoomsType(searchParams.get('type'));
    }
  }, []);

  const closeForm = () => {
    setShowForm(false);
    dispatch(setCountOfQuests());
  };

  if (showForm) {
    return (
      <main className="booking">
        <div className="container">
          <div className="booking__title">Бронирование Номеров</div>
          <BookingForm closeForm={closeForm} />
        </div>
      </main>
    );
  }

  if (status === 'loading') {
    return (
      <main className="booking">
        <div className="container">
          <Spinner />
        </div>
      </main>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (rooms.length === 0) {
    return <p>No rooms found</p>;
  }
  return (
    <main className="booking">
      <div className="container">
        <div className="booking__title">Бронирование Номеров</div>
        {showAll ? (
          <BookingRoomsWithCheque
            setShowForm={() => setShowForm(true)}
            rooms={rooms}
            roomsType={roomsType}
          />
        ) : (
          <BookingRooms setShowForm={() => setShowForm(true)} rooms={rooms} roomsType={roomsType} />
        )}
      </div>
    </main>
  );
}

export default Booking;
