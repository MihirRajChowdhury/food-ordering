import {createContext} from "react";
const userContext = createContext({
    user:{
    name:"Dummy Name",
    email:"DummyEmail@gmail.com"
}
})

export default userContext;