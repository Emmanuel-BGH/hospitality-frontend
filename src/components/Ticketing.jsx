import Left_cloud from '../assets/Ticketing_section/left_cloud.png'
import Left from '../assets/Ticketing_section/left-50.png'
import Left_anchor from '../assets/Ticketing_section/left-anchor.png'
import Left_ballon from '../assets/Ticketing_section/left-hot.png'
import Camera from '../assets/Ticketing_section/Camera.png'
import Star from '../assets/Ticketing_section/star.png'
import Left_banner from '../assets/Ticketing_section/Left_banner.png'
import TicketImage from '../assets/Ticketing_section/Left-image.png'
import Dark from '../assets/Ticketing_section/dark.png'
import Aeroplane from '../assets/Ticketing_section/airplane.png'

const Ticketing = () => {
  return (
    <div>
      <div className="bg-[#F5E0D0] rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Left */}
        <div className="md:block hidden">
          <div className="grid grid-cols-3 gap-5">
            <img src={Left_cloud} alt="" />
            <img src={Left_banner} alt="" className='relative top-32' />
            <img src={Left_ballon} alt="" />
          </div>
          <div className="flex">
            <div className="grid grid-rows-2">
              <img src={Left} alt="" className='relative left-28 top-36' />
              <img src={Left_anchor} alt="" className='' />
            </div>
            <div className="flex items-end">
              <img src={TicketImage} alt="" className='w-full object-cover' />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex md:justify-start justify-center items-center py-10 md:relative">
          <div className="bg-white rounded-lg w-3/4 h-auto px-5 py-3 z-2">
            <div className="flex">
              <h1 className="font-black md:text-2xl text-xs">
                Find Your Ticket Now
              </h1>
              <img src={Aeroplane} alt="" className='object-fill w-14 md:w-1/2' />
            </div>
            <form action="post" className='mt-5'>
              <div className="grid grid-cols-2 gap-3 my-5">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-base font-bold">
                    From
                  </label>
                  <input type="text" className='border-b border-b-gray-400 px-2 py-3 ' placeholder='Where To Next?' />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-base font-bold">
                    To
                  </label>
                  <input type="text" className='border-b border-b-gray-400 px-2 py-3 ' placeholder='Where To Next?' />
                </div>
              </div>

              <div className="flex flex-col  my-5">
                <label htmlFor="" className="text-base font-bold">
                  Date of Departure
                </label>
                <input type="date" name="" id="" className='border-b border-b-gray-400 px-2 py-3 ' />
              </div>

              <div className="flex flex-col w-auto my-5">
                <label htmlFor="" className="text-base font-bold">
                  Date of Return (Optional)
                </label>
                <input type="date" name="" id="" className='border-b border-b-gray-400 px-2 py-3 ' />
              </div>

              <div className="grid grid-cols-2 gap-3 my-5">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-base font-bold">
                    Guest
                  </label>
                  <input type="text" className='border-b border-b-gray-400 px-2 py-3 ' placeholder='1 Person' />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-base font-bold">
                    $10 Budget
                  </label>
                  <input type="text" className='border-b border-b-gray-400 px-2 py-3 ' placeholder='10 USD' />
                </div>
              </div>
              <button className="my-10 cursor-pointer flex justify-self-start"><a href="" className='bg-[#2BBBE6] px-8 py-4 rounded-sm text-black md:text-base text-xs font-bold transition-all ease-in-out duration-300 hover:bg-gray-800'>SEARCH FLIGHT</a></button>
            </form>
          </div>
          <div className=" hidden md:flex flex-col justify-between space-y-20 w-1/4">
            <img src={Dark} alt="" className='z-1 relative right-10' />
            <img src={Camera} alt="" className='w-20' />
            <img src={Star} alt="" className='w-24' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticketing