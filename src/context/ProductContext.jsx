import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    const [loading,setLoading] =useState(true)
    const [error,setError] = useState(null)
    const [products,setProducts] = useState([])



    useEffect(()=>{
        setLoading(true)

        axios.get("https://dummyjson.com/products")
        .then((res)=> setProducts(res.data.products))
        .catch((err)=>setError(err.message))

        .finally(()=>setLoading(false))

    },[])



    return(

        <ProductContext.Provider value={{loading,error,products}}>
            {children}
        </ProductContext.Provider>
    )
}