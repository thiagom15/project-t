import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import userSlice from './userSlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'
import favSlice from './favSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    products: productSlice,
    cart: cartSlice,
    fav: favSlice,
  }
})