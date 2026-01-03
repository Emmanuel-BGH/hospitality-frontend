import { CiGlobe } from "react-icons/ci";

const data = [
  {
    country: "England",
    flag: "/Flags/GB.png",
    customers: 1200,
    bookings: 1400,
    value: "$190,700",
    bounce: "23.44%",
  },
  {
    country: "Brazil",
    flag: "/Flags/BR.png",
    customers: 400,
    bookings: 562,
    value: "$143,960",
    bounce: "32.14%",
  },
  {
    country: "United State",
    flag: "/Flags/US.png",
    customers: 1200,
    bookings: 2500,
    value: "$230,900",
    bounce: "29.9%",
  },
  {
    country: "Africa",
    flag: "/Flags/AFC.png",
    customers: 800,
    bookings: 1200,
    value: "$120,300",
    bounce: "22.45%",
  },
  {
    country: "Australia",
    flag: "/Flags/AU.png",
    customers: 2500,
    bookings: 3300,
    value: "$350,000",
    bounce: "38.40%",
  },
  {
    country: "Germany",
    flag: "/Flags/GER.png",
    customers: 2500,
    bookings: 3900,
    value: "$440,000",
    bounce: "40.22%",
  },
];

const BookingsTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="w-full border-b-gray-300 border-b pb-5 mb-3">
        <h2 className="text-lg font-semibold">
          Bookings by country
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          {/* Head */}
          <thead className="text-gray-400">
            <tr>
              <th className="py-3 font-medium"><CiGlobe className="w-5 h-5" /></th>
              <th className="py-3 font-medium"><span>Country</span></th>
              <th className="py-3 font-medium">Customer</th>
              <th className="py-3 font-medium">Bookings</th>
              <th className="py-3 font-medium">Value</th>
              <th className="py-3 font-medium">Bounce</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition"
              >
                <td className="py-4">
                  <img src={item.flag} alt="" className="w-5 h-5 object-cover " />
                </td>
                <td className="py-4">
                  <span className="font-medium text-gray-800">
                    {item.country}
                  </span>
                </td>

                <td className="py-4 text-gray-600">
                  {item.customers}
                </td>

                <td className="py-4 text-gray-600">
                  {item.bookings}
                </td>

                <td className="py-4 font-medium text-gray-800">
                  {item.value}
                </td>

                <td className="py-4 text-gray-600">
                  {item.bounce}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookingsTable