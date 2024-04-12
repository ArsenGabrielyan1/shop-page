import { useContext } from "react"
import { GlobalStateContext } from "../../App"
import './Cartitem.css'

const CardItem = ({ elem }) => {
  const { dispatch } = useContext(GlobalStateContext)

  const handleAdd = () => {
    dispatch({ type: "INCREASE_COUNT", payload: elem.id })
  }

  const handleMinus = () => {
    dispatch({ type: "DECREASE_COUNT", payload: elem.id })
  }

  const handleDelete = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: elem.id })
  }

  return (
    <div>
      <div id="products"> 
        <div className="Products"> 
          <p>name:{elem.name}</p>
          <p>price:{elem.price}$</p>
          <p>total price for this item:{elem.costByCount}$</p>
          <p>category:{elem.category} </p>
          <div className="images">
           <img src={elem.image}  className="images-images"/> 
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleDelete}  className="delete-item">delete</button>
      </div>
      <button onClick={handleAdd} className="btn-pluss" >+</button>
    <span className="count">{elem.count}</span>  
      <button onClick={handleMinus} className="btn-minus">-</button> <hr />
      <div className="buy-prdouct">
        <button>Buy</button>
      </div>
    </div>
  )
}

export default CardItem
