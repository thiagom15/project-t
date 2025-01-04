import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  immutableProducts: [],
  products: [],
}

export const productSlice = createSlice ({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
      state.immutableProducts = action.payload
    },
    addProduct: (state, action) => {
      state.products.push(action.payload)
      state.immutableProducts.push(action.payload)
    },
    removeProduct: (state, action) => {
      const productId =  action.payload
      state.products  = state.products.filter(product=>product.id !== productId)
      state.immutableProducts  = state.immutableProducts.filter(product=>product.id !== productId)
    }
  }
})

export const { addProduct, removeProduct ,setProducts } = productSlice.actions
export default productSlice.reducer