export const bookingSelector = () => (state) => state.booking;
export const bookingRoomsSelector = () => (state) => state.booking.items;
export const bookingCountOfQuestsSelector = () => (state) => state.booking.countOfQuests;
export const bookingRangeSelector = () => (state) => state.booking.date;
