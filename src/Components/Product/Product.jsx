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
          <img src={elem.image}  className="content-iamges-img"/>
      </div>
        <h5 className="content-h5">name-{elem.title}</h5> <br/>                                         
        <p className="content-p"> Price-{elem.price}$</p> 
     </div>  
    <div className="btn">
        <div className="pluse" onClick={addToCard}>+</div>
      </div>
  </div>
</div>
  )
}
export default Product
