
// type ShoppingCartProviderProps = {
//     children : ReactNode
// }

// type ShoppingCartContext = {
//     getItemQuantity : (id: number) => number
//     increaseCartQuantity : (id: number) => void
//     decreaseCarQuantity : (id: number) => void
//     removeFromCart : (id: number) => void
// }


// import { createContext , useContext } from 'react';

// const ShoppingCartShopping = createContext({})

// export function useShoppingCart(){
//     return useContext(ShoppingCartShopping)
// }
// export function ShoppingCartProvider({ children } :ShoppingCartProviderProps ) {
//     return <ShoppingCartContext.Provider value={{}}>
//             {children}
//     </ShoppingCartContext.Provider>
// }