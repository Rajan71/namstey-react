import React from 'react'
import { useParams } from 'react-router-dom'



const RestaurantMenu = () => {
    const { resId } = useParams()   // use to access params from router 
    console.log('ResId______', resId)
    return (
        <div className='menu'>
            <h1>Restaurant Name</h1>
            <h3>Menu</h3>
        </div>
    )
}

export default RestaurantMenu