// src/lib/data.ts
import { supabase } from './db';
import { unstable_noStore as noStore } from 'next/cache';
import { processWeeklySummary } from '@/utils/index';

export async function fetchWeeklySummary() {
  noStore();
  try {
    const { data, error } = await supabase
      .from('weeklysummary')
      .select('*')
      .order('week_start', { ascending: false })
      .limit(20);

    if (error) throw error;
    return processWeeklySummary(data);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch weekly summary');
  }
}

export async function fetchSiteData() {
  noStore();
  try {
    // Get total count
    const { count: totalVisitors, error: countError } = await supabase
      .from('visitors')
      .select('*', { count: 'exact' });
    
    if (countError) throw countError;

    // Get average load time
    const { data: avgData, error: avgError } = await supabase
      .from('visitors')
      .select('page_load_time_ms');
    
    if (avgError) throw avgError;

    const avgLoadTime = avgData?.length 
      ? avgData.reduce((sum, record) => sum + record.page_load_time_ms, 0) / avgData.length 
      : 0;

    return {
      totalVisitors: totalVisitors || 0,
      avgLoadTime: avgLoadTime || 0,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total visitors and average load time');
  }
}