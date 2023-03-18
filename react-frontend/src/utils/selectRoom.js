export default function selectRoom(state, action) {
  const findRoom = state.rooms.find((room) => room.id === action.payload.id);
  return findRoom;
}
