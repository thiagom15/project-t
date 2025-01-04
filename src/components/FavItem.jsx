import React from 'react'
import { useDispatch } from 'react-redux';
import { changeFavQuantity } from '../store/favSlice';

const FavItem = (props) => {
  const {product, quantity} = props.data
  const dispatch = useDispatch();

  const handleLessQuantity = () => {
    dispatch(changeFavQuantity({
        product: product,
        quantity: quantity - 1
    }))
  }

console.log(product)

  return (
    <div className='flex justify-between items-center bg-slate-500 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
        <img src={product.thumbnail} alt="" className='w-12'/>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <div className='flex flex-col text-center'>
        <button className='bg-gray-300 rounded-full w-6 h-6 text-black' onClick={handleLessQuantity}>-</button>
        </div>
    </div>
  )
}
export default FavItem