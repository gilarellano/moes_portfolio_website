import { WeeklySummary } from "@/lib/definitions";

export const processWeeklySummary = (data: WeeklySummary[]) => {
  return data
    .map((week) => ({
      date: new Date(week.week_start).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      Visitors: week.visitor_count,
      AvgLoadTime: formatLoadTime(week.avg_load_time_ms),
    }))
    .reverse(); // Reverse to get chronological order
};

export const formatLoadTime = (milliseconds: number) => {
  const seconds = Math.max(0, milliseconds) / 1000; // Ensure non-negative before division
  return parseFloat(seconds.toFixed(2));
};
