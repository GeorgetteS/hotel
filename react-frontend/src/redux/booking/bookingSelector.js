export const bookingSelector = () => (state) => state.booking;
export const bookingChildrenSelector = () => (state) => state.booking.rooms;
export const bookingCountOfQuestsSelector = () => (state) => state.booking.countOfQuests;
