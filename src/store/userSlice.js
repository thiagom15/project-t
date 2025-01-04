import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userLogged: null,
}

export const userSlice = createSlice ({
  name: 'user',
  initialState,
  reducers: {
    setUserLogged: (state, action) => {
      state.userLogged = action.payload
    },
    clearUserLoggedData: (state) => {
      state.userLogged = null
    }
  }
})

export const { setUserLogged , clearUserLoggedData } = userSlice.actions
export default userSlice.reducer