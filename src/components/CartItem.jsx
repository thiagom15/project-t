import React from 'react'
import { useDispatch } from 'react-redux';
import { changeCartQuantity } from '../store/cartSlice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const {product, quantity} = props.data

  const handleLessQuantity = () => {
    dispatch(changeCartQuantity({
        product: product,
        quantity: quantity - 1
    }))
  }

  const handleMoreQuantity = () => {
    dispatch(changeCartQuantity({
        product: product,
        quantity: quantity + 1
    }))
  }
console.log(product)
  return (
    <div className='flex justify-between items-center bg-slate-500 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
        <img src={product.thumbnail} alt="" className='w-12'/>
        <h3>{product.title}</h3>
        <p>${product.price * quantity}</p>
        <div className='grid grid-cols-3 text-center'>
            <button className='bg-gray-300 rounded-full w-6 h-6 text-gray-900' onClick={handleLessQuantity}>-</button>
            <span>{quantity}</span>
            <button className='bg-gray-300 rounded-full w-6 h-6 text-gray-900' onClick={handleMoreQuantity}>+</button>
        </div>
    </div>
  )
}

export default CartItem