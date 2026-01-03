import MapView from '../../components/MapView.jsx'
import ContactBg from '../../assets/contact-bg.png'



const contact = () => {
  return (
    <div>
      <section className="mt-20 px-4 md:px-10 max-h-screen mb-28">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2.5fr] rounded-2xl">
          {/* Left side */}
          <div className="flex flex-col justify-center items-center bg-[#f5e2d3] rounded-l-2xl">
            <h1 className="font-black text-4xl">
              Contact
            </h1>
            <div className="rounded-lg border-orange-400 border px-10 py-5 flex justify-between items-center gap-5 mt-7">
              <p className="font-bold text-lg">HOME</p> <p className="font-bold text-xl text-gray-500">CONTACT</p>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full bg-cover bg-center rounded-r-2xl" style={{ backgroundImage: `url(${ContactBg})` }}>
            <img src="/Contact.png" alt="" className='object-cover' />
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="w-full bg-white px-14">
        <div className="form bg-gray-100 rounded-lg px-8 py-10 mb-14">
          <h1 className="text-2xl font-black">
            You can send your enquiry via the form below
          </h1>
          <span className="text-base text-gray-400 font-bold">Trip Name:  Velouria-Monte Sienna</span>

          <form action="" method="post" className='mt-5 w-full flex flex-col gap-5 p-2 mb-5'>
            <input type="text" className="px-5 py-2 w-full focus:outline-none border-gray-400 border rounded-lg" placeholder='Enter Your Name' />
            <input type="email" className="px-5 py-2 w-full focus:outline-none border-gray-400 border rounded-lg" placeholder='Enter Your Email' />
            <div className="grid grid-cols-[1fr_2fr]">
              <input type="text" className="px-5 py-2 w-full focus:outline-none border-gray-400 border rounded-lg" placeholder='Choose A country' />
              <input type="tel" className="px-5 py-2 w-full focus:outline-none border-gray-400 border rounded-lg" placeholder='Enter Your Contact Number' />
            </div>
            <div className="grid grid-cols-[1fr_2fr]">
              <input type="num" className="px-5 py-2 w-full focus:outline-none border-gray-400 border rounded-lg" placeholder='Enter number of adults ' />
              <input type="num" className="px-5 py-2 w-full focus:outline-none border-gray-400 border rounded-lg" placeholder='Enter number of children' />
            </div>
            <input type="num" className="px-5 py-2 w-full focus:outline-none border-gray-400 border rounded-lg" placeholder='Enquiry Subject' />

            <textarea name="" id="" rows={10} className='rounded-lg focus:outline-none border-gray-400 border px-5 py-5' placeholder='Enter Your message'></textarea>
          </form>

          <button className="px-6 py-4 bg-[#22bbbbd5] text-black rounded-md font-bold hover:cursor-pointer w-full sm:w-auto">
            Send Mail
          </button>
        </div>
      </section>

      {/* Google Maps */}
      <div className="w-full mb-28 mt-20">
        <MapView />
      </div>
    </div>
  )
}

export default contact