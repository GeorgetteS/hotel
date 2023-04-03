import { configureStore } from '@reduxjs/toolkit';

import booking from './booking/bookingSlice';
import rooms from './rooms/roomSlice';

export const store = configureStore({
  reducer: {
    booking,
    rooms,
  },
});
