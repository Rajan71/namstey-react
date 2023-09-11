import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constant'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'



const RestaurantMenu = () => {
    const { resId } = useParams()   // use to access params from router 
    console.log('ResId______', resId)
    const [expandIndex, setExpandIndex] = useState(null)
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
    const categories = menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>
        c?.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    console.log('categories____', categories)
    return (
        <div className='text-center'>
            <h1 className='font-bold text-xl my-5'>{menuData[0]?.card?.card?.info?.name}</h1>
            <h3 className='mb-5 text-red-800'>Menu Items</h3>
            {categories?.map((d, index) => <RestaurantCategory key={d?.card?.card?.title} data={d}
                showIndex={index === expandIndex ? true : false}
                setShowIndex={() => setExpandIndex(index)} />)}
            {/* {menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((i) =>
                <div key={i?.card?.info?.id} className='border-t-2 border-solid border-gray-200 h-20 ml-40 p-10 items-center w-[500px] flex justify-between'>
                    <ul>
                        <li>{i?.card?.info?.ratings?.aggregatedRating?.rating} {'★'}</li>
                        <li>{i?.card?.info?.name}</li>
                        <li>{(i?.card?.info?.defaultPrice == NaN ? i?.card?.info?.defaultPrice : i?.card?.info?.price) / 100}</li>
                    </ul>
                    <button className='px-4 py-2 bg-blue-300 h-10 rounded-lg' >Add</button>
                </div>
            )} */}

        </div>
    )
}

export default RestaurantMenu