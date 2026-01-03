import { CiSearch } from "react-icons/ci";
import { IoIosBed, IoMdMore } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";
import { ImStatsBars } from "react-icons/im";
import { BsBank2 } from "react-icons/bs";
import { FaUserPlus, FaWallet, FaRegCreditCard, FaPaypal, FaBars } from "react-icons/fa";
import AnalyticsChart from "../components/AnalyticsChart";
import BookingsTable from "../components/BookingsTable";
import GrowthChart from "../components/GrowthChart";
import Earning from "../components/Earning";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { toggleSidebar } = useOutletContext();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between w-full p-4 md:p-0">
        <div className="flex items-center justify-between md:justify-start w-full md:w-auto space-x-4 md:space-x-6">

          {/* Toggle Button - only visible on mobile */}
          <button onClick={toggleSidebar} className="md:hidden text-xl bg-[#30E7D5] p-3 rounded-full flex justify-center items-center">
            <FaBars />
          </button>

          {/* Dashboard title - hidden on mobile */}
          <h3 className="hidden md:block md:font-bold md:text-lg">Dashboard</h3>

          {/* Search bar */}
          <div className="flex-1 md:flex-none bg-white rounded-3xl flex items-center space-x-2 md:space-x-1 border border-gray-400 pr-3 md:pr-5">
            <input
              type="text"
              className="flex-1 bg-transparent focus:outline-none border-none px-3 py-2 md:px-10 md:py-2"
              placeholder="Search..."
            />
            <span>
              <CiSearch className="text-xl" />
            </span>
          </div>
        </div>

        {/* Profile section */}
        <div className="flex items-center justify-between md:justify-end mt-4 md:mt-0 space-x-2">
          <img src="/superadmin.jpg" alt="" className="h-14 w-14 rounded-full object-cover" />
          <div className="hidden md:flex flex-col text-[#33314B] font-Poppins">
            <span>Roselle Ehrman</span>
            <span className="text-sm">Super Admin</span>
          </div>
        </div>
      </div>

      {/* Stats Section*/}
      <section className="md:mt-10 mt-5">

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 font-IBM-plex-sans">
          {/* Bookings */}
          <div className="flex p-3 md:p-3 items-center gap-2 md:gap-6 bg-white rounded-lg shadow-sm">
            <div className="bg-[#2BBBE6] flex items-center justify-center p-4 rounded-lg">
              <IoIosBed className="text-white" size={30} />
            </div>
            <div className="flex flex-col">
              <span>Bookings</span>
              <span>280</span>
              <span className="text-[#1c77f3] text-sm flex gap-2">
                <TfiStatsUp /> 55%
              </span>
            </div>
          </div>

          {/* Daily Users */}
          <div className="flex p-3 md:p-3 items-center gap-2 md:gap-6 bg-white rounded-lg shadow-sm">
            <div className="bg-[#2BBBE6] flex items-center justify-center p-4 rounded-lg">
              <ImStatsBars className="text-white" size={30} />
            </div>
            <div className="flex flex-col">
              <span>Today's Users</span>
              <span>2000</span>
              <span className="text-[#1c77f3] text-sm flex gap-2">
                <TfiStatsUp /> 8%
              </span>
            </div>
          </div>

          {/* Revenue */}
          <div className="flex p-3 md:p-3 items-center gap-2 md:gap-6 bg-white rounded-lg shadow-sm">
            <div className="bg-[#2BBBE6] flex items-center justify-center p-4 rounded-lg">
              <BsBank2 className="text-white" size={30} />
            </div>
            <div className="flex flex-col">
              <span>Revenue</span>
              <span>35k</span>
              <span className="text-[#1c77f3] text-sm flex gap-2">
                <TfiStatsUp /> 2%
              </span>
            </div>
          </div>

          {/* Analysis */}
          <div className="flex p-3 items-center gap-2 md:gap-6 bg-white rounded-lg shadow-sm">
            <div className="bg-linear-to-r from-[#FFBE85] to-[#FA7C0B] flex items-center justify-center p-4 rounded-lg">
              <FaUserPlus className="text-white" size={30} />
            </div>
            <div className="flex flex-col">
              <span>Analysis</span>
              <span>1800</span>
              <span className="text-[#1c77f3] text-sm flex gap-2">
                <TfiStatsUp /> 35%
              </span>
            </div>
          </div>
        </div>

        {/* Analytics & Transactions */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 mt-10">
          {/* Analytics Chart */}
          <AnalyticsChart />

          {/* Transaction */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-semibold text-lg">Transactions</span>
              <IoMdMore />
            </div>

            {/* Transaction List */}
            <ul className="mt-5 space-y-6">
              <li className="flex items-center justify-between">
                <div className="grid grid-cols-[1fr_2fr] gap-1.5">
                  <div className="bg-[#2BBBE6] flex items-center justify-center p-2 rounded-lg">
                    <FaWallet className="text-white" size={25} />
                  </div>
                  <div className="flex flex-col text-[10px]">
                    <span>Wallet</span>
                    <span className="text-sm">Starbucks</span>
                  </div>
                </div>
                <span className="">+70.20$</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="grid grid-cols-[1fr_2fr] gap-1.5">
                  <div className="bg-[#2BBBE6] flex items-center justify-center p-2 rounded-lg">
                    <FaRegCreditCard className="text-white" size={25} />
                  </div>
                  <div className="flex flex-col text-[10px]">
                    <span>Credit Card</span>
                    <span className="text-sm">Booked</span>
                  </div>
                </div>
                <span className="">-20.20$</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="grid grid-cols-[1fr_2fr] gap-1.5">
                  <div className="bg-[#2BBBE6] flex items-center justify-center p-2 rounded-lg">
                    <TfiStatsUp className="text-white" size={25} />
                  </div>
                  <div className="flex flex-col text-[10px]">
                    <span>Transfer</span>
                    <span className="text-sm">Refund</span>
                  </div>
                </div>
                <span className="">+30.20$</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="grid grid-cols-[1fr_2fr] gap-1.5">
                  <div className="bg-[#2BBBE6] flex items-center justify-center p-2 rounded-lg">
                    <FaPaypal className="text-white" size={25} />
                  </div>
                  <div className="flex flex-col text-[10px]">
                    <span>Paypal</span>
                    <span className="text-sm">Send Money</span>
                  </div>
                </div>
                <span className="">+20.20$</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="grid grid-cols-[1fr_2fr] gap-1.5">
                  <div className="bg-[#2BBBE6] flex items-center justify-center p-2 rounded-lg">
                    <FaWallet className="text-white" size={25} />
                  </div>
                  <div className="flex flex-col text-[10px]">
                    <span>Wallet</span>
                    <span className="text-sm">Mac D</span>
                  </div>
                </div>
                <span className="">+50.20$</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bookings , growth and earning */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 my-10">
          <BookingsTable />
          <div className="flex md:flex-col gap-6 md:gap-10">
            <GrowthChart />
            <Earning />
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard