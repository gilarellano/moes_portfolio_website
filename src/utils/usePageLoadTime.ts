// utils/usePageLoadTime.ts
import { useState, useEffect } from "react";
import { getPageLoadTime, logVisitorInfo } from "./loadTime";

export function usePageLoadTime() {
  const [pageLoadTime, setPageLoadTime] = useState<number | undefined>(undefined);
  const [visitorId, setVisitorId] = useState<number | undefined>(undefined);

  useEffect(() => {
    let isMounted = true;

    const logTime = async () => {
      try {
        const time = await getPageLoadTime();
        if (isMounted) setPageLoadTime(time);
        
        const id = await logVisitorInfo(time);
        if (isMounted && id !== undefined) {
          setVisitorId(id);
        }
      } catch (error) {
        console.error("Error logging time:", error);
      }
    };

    logTime();

    return () => {
      isMounted = false;
    };
  }, []);

  return { pageLoadTime, visitorId };
}