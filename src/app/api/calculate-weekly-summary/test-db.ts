// pages/api/test-db.ts
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await sql`SELECT NOW();`;
    return NextResponse.json({ success: true, timestamp: result.rows[0].now });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}