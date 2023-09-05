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
        <div className='menu'>
            <h1>{menuData[0]?.card?.card?.info?.name}</h1>
            <h3>Menu</h3>
            {menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((i) =>
                <ul key={i?.card?.info?.id}>
                    <li>{i?.card?.info?.name}</li>
                </ul>
            )}

        </div>
    )
}

export default RestaurantMenu