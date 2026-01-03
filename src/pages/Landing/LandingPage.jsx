import Carousel from '../../components/CardCarousel/CardCarousel.jsx';
import Ticketing from '../../components/Ticketing.jsx';
import Leftbg from '../../assets/Hero_section/left_bg.png'
import Rightbg from '../../assets/Hero_section/right_bg.png'
import divider from '../../assets/Hero_section/Divider.png'
import Destinationbg from '../../assets/Destinations_section/bg.jpg'
import Morocco from '../../assets/Destinations_section/morocco.jpg'
import BookNow from '../../assets/Destinations_section/bookNow.png'
import Logo from '../../assets/header/logo.png'
import Spa from '../../assets/Spa.jpg'
import FriendGroup from '../../assets/group-friends-arab-restaurant.jpg'
import House from '../../assets/contemporary-house.jpg'
import OffRoad from '/CarouselImages/off_road.jpg'
import Mask from '../../assets/Masked.png'
import Destination1 from '../../assets/Holidays/Image1.png'
import Destination2 from '../../assets/Holidays/Image2.png'
import Destination3 from '../../assets/Holidays/Image3.png'
import Destination4 from '../../assets/Holidays/Image4.png'
import Destination5 from '../../assets/Holidays/Image5.png'
import TestimonialBg from '../../assets/testimonials_bg.png'
import TestimonialsImg from '../../assets/testimonialsImg.png'
import NaijaLogo from '../../assets/Nigeria-logo.png'
import Yellow from '../../assets/Yellow.png'
import { CiSearch, CiUser, CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance, FaPlaneDeparture, FaCarSide, FaSpa, FaCar, FaUmbrellaBeach, FaMountain, FaShip, FaCampground, FaStar } from "react-icons/fa";
import { BsHouse } from "react-icons/bs";
import { MdOutlineTableRestaurant } from "react-icons/md";


