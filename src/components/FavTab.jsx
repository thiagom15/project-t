import React from 'react'
import { useSelector } from 'react-redux'
import FavItem from './FavItem'

const FavTab = () => {
    const favs = useSelector(store => store.fav.items);
    return (
        <div className="fixed border-gray-700 border top-32 right-[107px] bg-gray-600 shadow-2xl w-3/12 grid grid-rows-[60px_1fr_60px]">
            <h2 className='p-5 text-2xl'>Favourites</h2>
            <div className='p-2'>
                {favs.map((item, key) => 
                    <FavItem key={key} data={item}/>
                )}
            </div>
            <div className='grid'>
                <a href="/wishlist" className='my-4 group relative w-full flex justify-center py-3 px-4 border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800'>WISHLIST</a>
            </div>
        </div>
    )
}

export default FavTab