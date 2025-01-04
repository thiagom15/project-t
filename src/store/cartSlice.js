import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {product, quantity} = action.payload;
            const indexProduct = (state.items).findIndex(item => item.product.id === product.id);
            if(indexProduct >= 0){
                state.items[indexProduct].quantity += quantity;
            }else{
                state.items.push({product, quantity});
            }
        },
        changeCartQuantity(state, action){
            const {product, quantity} = action.payload;
            const indexProduct = (state.items).findIndex(item => item.product.id === product.id);
            if(quantity > 0){
                state.items[indexProduct].quantity = quantity;
            }else{
                state.items = (state.items).filter(item => item.product.id !== product.id);
            }
        }
    }
})

export const { addToCart, changeCartQuantity } = cartSlice.actions;
export default cartSlice.reducer