const LandingPage = () => {

  const features = [
    {
      title: "VIP Beaches",
      icon: FaUmbrellaBeach,
      description:
        "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full detention.",
    },
    {
      title: "Mountain Walks",
      icon: FaMountain,
      description:
        "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full detention.",
    },
    {
      title: "Luxury Yachts",
      icon: FaShip,
      description:
        "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full detention.",
    },
    {
      title: "Recreational Camps",
      icon: FaCampground,
      description:
        "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full detention.",
    },
  ];


  return (
    <div className='overflow-x-hidden'>
      <section className="mt-20 px-4 md:px-10 max-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left Side */}
          <div className="hidden md:grid grid-cols-[7fr_1fr] h-dvh  md:rounded-l-[30px] md:min-h-screen" style={{ backgroundImage: `url(${Leftbg})` }}>
            <div className="flex flex-col justify-center items-center px-4 h-full">
              <h1 className="text-[#30E7D5] text-sm md:text-3xl font-Just-Another-Hand">Vacation Agency</h1>
              <div className="search text-center mt-4">
                <h1 className="text-white text-3xl md:text-5xl mt-4 font-semibold font-Outfit">Find Next Place to Visit</h1>
                <p className='text-white mt-2 text-3xl md:text-4xl font-Just-Another-Hand'>Choose from thousands of organized aAdventures</p>

                {/* Search Bar */}
                <div className="search-bar bg-white mt-6 flex justify-center items-center rounded-full md:w-full max-w-md px-2">
                  <div className=""></div>
                  <div className="flex justify-between items-center">
                    <input type="text" placeholder='Search your destination...' className='rounded-l-full px-6 py-4 w-96 focus:outline-none' />
                    <div className="search-icon flex justify-self-end">
                      <CiSearch size={36} className='bg-[#30E7D5] rounded-full p-2 cursor-pointer' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Users */}
              <div className="text-white mt-10 flex flex-wrap justify-center items-center gap-3">
                <CiUser size={26} className='inline-block mr-2' />
                <span className='font-bold'>50k+ Happy Travelers</span>
                <span className='ml-2'><CiFacebook size={26} /></span>
                <span className='ml-2'><FaXTwitter size={22} /></span>
                <span className='ml-2'><FaBehance size={26} /></span>
              </div>
            </div>

            {/* Divider */}
            <img src={divider} alt="" className="divider hidden relative left-20 md:flex justify-end h-dvh" />
          </div>

          {/* Right side */}
          <div className="relative md:static bg-cover bg-center h-screen md:h-full w-full md:rounded-r-[30px]" style={{ backgroundImage: `url(${Rightbg})` }}>

            {/* Overlay */}
            <div className="absolute md:hidden inset-0 bg-black/60"></div>
            {/* <img src={Rightbg} alt="" className="object-cover -z-10 h-full w-full rounded-r-[30px]" /> */}

            {/* Content */}
            <div className="md:hidden z-10 relative flex flex-col justify-between px-4 py-8 h-full">
              <h1 className="text-[#30E7D5] text-5xl md:text-4xl font-Just-Another-Hand">Vacation Agency</h1>
              <div className="search text-center mt-4">
                <h1 className="text-white text-3xl md:text-5xl mt-4 font-semibold font-Outfit">Find Next Place to Visit</h1>
                <p className='text-white mt-2 text-3xl font-Just-Another-Hand'>Choose from thousands of organized aAdventures</p>

                {/* Search Bar */}
                <div className="search-bar bg-white mt-6 flex justify-center items-center rounded-full w-full max-w-md px-2">
                  <div className=""></div>
                  <div className="flex justify-between items-center">
                    <input type="text" placeholder='Search your destination...' className='rounded-l-full px-6 py-4 w-auto focus:outline-none' />
                    <div className="search-icon flex items-center justify-center">
                      <CiSearch size={36} className='bg-[#30E7D5] rounded-full p-2 cursor-pointer' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Users */}
              <div className="text-white mt-10 flex flex-wrap justify-start items-center gap-3">
                <CiUser size={26} className='inline-block mr-2' />
                <span className='font-bold text-lg'>50k+ Happy Travelers</span>
                <span className='ml-2'><CiFacebook size={26} /></span>
                <span className='ml-2'><FaXTwitter size={26} /></span>
                <span className='ml-2'><FaBehance size={26} /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <main className="w-full static md:relative bottom-80 -z-50">
        {/* Popular Destinations */}
        <section className="w-full hidden md:block">
          <div className="section-header flex flex-col justify-center items-center align-text-bottom px-16 pt-96 pb-16" style={{ backgroundImage: `url(${Destinationbg})` }}>
            <h1 className='text-3xl md:text-5xl font-black mt-9 font-Barlow '>Popular Destinations</h1>
            <p className='mt-3 text-sm md:text-2xl font-Just-Another-Hand'>Vacation Agency</p>
          </div>
        </section>

        <div className="explore-morocco grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20 py-16">
          {/* Left */}
          <div className="morocco-left text-center md:text-left">
            <h1 className="font-black text-3xl md:text-4xl font-Barlow text-[#040404]">Explore Morocco</h1>
            <p className="mt-4 font-Just-Another-Hand text-2xl">Up Next: AFCON at Morocco <span className="text-[#1C77F3] font-semibold">December 22nd, 2025</span></p>
            <img src={Morocco} alt="Morocco" className="mt-6 w-full md:w-2/3 rounded-lg object-cover md:object-fill md:h-100 h-50" />
          </div>
          {/* Right */}
          <div className="morocco-right flex flex-col items-center">
            <p className='mb-10 max-w-xl'>
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
                <button className="book-btn mt-10 cursor-pointer flex justify-self-start"><a href="" className='bg-[#2BBBE6] px-8 py-4 rounded-sm text-black font-extrabold transition-all ease-in-out duration-300 hover:bg-gray-800 font-Barlow'>BOOK NOW</a></button>
              </div>
              <div className="flex justify-center items-center">
                <img src={BookNow} alt="Book Now" className='max-w-full h-auto' />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <section className="feature-section mt-10 px-6 md:px-10 py-10 bg-white">
          {/* HEADER */}
          <div className="feature-header text-center text-black mb-8">
            <p className="text-3xl font-light font-Just-Another-Hand">
              Explore Recent Upcoming Travels
            </p>
            <h1 className="text-2xl md:text-4xl font-black font-Barlow">
              Featured Tour Packages
            </h1>
          </div>

          <div className="featured-carousel">

            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 mt-10 font-Urbanist text-base font-bold">
              {[
                "Multi Holidays",
                "Sport Holidays",
                "Overwater Villa Holidays",
                "Luxury Holidays",
                "Skill Holidays",
              ].map((item) => (
                <button
                  key={item}
                  className="px-6 py-2 bg-[#f0ecf1] rounded-full transition hover:bg-[#1c77f3] hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* CAROUSEL */}
            <div className="carousel mt-10">
              <Carousel />
            </div>

            {/* FOOTER INFO */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-8 text-center lg:text-left w-4/5 mx-auto">
              <div className="flex justify-between items-center gap-3">
                <p className="font-semibold">Excellent</p>
                <img src={Yellow} alt="" />
              </div>

              <p className="max-w-md text-sm font-Barlow text-center">
                Carefully curated travel packages with everything you need for an
                unforgettable journey. All packages include flights,
                accommodation, and exclusive experiences.
              </p>

              <div className="logo flex items-center justify-center">
                <img src={Logo} alt="logo" width={40} height={40} />
                <h3 className="text-xl font-bold ml-2">
                  HandPros Hospitality
                </h3>
              </div>
            </div>

          </div>
        </section>


        {/* Explore Options Section */}
        <section className="options bg-white px-6 md:px-14 py-10 mt-10">
          {/* Header */}
          <div className="section-header flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-7">
            <div className="">
              <span className="text-2xl font-Just-Another-Hand">Vacation Agency</span><br />
              <h1 className="font-extrabold text-xl md:text-4xl font-Barlow">
                Explore Options
              </h1>
            </div>
            <input type="email" placeholder='Enter your email' name="email" id="email" className='border-b-gray-700 border-b text-[#040404] w-full md:w-142.5 pb-2.5 focus:outline-none text-3xl font-Barlow' />
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7">

            {/* Left */}
            <div className="px-0 md:px-10 flex flex-col">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 mb-5">
                <ul className='space-y-2 font-Just-Another-Hand text-3xl'>
                  <li className="flex gap-2 items-center"><span><BsHouse className='h-7 w-7' /></span>Accomodation</li>
                  <li className="flex gap-2 items-center"><span><MdOutlineTableRestaurant /></span>Restaurant</li>
                  <li className="flex gap-2 items-center"><span><FaSpa /></span>Spa</li>
                  <li className="flex gap-2 items-center"><span><FaCar /></span>Book a Ride</li>
                </ul>
                <img src={Spa} alt="Spa" className='object-cover h-50 w-98  rounded-t-2xl' />
                <div className="text-xl md:text-4xl font-black font-Barlow">
                  <p><span className="text-red-600">84K</span> Happy Adventures</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_3fr] gap-6 mt-3">
                <img src={FriendGroup} alt="Friends" className='object-cover rounded-t-2xl h-32 w-full' />
                <img src={House} alt="House" className='object-cover rounded-t-2xl h-40 w-full' />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6 md:pr-10 pr-0">
              <img src={OffRoad} alt="Off Road" className='object-cover rounded-t-md h-64 w-full' />
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
                <div className="">
                  <img src={Mask} alt="" className='rounded-full' width={90} height={90} />
                </div>
                <p className="text-sm text-center sm:text-left font-Barlow">No one shall be subjected to arbitrary arrest or detention, arrest or exile.Everyone is entitled in full detention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="md:px-10 px-6 bg-white mt-10">
          {/* Header */}
          <div className="section-header text-center">
            <p className="text-3xl font-Just-Another-Hand">
              Vacation Agen c
            </p>
            <h1 className="font-extrabold text-3xl md:text-5xl font-Barlow">
              Travel Blog & Insights
            </h1>
            <p className="mt-7 text-sm md:text-base max-w-xl mx-auto">
              Explore stories, tips, and inspiration from around the world. Discover destinations, travel guides, and experiences that help you plan your next unforgettable journey.
            </p>
          </div>

          {/* Add this section's main carousel later... for now to save time use the already made one */}
          <div className="mt-10 mb-20">
            <Carousel />
          </div>
        </section>

        {/* Best Holidays section */}
        <section className="mt-10 pl-5 pr-14">
          {/* Header */}
          <div className="section-header text-center md:mb-28 mb-16">
            <p className="text-3xl font-Just-Another-Hand">Vacation Agen c</p>
            <h1 className="font-extrabold text-3xl md:text-4xl font-Barlow">The Best Holidays</h1>
          </div>

          {/* Background */}
          <div className="w-full px-6 md:px-10 bg-center bg-cover rounded-b-4xl" style={{ backgroundImage: `url(${Destinationbg})` }}>

            {/* Image row */}
            <div className="flex relative md:bottom-20 flex-wrap md:flex-nowrap justify-center gap-4 md:gap-5 items-center md:px-20">
              {[Destination1, Destination2, Destination3, Destination4, Destination5].map(
                (img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="rounded-lg object-cover w-1/2 sm:w-1/3 md:w-1/6"
                  />
                )
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 px-4 md:px-10 pb-20">
              {features.map(({ title, icon: Icon, description }) => (
                <div key={title} className="flex flex-col text-center md:text-left">

                  {/* Icon */}
                  <div className="mb-4 flex justify-center md:justify-start">
                    <Icon className="text-4xl text-[#040404]" />
                  </div>

                  <h2 className="font-bold text-xl mb-2 font-Barlow">{title}</h2>
                  <p className="text-base font-Barlow">{description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Testimonials section */}
        <section className="mt-14 px-10">
          <div className="section-header text-center mb-28">
            <p className="text-3xl font-Just-Another-Hand">What People Say</p>
            <h1 className="font-black text-3xl md:text-5xl font-Barlow">The Best Holidays</h1>
          </div>

          {/* Add testimonial Carousel here later... Just using the same carousel component for now */}
          <div className="">
            <Carousel />
          </div>
        </section>

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
              <div className="text-content max-w-xl">
                <p className="text-3xl  font-Just-Another-Hand">HandyPros</p>
                <h1 className="font-extrabold text-[40px] mb-5">
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


        <div className="mt-16 px-6 md:px-0 md:w-3/4 mx-auto">
          <h2 className="font-black text-2xl md:text-3xl mb-10 text-center">
            Trusted By the highest performance teams at
          </h2>

          <div className="flex justify-between items-center gap-6">

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
                className="object-cover"
                width={100}
                height={100}
              />
            </div>

            {/* Placeholder Logos */}
            <div className="h-10 bg-gray-100 rounded" />
            <div className="h-10 bg-gray-100 rounded hidden sm:block" />
            <div className="h-10 bg-gray-100 rounded hidden md:block" />

          </div>
        </div>

      </main>
    </div>
  )
}

export default LandingPage