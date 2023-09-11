import { REST_URL } from "../utils/constant";

const ItemList = ({ item }) => {
    console.log('ItemList______', item)
    return (
        <div>
            {item?.map((item) => (



                <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
                    <div className="p-2 w-9/12">
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 :
                            item?.card?.info?.defaultPrice / 100}</span>
                        <p>{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12">
                        <button className="p-1 rounded-lg bg-black text-white shadow-lg absolute ">Add</button>
                        <img src={REST_URL + item?.card?.info?.imageId} className="w-36" />
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default ItemList;