import { REST_URL } from "../utils/constant"
export const RestaurantCard = (props) => {
    console.log('Props_____', props)
    return (
        <div className='res-card'>
            <img className='res-logo' alt="res-logo" src={REST_URL} />
            <h3>{props?.data?.name}</h3>
            <h5>{props?.data?.cuisines?.join()}</h5>
            <h5>{props?.data?.avgRating}</h5>
            <h5>{props?.data?.deliveryTime}</h5>
        </div>
    )
}