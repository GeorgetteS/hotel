export default function selectRoom(state, action) {
  const findRoom = state.items.find((room) => room.id === action.payload.id);
  return findRoom;
}
