import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { ProductContext } from "./ProductContext";

export const BasketContext = createContext()


export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([])

    const addToBasket = (product) => {
        //sepet eklendi
        // setBasket([...basket, product])

        //ürün sepette var mı?
        const found = basket.find((i) => i.id === product.id)

        if(found){
            //sepette varsa miktar 1 artar
            const updated = {...found,amount:found.amount + 1}

            //sepet dizisine eski ürün yerine yenisni koy
            const newBasket = basket.map((item)=> (item.id === updated.id ? updated : item))

            //sepet state güncelle
            setBasket(newBasket)
            // alert("arttı")

              toast.info(`Ürünün miktarı arttıldı (${updated.amount})`);
        } else {

            //ürün sepette yoksa - ürünü sepete ekle
            setBasket([...basket,{...product,amount:1}])

             toast.success(`Ürün sepete eklendi`);
        }
    }
    // console.log(basket);



    const removeFromBasket = (productId) => { 
        //sepet ürünü bul
        const found = basket.find((i)=> i.id === productId)

        if(found.amount > 1) {
            //miktar 1 den fazla ise azalt

            const updated = {...found, amount:found.amount-1}


            //eski ürüne yenisini koy
             const newBasket = basket.map((i) => i.id === updated.id ? updated : i)

             //güncelle
             setBasket(newBasket)

               toast.info(`Ürünün miktarı azaldı (${updated.amount})`);
        }else {
            //miktar 1 ise ürünü sepetten kaldır
            const filtered= basket.filter((i)=> i.id !== productId)

            //güncelle
            setBasket(filtered)

            toast.error("Ürün sepetten kaldırıldı");
        }
    }
   

      // sepeti temizle
  const clearBasket = () => {
    setBasket([]);

    toast.success("Siparişiniz alındı");
  };
    return (

        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket ,clearBasket }}>
            {children}
        </BasketContext.Provider>
    )

}