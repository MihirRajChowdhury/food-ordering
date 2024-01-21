import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import "../index.css"
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Menu = ()=>{

    const dispatch = useDispatch()
    const handleClick = (name)=>{
        dispatch(addItem(name))
    }

    const {id} = useParams()
    const {res,resMenu} = useRestaurant(id)


    return (!res)?<Shimmer/>:(
        <div className="menu flex justify-between" >
        <div className="px-5">
            {/* <h1>Restaurant-id {id}</h1> */}
            <h2 className="font-bold text-2xl my-5" >{res.name}</h2>
            <img src={IMG_CDN_URL+res.cloudinaryImageId
} alt="restaurant's display image" />
            <h2>City: {res.city}</h2>
            <h2>Area: {res.areaName
} </h2>
<h2>Cost For 2: {res.costForTwo/100} ruppee </h2>
<h2>Ratings: {res.avgRating} </h2>
</div>
<div className="mx-5 my-10">
<h2 className="font-bold text-xl ">Menu of the restaurant</h2>
<ul>
{resMenu.map((e)=>{
    return e.itemCards.map((e)=>{
       return <li key={e.card.info.id}>{e.card.info.name}  <button className="bg-pink-300 m-2 p-1 rounded-md hover:bg-pink-100" onClick={()=>
       handleClick(e.card.info)}>Add to Cart</button> </li>
        
    })
})}</ul>
</div>
        </div>
    )
}

export default Menu;