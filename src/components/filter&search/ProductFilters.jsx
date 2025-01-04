import { useState, useEffect } from "react";
import { getCategories } from "../.././services/products.service";
import { Button } from "antd";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

export function ProductFilters(){
    const [filters, setFilters] = useState([]);
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const {pathname}= useLocation();

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await getCategories();
                setFilters(res.data);

            }catch (error){
                console.log(error);
            }
        };

        fetchData();
    },[]);

    const handleSelectFilters= (event)=>{
        const filterQuery = event.target.value;
        params.set("filter", filterQuery)
        console.log({filterQuery});

        navigate(`${pathname}?${params.toString()}`);
       

    };

    const handleClearFilters = () =>{
        params.delete("filter");
        navigate(`${pathname}?${params.toString()}`);
        
    };

    return(
        <div className="flex gap-2" >
            <select onChange={handleSelectFilters}>
                {filters.map((filter)=>(
                    <option value={filter.slug} key={filter.slug}>
                        {filter.name}
                    </option>
                ))}
            </select>

            <Button onClick={handleClearFilters}>Clear</Button>
        </div>
    );

}