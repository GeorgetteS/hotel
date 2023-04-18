import { createSlice } from '@reduxjs/toolkit';

const initialState = { chequeRooms: [] };

export const chequeSlice = createSlice({
  name: 'cheque',
  initialState,
  reducers: {
    addRoomToChegue: (state, action) => {
      const isAdded = state.chequeRooms.find((room) => room.deleteId === action.payload.deleteId);
      if (isAdded) {
        const index = state.chequeRooms.indexOf(isAdded);
        state.chequeRooms[index].countOfRooms = action.payload.countOfRooms;
      } else {
        state.chequeRooms = [...state.chequeRooms, action.payload];
      }
    },
    deleteRoomsFromChegue: (state, action) => {
      state.chequeRooms = state.chequeRooms.filter((room) => room.deleteId !== action.payload);
    },
    clearCheque: (state) => {
      state.chequeRooms = [];
    },
  },
});

export const { addRoomToChegue, deleteRoomsFromChegue, clearCheque } = chequeSlice.actions;

export default chequeSlice.reducer;
