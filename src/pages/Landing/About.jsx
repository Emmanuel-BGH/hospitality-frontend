import Ticketing from '../../components/Ticketing.jsx'
import Carousel from '../../components/CardCarousel/CardCarousel.jsx';
import BookNow from '../../assets/Destinations_section/bookNow.png'
import Explore from '../../assets/Explore.png'
import ContactBg from '../../assets/contact-bg.png'
import TestimonialsImg from '../../assets/testimonialsImg.png'
import NaijaLogo from '../../assets/Nigeria-logo.png'
import TestimonialBg from '../../assets/testimonials_bg.png'
import { FaPlaneDeparture, FaCarSide, FaStar } from "react-icons/fa";


const About = () => {
  return (
    <div className='overflow-x-hidden'>
      <section className="mt-20 px-4 md:px-10 max-h-screen mb-28">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2.5fr] md:rounded-2xl rounded-none">
          {/* Left side */}
          <div className="flex flex-col justify-center items-center bg-[#f5e2d3] rounded-l-2xl">
            {/* <h1 className="font-black text-4xl">
              Contact
            </h1> */}
            <div className="rounded-lg border-orange-400 border px-10 py-5 flex justify-between items-center gap-5 mt-7">
              <p className="font-bold text-lg">HOME</p> <p className="font-bold text-xl text-gray-500">ABOUT</p>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full bg-cover bg-center rounded-r-2xl" style={{ backgroundImage: `url(${ContactBg})` }}>
            <img src="/Contact.png" alt="" className='object-cover' />
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20 py-10">
        {/* Left */}
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl">Explore Nearby</h1>
          <p className="mt4 font-Just-Another-Hand text-2xl">Check out beautiful places around the world</p>
          <img src={Explore} alt="" className='mt-6 md:h-full h-1/2 w-full md:w-2/3 rounded-lg object-cover' />
        </div>
        {/* Right */}
        <div className="flex flex-col items-center">
          <p className="mb-10 mx-w-xl">
            Explore our handpicked destinations around the world. From tropical paradises to bustling citiies, your travel dreams crafted into unforgettable experiences, find your perfect getaway.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-8">
              <div>
                <FaPlaneDeparture size={40} className='bg-black text-white p-2 rounded-md mb-3' />
                <h2 className='font-bold text-xl'>Trusted Travel Guide</h2>
                <p className='text-sm'>From planning to exploration, we ensure every moment is seamless, safe and memorable.</p>
              </div>
              <div className="mt-4">
                <FaCarSide size={40} className='bg-black text-white p-2 rounded-md mb-3' />
                <h2 className="font-bold text-xl">Personalized Trips</h2>
                <p className='text-sm'>We customize detail to match your peace and passion.</p>
              </div>
              <div className="book-btn mt-10 cursor-pointer"><a href="" className='bg-[#22bbbbd5] px-8 py-4 rounded-sm text-black font-bold transition-all ease-in-out duration-300 hover:bg-gray-800'>BOOK NOW</a></div>
            </div>
            <div className="flex justify-center items-center">
              <img src={BookNow} alt="Book Now" className='max-w-full h-auto' />
            </div>
          </div>
        </div>
      </div>

      {/* Ticketing section */}
      <section className='mt-10 px-14 w-full h-auto'>
        <Ticketing />
      </section>

      {/* HandyPros */}
      <section className="bg-white mt-16 px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-10">

          {/* LEFT */}
          <div className="flex flex-col justify-between gap-10">

            {/* Text */}
            <div className="text-content max-w-xl pr-20">
              <p className="text-3xl font-Just-Another-Hand">HandyPros</p>
              <h1 className="font-black text-3xl mb-5">
                Building Destination to Get Things Done
              </h1>
              <p className="text-sm">
                No one shall be subjected to arbitrary arrest, detention
                or exile. Everyone is entitled in full equality.
              </p>
            </div>

            {/* Features Box */}
            <div
              className="bg-cover bg-center px-6 md:px-16 py-10 md:py-12 w-full rounded-lg"
              style={{ backgroundImage: `url(${TestimonialBg})` }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className='flex items-center gap-2'>
                    <span><FaStar color='gold' /></span>
                    <span>Trusted, local travel experts</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span><FaStar color='gold' /></span>
                    <span>Real-time itinerary updates</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span><FaStar color='gold' /></span>
                    <span>Various versions have evolved over</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className='flex items-center gap-2'>
                    <span><FaStar color='gold' /></span>
                    Flexible, hassle-free bookings
                  </li>
                  <li className='flex items-center gap-2'>
                    <span><FaStar color='gold' /></span>
                    Trusted, local travel experts
                  </li>
                  <li className='flex items-center gap-2'>
                    <span><FaStar color='gold' /></span>
                    Real-time itinerary updates
                  </li>
                </ul>
              </div>

              <button className="px-6 py-4 mt-8 bg-[#2BBBE6] text-black rounded-md font-bold hover:cursor-pointer w-full sm:w-auto">
                EXPLORE TRIP
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-first lg:order-0">
            <img
              src={TestimonialsImg}
              alt="Testimonials"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

        </div>
      </section>

      {/* Testimonial Section */}
      <section className="">
        <Carousel />
      </section>

      {/* Sponsors */}
      <div className="mt-16 px-6 md:px-0 md:w-3/4 mx-auto mb-16">
        <h2 className="font-black text-2xl md:text-3xl mb-10 text-center">
          Trusted By the highest performance teams at
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">

          {/* Nissan */}
          <div className="text-gray-400 text-center">
            <p className="text-xl font-semibold">NISSAN</p>
            <span className="text-[10px]">MOTOR CORPORATION</span>
          </div>

          {/* Nigerian Logo */}
          <div className="flex justify-center">
            <img
              src={NaijaLogo}
              alt="Nigerian Logo"
              className="object-contain h-10"
            />
          </div>

          {/* Placeholder Logos */}
          <div className="h-10 bg-gray-100 rounded" />
          <div className="h-10 bg-gray-100 rounded hidden sm:block" />
          <div className="h-10 bg-gray-100 rounded hidden md:block" />

        </div>
      </div>
    </div>
  )
}

export default About