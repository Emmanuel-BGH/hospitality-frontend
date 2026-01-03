import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaBlog, FaShieldAlt, FaBell, FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import Logo from '../assets/header/logo.png';

const SideBar = () => {
  return (
    <div className="bg-white rounded-2xl w-full px-3 pt-10 flex flex-col justify-center text-[#33314B] h-full">
      {/* Logo */}
      <Link to="/" className="logo flex items-center justify-center gap-3 mb-10 sticky top-0">
        <img src={Logo} alt="logo" width={50} height={50} className='' />
        <h3 className='text-[14px]'>HandPros Hospitality</h3>
      </Link>

      {/* Desktop Navigation */}
      <ul className='font-IBM-plex-sans'>
        <li className="font-bold hover:bg-[#1C77F3] hover:text-white px-5 py-2 rounded-xl transition ease-in-out delay-200 cursor-pointer flex justify-between items-center">
          <div className="space-x-1 flex items-center">
            <span><FaHome /></span><span>Home</span>
          </div>
          <IoIosArrowDown />
        </li>
        <li className="font-bold hover:bg-[#1C77F3] hover:text-white px-5 py-2 rounded-xl transition ease-in-out delay-200 cursor-pointer flex justify-between items-center">
          <div className="space-x-1 flex items-center">
            <span><MdAdminPanelSettings /></span><span>Admins</span>
          </div>
          <IoIosArrowDown />
        </li>
        <li className="font-bold hover:bg-[#1C77F3] hover:text-white px-5 py-2 rounded-xl transition ease-in-out delay-200 cursor-pointer flex justify-between items-center">
          <div className="space-x-1 flex items-center">
            <span>< FaBook /></span><span>Bookings</span>
          </div>
          <IoIosArrowDown />
        </li>
        <li className="font-bold hover:bg-[#1C77F3] hover:text-white px-5 py-2 rounded-xl transition ease-in-out delay-200 cursor-pointer flex justify-between items-center">
          <div className="space-x-1 flex items-cente">
            <span>< FaBlog /></span><span>Blog & Media</span>
          </div>
          <IoIosArrowDown />
        </li>
        <li className="font-bold hover:bg-[#1C77F3] hover:text-white px-5 py-2 rounded-xl transition ease-in-out delay-200 cursor-pointer flex justify-between items-center">
          <div className="space-x-1 flex items-center">
            <span><FaShieldAlt /></span><span>Authentication</span>
          </div>
          <IoIosArrowDown />
        </li>
        <li className="font-bold hover:bg-[#1C77F3] hover:text-white px-5 py-2 rounded-xl transition ease-in-out delay-200 cursor-pointer flex justify-between items-center">
          <div className="space-x-1 flex items-center">
            <span><FaBell /></span><span>Notification</span>
          </div>
          <IoIosArrowDown />
        </li>
        <li className="font-bold hover:bg-[#1C77F3] hover:text-white px-5 py-2 rounded-xl transition ease-in-out delay-200 cursor-pointer flex justify-between items-center">
          <div className="space-x-1 flex items-center">
            <span><FaCalendarAlt /></span><span>Calendar</span>
          </div>
          <IoIosArrowDown />
        </li>
        <li className="font-bold hover:bg-[#1C77F3] hover:text-white px-5 py-2 rounded-xl transition ease-in-out delay-200 cursor-pointer flex justify-between items-center">
          <div className="space-x-1 flex items-center">
            <span><AiFillMessage /></span><span>Message</span>
          </div>
          <IoIosArrowDown />
        </li>
      </ul>

      <div className="flex space-x-1 items-center mt-10 py-5 px-5 text-[#1C77F3] sticky bottom-0">
        <span><BiLogOutCircle className='text-xl font-bold' /></span><span className='text-base'>Logout</span>
      </div>
    </div>
  )
}

export default SideBar