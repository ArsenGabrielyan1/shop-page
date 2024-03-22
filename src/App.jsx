import { useState, useEffect, createContext, useReducer } from "react"
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/products/Products"

export const GlobalStateContext = createContext()

function countTotalPrice(cartItems) {
  return cartItems.reduce((price, item) => {
    return price + item.costByCount;
  },0)
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      )

      if (existItem !== -1) return state;
      const updatedCart = [...state.cart, action.payload]
      const totalPrice = countTotalPrice(updatedCart)

      return { ...state, cart: updatedCart, totalPrice }
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      const totalPrice = countTotalPrice(updatedCart)

      return {
        ...state,
        cart: updatedCart,
        totalPrice,
      };
    }
    case "INCREASE_COUNT": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              count: item.count + 1,
              costByCount: item.price * (item.count + 1),
            }
          : item
      );
      const totalPrice = countTotalPrice(updatedCart)

      return {
        ...state,
        cart: updatedCart,
        totalPrice,
      }
  }
    case "DECREASE_COUNT": {
      const updatedCart = state.cart
        .map((item) =>
          item.id === action.payload
            ? {
                ...item,
                count: item.count - 1,
                costByCount: item.price * (item.count - 1),
              }
            : item
        )
        .filter((item) => item.count > 0)

      const totalPrice = countTotalPrice(updatedCart)

      return {
        ...state,
        cart: updatedCart,
        totalPrice,
      }
    }
    default:
      return state 
   }
}

export default function App() {
  const [products, setProducts] = useState([])
  const [state, dispatch] = useReducer(reducer, { cart: [], totalPrice: 0 })
  
  useEffect(() => {
    axios("https://fakestoreapi.com/products/")
    .then((res) =>
    setProducts(res.data)
    )
  },[])

  return (
    <div>
      <GlobalStateContext.Provider value={{ state, dispatch }}>
        <Navbar/>
        <Products products={products}/>
      </GlobalStateContext.Provider>
    </div>
  )
}
