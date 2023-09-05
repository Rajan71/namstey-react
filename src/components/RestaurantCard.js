import { REST_URL } from "../utils/constant"
export const RestaurantCard = (props) => {
    console.log('Props_____', props)
    const data = props?.data?.info
    return (
        <div className='m-4 p-4 w-[230px] bg-gray-100 rounded-lg hover:bg-gray-300'>
            <img className='res-logo' alt="res-logo" src={REST_URL + data?.cloudinaryImageId} />
            <h3 className="font-bold py-2 text-lg">{data?.name}</h3>
            <h5 className="flex-wrap">{data?.cuisines?.join(', ')}</h5>
            <h5>{data?.avgRating} {'stars'}</h5>
            <h5>{data?.costForTwo}</h5>
        </div>
    )
}