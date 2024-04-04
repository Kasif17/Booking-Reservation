import './header.css'
import { FaBed, FaCar, FaPlane, FaTaxi,  } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
       <div className="headerList">
        <div className="headerListItems active">
        <FaBed />
        <span>Stay</span>
        </div>
        <div className="headerListItems">
        <FaPlane />
        <span>Flights</span>
        </div>
        <div className="headerListItems">
        <FaCar />
        <span>CarRentals</span>
        </div>
        <div className="headerListItems">
        <FaBed />
        <span>Attractions</span>
        </div>
        <div className="headerListItems">
        <FaTaxi />
        <span>AirportTaxis</span>
        </div>
       </div>

       <h1 className='headerTitle'> A lifetime of discount. ? it's Genius</h1>
       <p className="headerDesc">
        Get reward for your travels unlock instant saving of 10% or more 
        with a free KhanBooking account
       </p>
       <button className='headerbtn'>Sign in / Register</button>
       </div>
    </div>
  )
}

export default Header
