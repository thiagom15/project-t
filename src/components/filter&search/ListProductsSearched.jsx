import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../src/hooks";
import { getProductSearched } from "../../../src/services";
import { ProductCard } from "../../components/ProductCard";
import { ProductFilters } from  "../filter&search/ProductFilters";
 
export function ListProductsSearched(){
    const { products } = useProducts(); //viene d redux

    const [params] = useSearchParams();
    const searchParams = params.get("search");
    const filterParams = params.get("filter");
   
    const [list, setList] = useState([]);
    

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const res = await getProductSearched(searchParams);
                if (filterParams) {
                    
                    setList(res.data.products.filter(
                        (product)=> product.category === filterParams
                    ));
                }else{
                    setList(res.data.products);
                }
                
                

            } catch (error){
                console.log(error);
            }
        };
        fetchData();

        if (searchParams){

            fetchData();
        } else if (filterParams){
            const filteredProducts = products.filter(
                (product) => product.category === filterParams
            );
            setList(filteredProducts)

            fetchData();
        }
        else{
            setList(products);
        };

        fetchData();
        
        
    },[searchParams, products, params]);


    return(
        <section className="h-full space-y-6 flex flex-col gap-4 p-4" >
            <ProductFilters />
            <div className="grid grid-cols-5 mx-md:grid-cols-2 gap-4 max-h-full h-full overflow-auto" >
                {list.map((product)=>(
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </section>
    );

}