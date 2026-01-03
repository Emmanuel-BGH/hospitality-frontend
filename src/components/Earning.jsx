import { TfiStatsUp } from "react-icons/tfi";

const Earning = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-700">
          Earning
        </h3>
        <div className="bg-[#2BBBE6] p-2 flex items-center justify-center text-white rounded-lg">
          <TfiStatsUp />
        </div>
      </div>

      <div className="flex flex-col w-full mx-auto text-center justify-center items-center">
        <h1 className="text-[#33314B] text-lg text-semibold">
          $89,670
        </h1>
        <span className="text-[#1C77F3] text-[10px]">+28.8%</span>
        <p className="text-[#33314B] text-sm mt-3">This Month Growth</p>

        <button className="text-white font-light bg-[#1C77F3] text-xs md:text-sm px-8 py-2 rounded-full mt-5 cursor-pointer font-Poppins">Withdraw money</button>
      </div>
    </div>
  )
}

export default Earning