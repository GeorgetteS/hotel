import { configureStore } from '@reduxjs/toolkit';

import booking from './booking/bookingSlice';
import rooms from './rooms/roomSlice';
import cheque from './cheque/chequeSlice';

export const store = configureStore({
  reducer: {
    booking,
    rooms,
    cheque,
  },
});
