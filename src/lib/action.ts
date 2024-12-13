// lib/actions.ts
"use server";
import { supabase } from './db';
import { unstable_cache as cache } from "next/cache";
import { WeeklySummary } from "./definitions";

// Function to log visitor info and return the visitor ID
export async function logVisitor(
  pageLoadTime: number
): Promise<{ visitorId: number }> {
  try {
    const { data, error } = await supabase
      .from('visitors')
      .insert([
        { 
          visit_date: new Date().toISOString(),
          page_load_time_ms: pageLoadTime 
        }
      ])
      .select('id')
      .single();

    if (error) throw error;
    
    const visitorId = data.id;
    return { visitorId };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to log visitor");
  }
}

export async function calculateWeeklySummary(): Promise<void> {
  try {
    // Step 1: Get the end date of the most recent summary
    const { data: mostRecentWeek, error: recentError } = await supabase
      .from('weeklysummary')
      .select('week_end')
      .order('week_end', { ascending: false })
      .limit(1)
      .single();

    if (recentError) throw recentError;

    const previousWeekEndDate = mostRecentWeek?.week_end || new Date(0).toISOString();

    // Step 2: Count visitors and calculate average load time since the last summary
    const { data: visitorStats, error: statsError } = await supabase
      .from('visitors')
      .select('visit_date, page_load_time_ms')
      .gt('visit_date', previousWeekEndDate);

    if (statsError) throw statsError;

    const weeklyVisitorCount = visitorStats?.length || 0;
    const averageLoadTime = weeklyVisitorCount > 0
      ? visitorStats.reduce((sum, visitor) => sum + visitor.page_load_time_ms, 0) / weeklyVisitorCount
      : 0;

    // Only create a new summary if there are new visitors
    if (weeklyVisitorCount > 0) {
      const weekStart = new Date(previousWeekEndDate);
      const weekEnd = new Date();

      const { error: insertError } = await supabase
        .from('weeklysummary')
        .insert([{
          week_start: weekStart.toISOString(),
          week_end: weekEnd.toISOString(),
          visitor_count: weeklyVisitorCount,
          avg_load_time_ms: averageLoadTime
        }]);

      if (insertError) throw insertError;

      console.log({
        weekStart,
        weekEnd,
        weeklyVisitorCount,
        averageLoadTime
      });
    }
  } catch (error) {
    console.error("Error calculating weekly summary:", error);
    throw new Error("Failed to calculate weekly summary");
  }
}
