import React, { useContext } from 'react'
import MainContext from '../../context/context'

function Card({item}) {
  const {addToBasket,addToWish}=useContext(MainContext)
  return (
    <div className='card col-4'>
      <p className='brand'>WIRIST BRAND</p>
      <img src={item.image} alt="" width={'100px'} />
      <span>{item.title}</span>
      <h5>{item.price}$</h5>
      <button className='add' onClick={()=>{
        addToBasket(item)
      }}>Add To Basket</button>
      <button className='del' onClick={()=>{
        addToWish(item)
      }}>Wish</button>
      
    </div>
  )
}

export default Card