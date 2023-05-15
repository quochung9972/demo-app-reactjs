import {createSlice, createAction, PayloadAction} from '@reduxjs/toolkit';

import type {RootState} from '../../index';

interface UserState {
  listUserBlocked: Array<ListUserBlockedType>;
  pageIndex: number;
  totalPages: number;
}
//
export type ListUserBlockedType = {
  userId: string;
  fullName: string;
};
// Define the initial state using that type
const initialState = {
  listUserBlocked: [],
  pageIndex: 1,
  totalPages: 1,
} as UserState;

export const Slice = createSlice({
  name: 'user',
  initialState,
  reducers: { 
  },
});
// actions
export const { 
} = Slice.actions;

// selectors
// export const userSelector = (state: RootState) => state.user;

export default Slice.reducer;
