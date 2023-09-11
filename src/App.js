import React, { lazy, Suspense, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Body } from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom' // createBrowserRouter use to create the router paths
//RouterProvider is used to configure the Router
// import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import UserContext from './utils/UserContext'


const AppLayout = () => {
    const [userName, setUserName] = useState('')
    useEffect(() => {
        let data = {
            name: 'Rajan'
        }
        setUserName(data?.name)

    }, [])
    return (
        <UserContext.Provider value={{ loggedInUser: userName }}>
            <div className='app'>
                <Header />
                {/** the children which is to be rendered is comes under Outlet ex
             *  is u pass /about then component AboutUs rendered insted of Outlet
             */}
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}
const AboutUs = lazy(() => import('./components/AboutUs'))
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading....</h1>}><AboutUs /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",    // this :resId is a dynamic id no the basic of which we navigate
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)  // this will convert object(heading/parents) to h1 tag and render it

