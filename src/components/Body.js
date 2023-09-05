import { RestaurantCard } from "./RestaurantCard"
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

    return (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type="text" value={serach}
                        onChange={(e) => setSearch(e.target.value)} />
                    <button
                        onClick={() => {
                        }
                        }>
                        Search
                    </button>
                </div>
                <button
                    onClick={() => {
                        let filterList = listOfRes.filter(res => res?.avgRating > 4)
                        setListOfRes(filterList)
                    }
                    }>
                    Top rated restaurants
                </button>
            </div>
            <div className='res-container'>
                {/**on Click of res card we are routing to card detail via Link method with dynamic id */}
                {listOfRes?.map((res) =>
                    <Link key={res?.id} to={'/restaurants/' + res?.info?.id}> <RestaurantCard data={res} /></Link>)}

            </div>
        </div>
    )
}