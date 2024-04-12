import { useState } from "react";
import Card from "../Card/Card";
import "./Navbar.css";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineAlignRight } from "react-icons/ai";

export default function Navbar() {
  const [showCard, setShowCard] = useState(false)
 
  const handleClick = () => {
    setShowCard(prev => !prev)
  };

  return (
    <div className="Navbar">
     
      <a href="#" className="logo">SHOP</a>
      
      <input type="checkbox" id="toogler" />  
      <label htmlFor="toogler">
      <AiOutlineAlignRight  style={{
      color: '#ffffff'
  }}/>
 </label>
<div className="menu">
  <ul className="list">
        <li><a href="#"> Home</a></li>
    <div className="button" onClick={handleClick}>
        <li><button> <CiShoppingCart
            style={{
              color: '#ffffff',
               width:'65px'
            }}/></button>
        </li>
    </div>
  </ul>  
</div>
      
   <div className= {showCard ? "active" : "hide-card"} >
      <Card />
  </div>
      </div>
  )
}
