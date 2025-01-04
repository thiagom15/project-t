import { useEffect, useState } from 'react'
import { message } from 'antd'
import { ProductCard } from './ProductCard'
import { getAllProducts } from '../services'

export function ProductList() {

    const [list, SetList] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await getAllProducts()
                const products = response.data.products
                SetList(products)
            } catch (error) {
                message.error(error);
            }
        }
        fetchData();
    }, [])

  return (
    <div className = "justify-center grid grid-cols-2  md:grid-cols-4   md:px-16 lg:px-28 flex-wrap gap-1 max-h-[100%] container mx-auto " >
      {list.map((product) => (
        <ProductCard product = {product}  key = {product.id} />
      ))}      
    </div>
  )
}