import React from 'react'
import { GrLogout } from 'react-icons/gr'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUserLoggedData } from "../store/userSlice";

const ProfileTab = () => {

    const nav = useNavigate();
    const dispatch = useDispatch();
    const handleLogOut = () => {
      localStorage.removeItem("accessToken");
      dispatch(clearUserLoggedData());
      nav("/login");
    }

    return (
        <div className="absolute bg-gray-600 top-32 right-[8px] shadow-2xl w-56 grid grid-rows-[0px_1fr]">
            <div></div>
            <div className='text-sm flex gap-4 h-full'>
                <button className="flex w-full justify-center items-center p-2 text-sm border border-transparent hover:border-gray-500" onClick={handleLogOut}>
                    <GrLogout />
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    )
}

export default ProfileTab