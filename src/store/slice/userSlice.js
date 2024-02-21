

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        isLoading: false,
    },
    reducers: {
        startLoadingUsers: ( state ) => {
          state.isLoading = true;
        },
        setUsers: ( state, action ) => {
          state.isLoading = false;
          state.users = action.payload.users;
        }
    }
});


export const { startLoadingUsers, setUsers } = userSlice.actions;