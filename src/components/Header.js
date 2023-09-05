import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"


export const Header = () => {
    const onlineStatus = useOnlineStatus()
    return (
        <div className='flex justify-between bg-pink-100 shadow-lg m-4'>
            <div className='logo-container'>
                <img className='w-21 h-32' src={LOGO_URL} />
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Stauts: {onlineStatus ? '✅' : '❌'}</li>
                    {/**Link is used to navigate to a particular path without refreshing the whole page */}
                    <li className="px-4"><Link to='/'>Home</Link></li>
                    <li className="px-4"><Link to='/about'>About Us</Link></li>
                    <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                </ul>
            </div>
        </div>
    )
}