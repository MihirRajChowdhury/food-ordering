import { IMG_CDN_URL } from "../config";

const FoodItems =({name, imageId, description,price
})=>{

    return (
        <div className="card w-60 p-2 m-2 shadow-lg bg-pink-50">
       
            <img src={IMG_CDN_URL+imageId} alt= { name+"king image"} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>Price: {price/100} Ruppee</h3>
            
           <h4>Description:{description}</h4>
            
        </div>
    )
    }

export default FoodItems;