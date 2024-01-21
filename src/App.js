import React, { Suspense, lazy,useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../src/index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
// import About from "./components/About"
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
const About = lazy(() => import("./components/About"));
import Cart from "./components/Cart";
const Instamart = lazy(() => import("./components/Instamart"));


const AppLayout = () => {
   const [user, setUser] = useState({
      name: "Mihir Raj Chowhdury",
      email: "rajmihir@gmail.com",
   });
   return (
      <Provider store={store}>
      <userContext.Provider value={{ user: user }}>
         <Header />
         <Outlet />
         <Footer />
      </userContext.Provider>
      </Provider>
   );
};
const AppRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <Body />,
         },
         {
            path: "/about",
            element: (
               <Suspense fallback={<h1>Loading..............</h1>}>
                  <About />
               </Suspense>
            ),
            children: [
               {
                  path: "profile",
                  element: <Profile />,
               },
            ],
         },
         {
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "/retaurant/:id",
            element: <Menu />,
         },
         {
            path: "/instamart",
            element: (
               <Suspense fallback={<Shimmer />}>
                  <Instamart />
               </Suspense>
            ),
         },
         {
            path:"/cart",
            element:<Cart/>,
         },
      ],
   },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
