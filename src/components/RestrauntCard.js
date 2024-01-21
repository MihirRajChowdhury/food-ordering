import { IMG_CDN_URL } from "../config";

const RestrauntCard =({name, cloudinaryImageId, cuisines,avgRatingString
})=>{

    return (
        <div className="card w-60 p-2 m-2 shadow-lg bg-pink-50">
        
            <img src={IMG_CDN_URL+cloudinaryImageId} alt= { name+"king image"} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>Cuisines : {cuisines.slice(0,3).join(",")}</h3>
            
           <h4>Average Rating : {avgRatingString} ✰</h4>
            
        </div>
    )
    }

export default RestrauntCard;
