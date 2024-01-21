import {useState,useContext} from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
// React element is just an object 
const Title = ()=>(

<> 
    <a href="/">
      <img alt="logo of Mihir Eat's" src="https://api.logo.com/api/v2/images?logo=logo_1d792658-6e53-4f39-8a82-cfdc6ceed739&format=webp&margins=0&quality=60&width=500&background=transparent&u=1692523274"
        className="h-20 p-3"
      />
    </a>
    </>
    );
// functional component is just a function 
const Header = ()=>{
const {user} = useContext(userContext);
const [isLoggedIn,setIsLoggedIn] = useState(true);
const cartItems = useSelector(store=>store.cart.items)
console.log(cartItems)
return(
  <div className="flex justify-between bg-pink-50 shadow-md">
    <Title/>
  <div className="nav-items">
    <ul className="flex py-10">
       <li className=" px-2 hover:bg-pink-200" ><Link to="/">Home</Link></li>
       <li className=" px-2 hover:bg-pink-200"><Link to="/about">About Us</Link></li> 
       <li className=" px-2 hover:bg-pink-200"><Link to="/contact">Contact Us</Link></li> 
       <li className=" px-2 hover:bg-pink-200"><Link to="/instamart">Instamart</Link> </li>
       <li className=" px-2 hover:bg-pink-200"><Link to="/cart">Cart- {cartItems.length} items</Link> </li>
    </ul>
  </div>
  <h3 className="py-10  font-bold">{user.name}</h3>
  {!isLoggedIn?
  (<button onClick={()=>setIsLoggedIn(true)} >Log In</button>)
  :
  (<button onClick={()=>setIsLoggedIn(false)} >Log Out</button>)}
  </div>
)
}
export default Header