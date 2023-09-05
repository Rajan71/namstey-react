import React, { useEffect, useState } from "react";

const useRestaurantMenu = (apiUrl) => {
    const [resInfo, setResInfo] = useState([])
    useEffect(() => {

        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(apiUrl)
        const json = await data.json()
        console.log('Menu Data res_____', json?.data?.cards)

        setResInfo(json?.data?.cards)

    }
    return resInfo
}

export default useRestaurantMenu;