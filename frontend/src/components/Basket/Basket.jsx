import React, { useContext } from 'react'
import MainContext from '../../context/context'
import { Helmet } from 'react-helmet'

function Basket() {
  const {basketItems,setBasketItems,addToBasket,deleteToBasket}=useContext(MainContext)
  let total=0
  return (
    
    <>
    <Helmet>
      <title>Basket</title>
    </Helmet>
    <div className='basket' style={{paddingTop:'100px'}}>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Total Price</th>
      <th scope="col">Add</th>
      <th scope="col">Count</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {
    basketItems.map((item,index)=>{
      
      total+=item.totalPrice
      return <tr key={index}>
      <th scope="row"><img src={item.item.image} width={'100px'} alt="" /></th>
      <td>{item.item.title}</td>
      <td>{item.item.price}</td>
      <td>{item.totalPrice}</td>
      <td><button className='btn btn-primary' onClick={()=>{
        addToBasket(item.item)
      }}>+</button></td>
      <td>{item.count}</td>
      <td><button className='btn btn-danger' onClick={()=>{
        deleteToBasket(item.item)
      }}>-</button></td>
    </tr>
    })
  }
    
  </tbody>
</table>

    </div></>
  )
}

export default Basket