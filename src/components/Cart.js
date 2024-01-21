
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItems from './FoodItems'
import { clearCart } from '../utils/cartSlice'



const Cart = () => {
    const items = useSelector(store=>store.cart.items)
    const dispatch = useDispatch()
    
    const handleClear = ()=>{
        dispatch(clearCart())
    }
  return (
    <>
    <h1 className='font-bold text-3xl m-3'>Cart Items-{items.length}</h1>
    <button className="bg-pink-200 rounded-md p-2 m-2 hover:bg-pink-100" onClick={()=>handleClear()}>Clear Cart</button>
    <div className="flex flex-wrap">
    {items.map((item)=>{

        return (       
            
            <FoodItems key = {item.id} {...item}/>
            )
        })} 
        </div>
    </>
  )
}

export default Cart


