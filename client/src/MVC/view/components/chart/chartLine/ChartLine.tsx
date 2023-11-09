import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "..";

export default function ChartLine({ data, color = "white" }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={600}
        height={230}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" tick={{ fontSize: 10, fill: color }} />
        <YAxis tick={{ fontSize: 10, fill: color }} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="time"
          stroke="white"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
