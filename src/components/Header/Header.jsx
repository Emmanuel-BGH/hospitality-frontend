import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../assets/header/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="w-full bg-white fixed top-0 z-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          {/* Logo */}
          <div className="logo flex items-center">
            <img src={Logo} alt="logo" width={40} height={40} className='' />
            <h3 className='text-xl font-bold ml-2'>HandPros Hospitality</h3>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-3">
              <li><a href="/" className="text-gray-700 hover:text-blue-500 font-bold">Home</a></li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-blue-500 font-bold">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-blue-500 font-bold">
                  Contact
                </Link>
              </li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500 font-bold">Blog</a></li>
            </ul>
          </nav>

          {/* Desktop button */}
          <div className="explore-btn hidden md:block">
            <a href="" className='bg-black px-8 py-4 rounded-sm text-white font-bold transition-all ease-in-out duration-300 hover:bg-gray-800'>Explore Trip</a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl cursor-pointer z-50">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col gap-6 p-6 font-bold">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>

              <li>
                <a className="block text-center bg-black py-3 text-white rounded">
                  Explore Trip
                </a>
              </li>
            </ul>
          </div>
        )}

      </header>
    </div>
  )
}

export default Header