import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRooms = createAsyncThunk(
  'room/fetchRooms',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://63f2529daab7d09125065aa9.mockapi.io/rooms');

      if (!response.ok) {
        throw new Error('Беда!');
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  rooms: [],
  status: '',
  error: null,
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.rooms = action.payload;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchRooms.rejected, (state, action) => {
      state.rooms = [];
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

// export const {} = roomSlice.actions;

export default roomSlice.reducer;
