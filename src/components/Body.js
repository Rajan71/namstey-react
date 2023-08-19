import { RestaurantCard } from "./RestaurantCard"
import React, { useState } from 'react'

export const Body = () => {
    const list = [
        {
            id: "123",
            name: "KFC",
            logo: '',
            cuisines: ['Burger', 'American', 'Chinies', 'Indian'],
            costForTwo: 4000,
            deliveryTime: '30 min',
            avgRating: 4.8
        },
        {
            id: "456",
            name: "Dominos",
            logo: '',
            cuisines: ['Burger', 'American', 'Chinies', 'Indian'],
            costForTwo: 4000,
            deliveryTime: '30 min',
            avgRating: 3.8
        },
        {
            id: "789",
            name: "MC Donald",
            logo: '',
            cuisines: ['Burger', 'American', 'Chinies', 'Indian'],
            costForTwo: 4000,
            deliveryTime: '30 min',
            avgRating: 4.8
        }
    ]
    // const arr = useState(list)  // useState always return a array and in the syntax we basically destructured the array
    // const listOfRes = arr[0];  // we can also use useState like this
    // const setListOfRes = arr[1]
    const [listOfRes, setListOfRes] = useState(list)
    return (
        <div className='body'>
            <div className='filter'>
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
                {listOfRes?.map((res) =>
                    <RestaurantCard key={res?.id} data={res} />)}

            </div>
        </div>
    )
}