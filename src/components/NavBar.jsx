import React, { useEffect, useState } from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GrLogin } from "react-icons/gr";
import { SearchProduct } from "./filter&search/SearchProduct";

import FavTab from "./FavTab";
import CartTab from "./CartTab"
import ProfileTab from "./ProfileTab"

export const NavBar = () => {

  const [showFav, setShowFav] = useState(false)
  const ShowFav = () => {
    if(showFav == true){
      setShowFav(false)
    }else{
      setShowFav(true)
    }
  }

  const [showCart, setShowCart] = useState(false)
  const ShowCart = () => {
    if(showCart == true){
      setShowCart(false)
    }else{
      setShowCart(true)
    }
  }

  const [showProfile, setShowProfile] = useState(false)
  const ShowProfile = () => {
    if(showProfile == true){
      setShowProfile(false)
    }else{
      setShowProfile(true)
    }
  }

  const [totalQuantityCart, setTotalQuantityCart] = useState(0);
  const [totalQuantityFav, setTotalQuantityFav] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const favs = useSelector(store => store.fav.items);

  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantityCart(total);
  }, [carts])

  useEffect(() => {
    let total = 0;
    favs.forEach(item => total += 1);
    setTotalQuantityFav(total);
  }, [favs])

  const userLogged = useSelector((state) => state.user.userLogged);

  return (
    <nav className= "flex items-center justify-between gap-4 px-20 w-full h-20  bg-black text-white text-center">
      <div className="grid grid-cols-2 justify-center items-center">
        <Link to={"/"}><img src="/shop.png" className="size-14 p-1"/></Link>
        <a className="p-2 text-sm rounded-lg border border-transparent hover:border-gray-500" href="/about">About</a>
      </div>
      <SearchProduct />
      <section className="flex items-center gap-4">
        {userLogged && userLogged.name ? (
          <div className="text-sm flex gap-4 h-full">
            <div className="text-sm flex gap-4 h-full">
              <button onClick={ShowFav} className="flex items-center p-2 text-sm rounded-lg border border-transparent hover:border-gray-500" href="/wishlist">
                <FaHeart />{totalQuantityFav}
              </button>{showFav && (<FavTab/>)}
            </div>
            <div className="text-sm flex gap-4 h-full">
              <button onClick={ShowCart} className="flex items-center p-2 text-sm rounded-lg border border-transparent hover:border-gray-500">
                <FaCartShopping />{totalQuantityCart}
              </button>{showCart && (<CartTab/>)}
            </div>
            <div className="text-sm flex gap-4 h-full">
              <button onClick={ShowProfile} className="flex items-center p-2 text-sm rounded-lg border border-transparent hover:border-gray-500">
                <FaUser />
                <span className="capitalize">{userLogged.name}</span>
              </button>{showProfile && (<ProfileTab/>)}
            </div>
          </div>
        ) : <Link className="gap-1 h-full flex items-center p-2 text-sm rounded-lg border border-transparent hover:border-gray-500" to={"/login"}><GrLogin/>Log In</Link> }
      </section>
    </nav>
  );
}