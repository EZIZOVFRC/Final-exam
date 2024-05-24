
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
function App() {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('false');
    const [data, setdata] = useState([]);
    const router = createBrowserRouter(ROUTES);

    const [basketItems,setBasketItems]=useState(localStorage.getItem('basketItems')?JSON.parse(localStorage.getItem('basketItems')):[])

    const addToBasket=(item)=>{
        const target=basketItems.find((x)=>x.item._id==item._id)
        if (target) {
            target.count+=1;
            target.totalPrice+=item.price
            setBasketItems([...basketItems])
            localStorage.setItem('basketItems',JSON.stringify(basketItems))
            
        }else{
            const newItem={
                item:item,
                count:1,
                totalPrice:item.price,
            }
            setBasketItems([...basketItems,newItem])
            localStorage.setItem('basketItems',JSON.stringify(basketItems))
        }
    }

    const deleteToBasket=(item)=>{
        const target=basketItems.find((x)=>x.item._id==item._id)
        if (target.count>1) {
            target.count-=1;
            target.totalPrice-=item.price

            setBasketItems([...basketItems])
            localStorage.setItem('basketItems',JSON.stringify(basketItems.filter((x)=>x.item.id!=item.id)))
        }else{
            setBasketItems([...basketItems.filter((x)=>x.item._id!=item._id)])
            localStorage.setItem('basketItems',JSON.stringify(basketItems.filter((x)=>x.item.id=item.id)))
        }
    }


    const [wishItems,setWishItems]=useState(localStorage.getItem('wishItems')?JSON.parse(localStorage.getItem('wishItems')):[])

    const addToWish=(item)=>{
        const target=wishItems.find((x)=>x.item._id==item._id)
        if (!target) {
            const newItem={
                item:item,
            }
            setWishItems([...wishItems,newItem])
            localStorage.setItem('wishItems',JSON.stringify(wishItems))
            toast.success('Successfully toasted!')
            
        }else{
            setWishItems([...wishItems.filter((x)=>x.item._id!=item._id)])
            localStorage.setItem('wishItems',JSON.stringify(wishItems.filter((x)=>x.item.id=item.id)))
        }
    }

 useEffect(()=>{
    axios.get('http://localhost:8080/api/exam').then((res)=>{
        setdata([...res.data])
    }).catch((err)=>{
        setError(err)
    })
 },[])

 const content={data, setdata, loading, setLoading, error, setError,basketItems,setBasketItems,deleteToBasket,addToBasket,wishItems,setWishItems,addToWish}
    return (
        <>
        <MainContext.Provider value={content}>
            <RouterProvider router={router }/>
        </MainContext.Provider>
        </>
    );
}

export default App;
