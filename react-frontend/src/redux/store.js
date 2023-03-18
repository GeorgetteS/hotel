import { configureStore } from '@reduxjs/toolkit';

import booking from './booking/bookingSlice';

export const store = configureStore({
  reducer: {
    booking,
  },
});
