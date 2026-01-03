import Header from '../../components/Header/Header.jsx';
import Leftbg from '../../assets/Hero_section/left_bg.png'
import Rightbg from '../../assets/Hero_section/right_bg.png'
import divider from '../../assets/Hero_section/Divider.png'
import Destinationbg from '../../assets/Destinations_section/bg.jpg'
import Morocco from '../../assets/Destinations_section/morocco.jpg'
import BookNow from '../../assets/Destinations_section/bookNow.png'
import { CiSearch, CiUser, CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance, FaPlaneDeparture, FaCarSide } from "react-icons/fa";


const LandingPage = () => {
  return (
    <div>
      <Header />
      <section className="hero  mt-20 px-10 max-h-screen">
        <div className="hero-content grid grid-cols-[1fr_1fr]">
          <div className=" grid grid-cols-[7fr_1fr] h-dvh rounded-l-[30px]" style={{ backgroundImage: `url(${Leftbg})` }}>
            <div className="text-content flex flex-col justify-center items-center">
              <h1 className="text-[#22bbbbd5]">Vacation Agency</h1>
              <div className="search text-center mt-4">
                <h1 className="text-white text-5xl font-semibold">Find Next Place to Visit</h1>
                <p className='text-white'>Choose from thousands of organized aAdventures</p>
                <div className="search-bar bg-white mt-6 flex justify-center items-center rounded-full">
                  <div className=""></div>
                  <div className="flex justify-between items-center">
                    <input type="text" placeholder='Search your destination...' className='rounded-l-full px-6 py-4 w-96 focus:outline-none' />
                    <div className="search-icon flex justify-self-end">
                      <CiSearch size={40} className='bg-[#22bbbbd5] text-black rounded-full p-2 mr-1 hover:cursor-pointer relative left-8 cursor-pointer' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white mt-36 flex items-center">
                <CiUser size={30} className='inline-block mr-2' />
                <span className='font-bold text-lg'>50k+ Happy Travelers</span>
                <span className='ml-2'><CiFacebook size={30} /></span>
                <span className='ml-2'><FaXTwitter size={25} /></span>
                <span className='ml-2'><FaBehance size={30} /></span>
              </div>
            </div>
            <img src={divider} alt="" className="divider relative left-20 flex justify-end h-dvh" />
          </div>

          <img src={Rightbg} alt="" className="object-fill -z-10 min-h-screen rounded-r-[30px]" />
        </div>
      </section>

      {/* Main Sections */}
      <main className="w-full relative bottom-80 -z-50">
        {/* Popular Destinations */}
        <section className="w-full">
          <div className="section-header flex flex-col justify-center items-center align-text-bottom px-16 pt-96 pb-16" style={{ backgroundImage: `url(${Destinationbg})` }}>
            <h1 className='text-5xl font-semibold mt-9'>Popular Destinations</h1>
            <p className='mt-5'>Vacation Agency</p>
          </div>
        </section>

        <div className="explore-morocco grid grid-cols-2 gap-4 px-20 py-16">
          <div className="morocco-left pr-72">
            <h1 className="font-bold text-4xl">Explore Morocco</h1>
            <p className="mt-4">Up Next: AFCON at Morocco <span className="text-[#1C77FF]">December 22nd, 2025</span></p>
            <img src={Morocco} alt="Morocco" className="mt-4 rounded-lg object-contain" />
          </div>
          <div className="morocco-right items-center">
            <div className="pr-72 mb-28">
              <p>Explore ur handpicked destinations around the world. From tropical paradises to bustling citiies, your travel dreams crafted into unforgettable experiences, find your perfect getaway</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <div className="mt-4">
                  <FaPlaneDeparture size={40} className='bg-black text-white p-2 rounded-md mb-4' />
                  <h2 className='font-bold text-2xl'>Trusted Travel Guide</h2>
                  <p>From planning to exploration, we ensure every moment is seamless, safe and memorable.</p>
                </div>
                <div className="mt-4">
                  <FaCarSide size={40} className='bg-black text-white p-2 rounded-md mb-4' />
                  <h2 className="font-bold text-2xl">Personalized Trips</h2>
                  <p>We customize detail to match your peace and passion.</p>
                </div>
                <div className="book-btn mt-10 cursor-pointer"><a href="" className='bg-[#22bbbbd5] px-8 py-4 rounded-sm text-black font-bold transition-all ease-in-out duration-300 hover:bg-gray-800'>BOOK NOW</a></div>
              </div>
              <div className="flex justify-center items-center object-contain">
                <img src={BookNow} alt="Book Now" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage