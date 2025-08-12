import { sql } from '@vercel/postgres'; // or from your postgres setup
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await sql`
      SELECT amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      LIMIT 1
    `;

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}





