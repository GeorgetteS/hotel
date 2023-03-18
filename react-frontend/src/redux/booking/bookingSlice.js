import { createSlice } from '@reduxjs/toolkit';
import addDays from 'date-fns/addDays';

import selectRoom from '../../utils/selectRoom';

const initialState = {
  date: {
    startDate: JSON.stringify(new Date()),
    endDate: JSON.stringify(addDays(new Date(), 1)),
    key: 'selection',
  },

  rooms: [
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
      // if(action.payload.countOfAdults )
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

      // findRoom.children = findRoom.children.filter(item => item.childId !== action.payload.childId)
    },
    setChild: (state, action) => {
      const findRoom = selectRoom(state, action);
      const findChild = findRoom.children.find((item) => item.childId === action.payload.childId);
      // console.log(action.payload, 'payload');
      // console.log(findChild, 'state');
      findChild.ageValue = action.payload.ageValue;
      findChild.error = false;
      // findRoom.children.find(item => item.childId === action.payload.childId).ageValue = action.payload.ageValue

      // findRoom.children[action.payload.childId].ageValue = action.payload.ageValue
      // findRoom.children[action.payload.childId].error = false
    },
    setChildError: (state) => {
      state.rooms.forEach((room) => {
        room.children = room.children.map((obj) => (obj.ageValue ? obj : { ...obj, error: true }));
      });
    },
    addRoom: (state, action) => {
      state.rooms.push({
        id: action.payload,
        countOfAdults: 1,
        children: [],
      });
    },
    removeRoom: (state, action) => {
      state.rooms = state.rooms.filter((item) => item.id !== action.payload);
    },
    setCountOfQuests: (state) => {
      const countOfQuests = state.rooms.reduce((sum, room) => {
        const countOfChildren = room.children.filter((item) => item.ageValue).length;
        return sum + room.countOfAdults + countOfChildren;
      }, 0);
      state.countOfQuests = countOfQuests;
    },
    // clearChildrem: (state, action) => {
    // 	const findRoom = selectRoom(state, action)
    // 	findRoom.children = findRoom.children.fliter(item => item.childId !== action.payload.childId)
    // }
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
} = bookingSlice.actions;

export default bookingSlice.reducer;
