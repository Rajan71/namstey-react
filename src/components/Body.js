import { RestaurantCard, withPromotedLabel } from "./RestaurantCard"
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

export const Body = () => {

    // const arr = useState(list)  // useState always return a array and in the syntax we basically destructured the array
    // const listOfRes = arr[0];  // we can also use useState like this
    // const setListOfRes = arr[1]
    const [listOfRes, setListOfRes] = useState([])
    const [serach, setSearch] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9844618&lng=77.7064137&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await res.json()
            console.log('ressss____', json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setListOfRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (err) {
            console.log('errrr____', err)
        }

    }
    const onlineStatus = useOnlineStatus()
    if (onlineStatus == false) {
        return <h1>No internet connection!</h1>
    }
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
    return (
        <div className='body'>
            <div className='filter flex items-center'>
                <div className='m-4 p-4'>
                    <input
                        className="border border-solid border-black"
                        type="text" value={serach}
                        onChange={(e) => setSearch(e.target.value)} />
                    <button
                        className="px-4 py-2 bg-green-300 m-4 rounded-lg"
                        onClick={() => {
                        }
                        }>
                        Search
                    </button>
                </div>
                <button
                    className="px-4 bg-gray-100 h-10 rounded-lg"
                    onClick={() => {
                        let filterList = listOfRes.filter(res => res?.avgRating > 4)
                        setListOfRes(filterList)
                    }
                    }>
                    Top rated restaurants
                </button>
            </div>
            <div className='flex flex-wrap'>
                {/**on Click of res card we are routing to card detail via Link method with dynamic id */}
                {listOfRes?.map((res) =>
                    <Link key={res?.id} to={'/restaurants/' + res?.info?.id}>
                        {res?.info?.isOpen ? <RestaurantCardPromoted data={res} /> : <RestaurantCard data={res} />}

                    </Link>)}

            </div>
        </div>
    )
}