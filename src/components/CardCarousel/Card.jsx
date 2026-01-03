

const Card = ({ image, place, fee }) => {
  return (
    <div className="h-auto bg-white rounded-lg shadow">
      <img src={image} alt={place} className="h-40 w-full object-cover rounded-t-md" />

      <div className="px-4 relative bottom-4 border-b-gray-300 border-b pb-4 mx-2">
        <p className="text-sm text-white bg-gray-600 rounded-full px-4 py-2  w-1/3">{fee}</p>
        <h2 className="mt-3 font-semibold text-lg">{place}</h2>
      </div>

      <div className="flex justify-between px-4 py-2 mx-2 border-b-gray-300 border-b pb-4">
        <p>Destination:</p>
        <p className="text-sm font-bold">{place}</p>
      </div>
      <p className="flex items-center justify-center mx-2 py-2 px-4">
        Accomodations, Flights, Transfers, Tours and Excursions, Activities
      </p>
      <button className="px-4 py-2 mx-2 my-4 text-center bg-[#22bbbbd5] text-black rounded-full w-11/12 font-bold hover:cursor-pointer">
        Book Now
      </button>
    </div>
  )
}

export default Card