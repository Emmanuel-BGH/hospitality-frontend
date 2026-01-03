import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, } from "recharts";

const data = [
  { month: "Jan", value: 3200 },
  { month: "Feb", value: 4100 },
  { month: "Mar", value: 5000 },
  { month: "Apr", value: 2800 },
  { month: "May", value: 3600 },
  { month: "Jun", value: 4200 },
  { month: "Jul", value: 3900 },
  { month: "Aug", value: 5200 },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Analysis
        </h2>
        <span className="text-sm text-gray-400 cursor-pointer">
          Monthly ⌄
        </span>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          {/* Gradient */}
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />

          <Bar
            dataKey="value"
            fill="url(#gradient)"
            radius={[8, 8, 8, 8]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AnalyticsChart