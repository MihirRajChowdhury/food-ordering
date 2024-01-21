import RestrauntCard from "./RestrauntCard"
import {restaurantList,restaurantLists} from "../config"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";



const Body = ()=>{

    const [allrestraunts,setallRestraunts] = useState([]);
    const [filterRestaurants,setFilterRestaurants]= useState([])
    const [text, setText] = useState("");
    const [searchClicked,setSearchClicked] = useState("False");

    useEffect(()=>{
        getRestaurant()
    },[])
    async function getRestaurant(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
          );
          const json = await data.json();
          const cards = json.data.cards;
        //   console.log(cards)
          cards.map((e)=>{
            const list = e?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if(list){
                setallRestraunts(list);
                setFilterRestaurants(list)
            }  
          })

    }
    const online = useOnline();
    if(!online){
        return (
            <h2>You are currently offline please check your internet connection</h2>
        )
    }

    if(!allrestraunts) return null


    return allrestraunts?.length===0?(<Shimmer/>) :(
        <>
      <div className="search-container my-2 p-5 bg-pink-50 text-center">
        
        <input type="text" className="input rounded-md border-solid border-2 border-pink-500 " placeholder="Try to search something" value={text} onChange={(e)=>{
            setText(e.target.value);
            
        }} />
        
        <button className=" bg-pink-500 rounded-md p-1 mx-3 hover:bg-pink-200" onClick={(e)=>{
            const data = filterData(text,allrestraunts)
            setFilterRestaurants(data)
            
        }} >Search</button>
       
      </div>
       <div className="flex flex-wrap">
{
    filterRestaurants.length ===0?<h1>No restraunt match your filter</h1>:
filterRestaurants?.map((restraunt)=>{
            return <Link to={"/retaurant/"+restraunt.info.id} key ={restraunt.info.id}><RestrauntCard {...restraunt.info}  /></Link>
        })
       }
       </div>
       </>
    )
}
export default Body;