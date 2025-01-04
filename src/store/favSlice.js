import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const favSlice = createSlice ({
    name: 'fav',
    initialState,
    reducers: {
        addToFav(state, action){
            const {product, quantity} = action.payload;
            const indexProduct = (state.items).findIndex(item => item.product.id === product.id);
            if(indexProduct >= 0){
                state.items[indexProduct]
            }else{
                state.items.push({product, quantity});
            }
        },
        changeFavQuantity(state, action){
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

export const { addToFav, changeFavQuantity } = favSlice.actions;
export default favSlice.reducer