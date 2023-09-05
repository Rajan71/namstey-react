import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constant'
import useRestaurantMenu from '../utils/useRestaurantMenu'



const RestaurantMenu = () => {
    const { resId } = useParams()   // use to access params from router 
    console.log('ResId______', resId)
    // const [menuData, setMenuData] = useState([])
    const apiUrl = MENU_API + resId + "&catalog_qa=undefined"
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.993758&lng=77.6822442&restaurantId=520635&catalog_qa=undefined&submitAction=ENTER

    const menuData = useRestaurantMenu(apiUrl)  // Custom Hook call
    console.log('useRestaurantMenu____', menuData)

    // useEffect(() => {
    //         fetchMenu()
    //     }, [])

    //     const fetchMenu = async () => {
    //         const data = await fetch(apiUrl)
    //         const json = await data.json()
    //         console.log('Menu Data res_____', json?.data?.cards)
    //         setMenuData(json?.data?.cards)
    //     }
    return (
        <div className=''>
            <h1 className='ml-40 font-bold text-xl mb-10'>{menuData[0]?.card?.card?.info?.name}</h1>
            <h3 className='ml-40 mb-5 text-red-800'>Menu Items</h3>
            {menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((i) =>
                <div key={i?.card?.info?.id} className='border-t-2 border-solid border-gray-200 h-20 ml-40 p-10 items-center w-[500px] flex justify-between'>
                    <ul>
                        <li>{i?.card?.info?.ratings?.aggregatedRating?.rating} {'★'}</li>
                        <li>{i?.card?.info?.name}</li>
                        <li>{(i?.card?.info?.defaultPrice == NaN ? i?.card?.info?.defaultPrice : i?.card?.info?.price) / 100}</li>
                    </ul>
                    <button className='px-4 py-2 bg-blue-300 h-10 rounded-lg' >Add</button>
                </div>
            )}

        </div>
    )
}

export default RestaurantMenu