import { FaAngleDown } from "react-icons/fa";

export default function GrowthChart({ value = 78 }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-700">
          Growth
        </h3>
        <div className="flex justify-between gap-3 items-center  text-[#1C77F3] cursor-pointer">
          <span className="text-xs">
            2025
          </span>
          <FaAngleDown />
        </div>
      </div>

      {/* Chart */}
      <div className="relative flex items-center justify-center">
        <svg width="120" height="120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#1C77F3"
            strokeWidth="8"
            strokeDasharray="4 6"
          />

          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#1C77F3"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
        </svg>

        {/* Center text */}
        <div className="absolute text-center">
          <p className="text-xl font-bold text-gray-800">
            {value}%
          </p>
          <p className="text-xs text-gray-400">
            Growth
          </p>
        </div>
      </div>
    </div>
  );
}
