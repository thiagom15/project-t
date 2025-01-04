import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

export function SearchProduct(){
    const [searchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState(
        searchParams.get("search") || ""
    );
    
    const navigate = useNavigate();
    const {pathname} = useLocation();
    
    const handleInputChange = useDebouncedCallback((value)=> {
        setInputValue(value)
        searchParams.set("search",value);
        navigate(`${pathname}?${searchParams.toString()}`);
    },0);
    
    return(
        <div className="flex items-center relative bg-slate-100 placeholder-black text-gray-800 rounded-md w64" >
            <input
            type="text"
            className="flex items-center relative bg-slate-100 placeholder-black text-gray-800 rounded-md p-2 w64"
            placeholder="Search"
            value={inputValue}
            onChange={(event)=>handleInputChange(event.target.value)}
            /><FaSearch className="absolute right-2"/>
        </div>
    );
}