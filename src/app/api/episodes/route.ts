import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM episodes`;
    return NextResponse.json({ episodes: rows });
  } catch (error: unknown) {
    console.error('Database query failed:', error);
    return NextResponse.json({ error: 'Failed to fetch episodes' }, { status: 500 });
  }
} 