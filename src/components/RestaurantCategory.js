import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    // console.log('RestaurantCategory_____', props)
    const handleClick = () => {
        props?.setShowIndex()
    }
    return (
        <div>
            <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{props?.data?.card?.card?.title} ({props?.data?.card?.card?.itemCards?.length})</span>
                    <span>🔽</span>

                </div>
                {props?.showIndex && <ItemList item={props?.data?.card?.card?.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;