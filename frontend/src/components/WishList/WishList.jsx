import React, { useContext } from 'react'
import MainContext from '../../context/context'
import { Helmet } from 'react-helmet'

function WishList() {
    const {addToWish,wishItems}=useContext(MainContext)
  return (
    <>
    <Helmet>
      <title>Wish List</title>
    </Helmet>
    <div className='wish' style={{paddingTop:'100px'}}>
    <table class="table">
<thead>
  <tr>
    <th scope="col">Image</th>
    <th scope="col">Title</th>
    <th scope="col">Price</th>
    <th scope="col">Add</th>
  </tr>
</thead>
<tbody>
{
  wishItems.map((item,index)=>{
    
    return <tr key={index}>
    <th scope="row"><img src={item.item.image} alt="" width={'200px'}/></th>
    <td>{item.item.title}</td>
    <td>{item.item.price}</td>
    <td><button onClick={()=>{
      addToWish(item.item)
    }}>Delete From WishList</button></td>

  </tr>
  })
}
  
</tbody>
</table>

  </div></>
  )
}

export default WishList