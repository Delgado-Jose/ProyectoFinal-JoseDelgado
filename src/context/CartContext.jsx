import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (producto, cantidad) => {
        const prodExistente = cart.find(e => e.id === producto.id)
        if(prodExistente){
          const updateCart = cart.map(e=>{
            if(e.id === producto.id){
              e.Cantidad += cantidad
            }
            return e
          })
          setCart(updateCart)
        }else{
          const prodCantidad = {...producto, Cantidad: cantidad}
          setCart([...cart, prodCantidad])
        }
      }
    
    const deleteItem = (id) => {
        const tmpCart =  cart.filter((e) => e.id !== id)
        setCart(tmpCart)
    }
    
    const clean = () =>{
        setCart([])
    }

    const getTotal = () => {
      return cart.reduce((total, item) => total + item.precio * item.Cantidad, 0);
    };

    return(
        <CartContext.Provider value={{cart, setCart, addToCart, clean, deleteItem, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}
