import { useContext } from "react";
import { GlobalStateContext } from "../../App";
import './Productt.css'

const Product = ({ elem }) => {
  const { dispatch } = useContext(GlobalStateContext)

  function addToCard() {
    const cardItem = {
      id: elem.id,
      name: elem.title,
      price: elem.price,
      image: elem.image,
      category: elem.category,
      count: 1,
      costByCount: elem.price,
    }
    dispatch({ type: "ADD_TO_CART", payload: cardItem })
  }

  return (
    <div id="container">
      
      <div className="box">
      
  <div className="content">
       <div className="images">
          <img src={elem.image} />
      </div>
        <h5>name:{elem.title}</h5>  <br />                                         
        <p>price:{elem.price}$</p> <br />
        <p>description:{elem.description}</p> <br />
        <p>category:{elem.category}</p> 
   </div>  
       <div className="btn">
        <button onClick={addToCard}>Buy Now</button>
      </div>
  </div>
   
</div>
  )
}
export default Product
