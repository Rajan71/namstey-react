import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"


export const Header = () => {
    const onlineStatus = useOnlineStatus()
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Stauts: {onlineStatus ? '✅' : '❌'}</li>
                    {/**Link is used to navigate to a particular path without refreshing the whole page */}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}