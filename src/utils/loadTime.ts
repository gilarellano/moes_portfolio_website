// utils/loadTime.ts
"use client";

import { logVisitor } from "@/lib/action";

export function getPageLoadTime(): Promise<number> {
  return new Promise((resolve) => {
    const checkPerformanceEntries = () => {
      const navigationEntries = performance.getEntriesByType(
        "navigation"
      ) as PerformanceNavigationTiming[];

      if (navigationEntries.length > 0 && navigationEntries[0].duration > 0) {
        const pageLoadTime = Math.max(0, navigationEntries[0].duration); // Ensure non-negative
        resolve(pageLoadTime);
      } else {
        setTimeout(checkPerformanceEntries, 100);
      }
    };

    checkPerformanceEntries();
  });
}

export function isNewDay(): boolean {
  const now = new Date();
  const storedDate = localStorage.getItem("visitorDate");
  
  if (!storedDate) {
    localStorage.setItem("visitorDate", now.toISOString().split("T")[0]);
    return true;
  }
  
  const nowDate = now.toISOString().split("T")[0];
  if (nowDate !== storedDate) {
    localStorage.setItem("visitorDate", nowDate);
    return true;
  }
  
  return false;
}

export async function logVisitorInfo(pageLoadTime: number): Promise<number | undefined> {
  try {
    // Always check localStorage first
    const storedVisitorId = localStorage.getItem("visitorId");
    const isNewVisitor = isNewDay();

    if (isNewVisitor || !storedVisitorId) {
      console.log("New visitor or new day");
      const result = await logVisitor(pageLoadTime);
      const visitorId = result.visitorId;
      
      // Save to localStorage
      localStorage.setItem("visitorId", visitorId.toString());
      localStorage.setItem("visitorDate", new Date().toISOString().split("T")[0]);
      
      return visitorId;
    } else {
      console.log("Returning visitor");
      return parseInt(storedVisitorId, 10);
    }
  } catch (error) {
    console.error("Error logging visitor:", error);
    return undefined;
  }
}
