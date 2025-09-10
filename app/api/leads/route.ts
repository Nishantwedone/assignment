import { NextResponse } from 'next/server';

const statuses = ['Pending','Contacted','Responded','Converted'];

function makeLead(i:number){
  return {
    id: String(i),
    name: `Lead ${i}`,
    email: `lead${i}@example.com`,
    company: `Company ${i % 10}`,
    campaignName: `Campaign ${i % 5}`,
    status: statuses[i % statuses.length],
    lastContact: new Date(Date.now() - (i*3600*1000)).toISOString()
  }
}

export async function GET(req:Request){
  const url = new URL(req.url);
  const page = Number(url.searchParams.get('page') || '0');
  const limit = Number(url.searchParams.get('limit') || '20');
  const start = page * limit;
  const items = Array.from({length:limit}).map((_,idx)=>makeLead(start+idx+1));
  const total = 500;
  const nextPage = (start+limit) < total ? page+1 : null;
  return NextResponse.json({ items, nextPage });
}
