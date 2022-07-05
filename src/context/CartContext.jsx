import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    useEffect(()=>{
        console.log(cart);
    },[cart])

    const addToCart = (prod,qtt) => {
        if (isInCart(prod.id)){
            let index = cart.findIndex(el => el.id === prod.id);
            let producto = cart[index];
            producto.qtt = producto.qtt + qtt;

            const newCart = [...cart];
            newCart.splice(index,1,producto);
            setCart([...newCart]);
            console.log(cart);

        }else{
        setCart([...cart,{...prod,qtt}]);
    }
    }

    const isInCart = (id) =>{
        return cart.some((product) => product.id === id)
    }

    const removeProd = (id) => {
        const producto = cart.filter(prod => prod.id !== id)
        setCart (producto)
    }

    const clearCart = () =>{
        setCart([]);
    }
    return(
        <CartContext.Provider value={{cart, addToCart,clearCart,removeProd}}>
            {children}
        </CartContext.Provider>
    )
}