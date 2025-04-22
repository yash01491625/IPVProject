"use client";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

interface ModifiedChartProps {
  data: number[];
  title: string;
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white text-xs px-2 py-1 rounded shadow">
        Frequency: {payload[0].value}
      </div>
    );
  }
  return null;
};

export default function ModifiedChart({ data, title }: ModifiedChartProps) {
  const chartData = data.map((freq, index) => ({
    intensity: index,
    frequency: freq,
  }));

  return (
    <>
      {data.length > 0 && (
        <div className={`font-bold text-lg ml-2 `}>{title}</div>
      )}
      <div className="w-full h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "#00000020" }}
            />
            <Bar dataKey="frequency" fill="#ff2056" barSize={2} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
