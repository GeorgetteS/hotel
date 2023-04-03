import { createSlice } from '@reduxjs/toolkit';
import addDays from 'date-fns/addDays';

import selectRoom from '../../utils/selectRoom';

const initialState = {
  date: [
    {
      startDate: Date.now(),
      endDate: addDays(new Date(), 1).getTime(),
      key: 'selection',
    },
  ],

  items: [
    {
      id: 0,
      countOfAdults: 1,
      children: [],
    },
  ],

  countOfQuests: 1,
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addAdult: (state, action) => {
      const findRoom = selectRoom(state, action);
      findRoom.countOfAdults = findRoom.countOfAdults + action.payload.countOfAdults;
    },
    removeAdult: (state, action) => {
      const findRoom = selectRoom(state, action);
      findRoom.countOfAdults = findRoom.countOfAdults - action.payload.countOfAdults;
    },
    setAdult: (state, action) => {
      const findRoom = selectRoom(state, action);
      // if(action.payload.countOfAdults )
      findRoom.countOfAdults = action.payload.countOfAdults;
    },
    addChild: (state, action) => {
      const findRoom = selectRoom(state, action);
      findRoom.children.push({ ...action.payload });
    },
    removeChild: (state, action) => {
      const findRoom = selectRoom(state, action);

      if (action.payload.childId === undefined) {
        const copyChildren = JSON.parse(JSON.stringify(findRoom.children));
        copyChildren.pop();
        findRoom.children = copyChildren;
      } else {
        findRoom.children = findRoom.children.filter(
          (item) => item.childId !== action.payload.childId,
        );
      }
    },
    setChild: (state, action) => {
      const findRoom = selectRoom(state, action);
      const findChild = findRoom.children.find((item) => item.childId === action.payload.childId);
      findChild.ageValue = action.payload.ageValue;
      findChild.error = false;
    },
    setChildError: (state) => {
      state.items.forEach((room) => {
        room.children = room.children.map((obj) => (obj.ageValue ? obj : { ...obj, error: true }));
      });
    },
    addRoom: (state, action) => {
      state.items.push({
        id: action.payload,
        countOfAdults: 1,
        children: [],
      });
    },
    removeRoom: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setCountOfQuests: (state) => {
      const countOfQuests = state.items.reduce((sum, room) => {
        const countOfChildren = room.children.filter((item) => item.ageValue).length;
        return sum + room.countOfAdults + countOfChildren;
      }, 0);
      state.countOfQuests = countOfQuests;
    },

    setRange: (state, action) => {
      state.date[0] = {
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        key: action.payload.key,
      };
    },
  },
});

export const {
  addAdult,
  removeAdult,
  addChild,
  removeChild,
  setChild,
  setChildError,
  addRoom,
  removeRoom,
  setAdult,
  setCountOfQuests,
  setRange,
} = bookingSlice.actions;

export default bookingSlice.reducer;
