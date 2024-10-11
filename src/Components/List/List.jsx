import React from "react";
import './List.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice'
function ShoeList() {
  const dispatch = useDispatch();
  const shoes = [
    {id:1,image:'./images/image1.webp',name:'laal tape',price:2000},
    {id:2,image:'./images/image2.webp',name:'abidas',price:700},
    {id:3,image:'./images/image3.webp',name:'puke',price:200},
    {id:4,image:'./images/image4.webp',name:'pama',price:500},
    {id:5,image:'./images/image5.webp',name:'jardun',price:800},
    {id:6,image:'./images/image6.webp',name:'devdas',price:1500},
  ]
  return (
   <>
      <div className="left ">
            {
              shoes.map(shoe=>(
                <div key={shoe.id} className="items">
                  <img id="image" src={shoe.image} alt={shoe.name} />
                  <h3 id="naam">{shoe.name}</h3>
                  <p id="price">₹{shoe.price}</p>
                  <button id="add" onClick={() => dispatch(addToCart(shoe))}>Add To Cart</button>
                </div>
              ))
            }
      </div>
   </>
  );
}

export default ShoeList;