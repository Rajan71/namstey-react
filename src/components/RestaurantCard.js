import { REST_URL } from "../utils/constant"
export const RestaurantCard = (props) => {
    console.log('Props_____', props)
    const data = props?.data?.info
    return (
        <div className='res-card'>
            <img className='res-logo' alt="res-logo" src={REST_URL} />
            <h3>{data?.name}</h3>
            <h5 className="cuisines">{data?.cuisines?.join()}</h5>
            <h5>{data?.avgRating}</h5>
            <h5>{data?.deliveryTime}</h5>
        </div>
    )
}