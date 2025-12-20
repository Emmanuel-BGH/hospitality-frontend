import React from 'react'
import Logo from '../../assets/header/logo.png';

const Header = () => {
  return (
    <div>
      <header className="w-full flex justify-between items-center p-4 bg-white fixed top-0 z-100">
        <div className="logo flex items-center">
          <img src={Logo} alt="logo" width={40} height={40} className='' />
          <h3 className='text-xl font-bold ml-2'>HandPros Hospitality</h3>
        </div>
        <nav>
          <ul className="flex items-center space-x-3">
            <li><a href="#" className="text-gray-700 hover:text-blue-500 font-bold">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500 font-bold">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500 font-bold">Contact</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500 font-bold">Blog</a></li>
          </ul>
        </nav>
        <div className="explore-btn"><a href="" className='bg-black px-8 py-4 rounded-sm text-white font-bold transition-all ease-in-out duration-300 hover:bg-gray-800'>Explore Trip</a></div>
      </header>
    </div>
  )
}

export default Header