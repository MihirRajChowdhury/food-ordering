import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass'
import ProfileFunction from './Profile'

const About = () => {
  return (
    <>
    <h1>About Us</h1>
    {/* <Outlet/> */}
    <Profile name="mihirClass"/>
    {/* <ProfileFunction name="mihir"/> */}
    <p>This is the about page of My app</p>
    </>
  )
}

// class AboutClass extends React.Component{
//   constructor(props){
//     super(props)
//   }

//   async componentDidMount(){
    
//   }
//   render(){
//     return (
//       <>
//         <h1>About Us</h1>
//     {/* <Outlet/> */}
//     <Profile name="mihirClass"/>
//     {/* <ProfileFunction name="mihir"/> */}
//     <p>This is the about page of My app</p>


//       </>
//     )
//   }
// }

export default About;



// the order of rendering the functional component is 
// constructor
// render
// ComponentDidMount