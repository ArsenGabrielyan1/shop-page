import { useContext } from "react"
import CardItem from "./CardItem"
import { GlobalStateContext } from "../../App"

const Card = () => {
  const { state } = useContext(GlobalStateContext)

  return (
<div>
    <h2>Total Price-{state.totalPrice}$</h2>
     {state.cart.length > 0 ? (
       state.cart ?.map((elem) => <CardItem key={elem.id} elem={elem}/>)
    ) : (
  <p
    style={{
    position: "absolute",
    top: "210px",
    left: "127px",
    fontSize: "28px",
    }} >
          Your Cart is empty
        </p>
      )}
</div>
  )
}

export default Card;
