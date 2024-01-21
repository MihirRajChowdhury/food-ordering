import "../index.css"
const Shimmer = ()=>{
    return <div className=" flex flex-wrap">
    {Array(10).fill("").map((e,index)=>(
        <div key={index} className="w-60 p-2 m-2 shadow-lg bg-pink-50 h-52 "></div>
    ))}
        </div>


        {/* <div className="shimmer-card"></div>
        
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div> */}

}
export default Shimmer;