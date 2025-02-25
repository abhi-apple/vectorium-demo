"use client";

import { Bar, BarChart, XAxis, YAxis, Cell } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Label } from "./ui/label";
import { Card, CardFooter } from "./ui/card";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#f2e782ff",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const CarbonCreditsGraph2 = () => {
  const numberOfBars = 150; // Number of bars
  const numberOfXLabels = 9; // Total X-axis labels
  const numberOfYLabels = 6; // Total Y-axis labels

  // Generate chart data dynamically with alternating colors
  const chartData = Array.from({ length: numberOfBars }, (_, i) => ({
    name: `Item ${i + 1}`,
    value: Math.floor(Math.random() * 500), // Random values
    color: i % 2 === 0 ? "#cc8c39" : "#000", // Alternate between yellow & black
  }));

  return (
    <section className="mx-12 h-1/6 w-3/5 rounded-b-2xl bg-[#e7e4e4] p-6">
      <Label className="mb-4 pl-8 text-2xl font-bold">Carbon Credits</Label>
      <div className="flex items-center justify-start gap-28">
        <ChartContainer
          config={chartConfig}
          className="max-h-[350px] w-3/4 pt-8"
        >
          <BarChart accessibilityLayer data={chartData}>
            {/* X-Axis with spaced labels */}
            <XAxis
              tickLine={false}
              tickMargin={10}
              tickFormatter={(value, index) =>
                index % Math.ceil(numberOfBars / numberOfXLabels) === 0
                  ? value
                  : ""
              }
            />

            {/* Y-Axis with labels */}
            <YAxis
              tickCount={numberOfYLabels}
              axisLine={false}
              tickLine={false}
            />

            {/* Bar Data with alternating colors */}
            <Bar dataKey="value" radius={4}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>

        {/* Right-Side Card */}
        <Card className="flex h-[200px] w-[230px] flex-col justify-end rounded-3xl bg-gradient-to-b from-[#F7E374] via-yellow-900 to-black p-4 text-white shadow-slate-950">
          <CardFooter className="text-center text-[22px] font-bold">
            $85,000 Carbon Credit
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default CarbonCreditsGraph2;
