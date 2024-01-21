import { useEffect,useState } from "react";
const useRestaurant = (id) => {
    
    const [resMenu,setResMenu] = useState([])
    const [res,setRes] = useState(null);
    useEffect(()=>{
        getRestaurantInfo()
    },[])

   async function getRestaurantInfo(){
        const data = await fetch( `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=${id}`)
        const json = await data.json()
        setRes(json?.data?.cards[0]?.card?.card?.info)
        const menuItems =json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
          x["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    // console.log(menuItems);
    setResMenu(menuItems);
    // console.log(resMenu)
    }

  return {res,resMenu};
}

export default useRestaurant