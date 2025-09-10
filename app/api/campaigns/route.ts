import { NextResponse } from 'next/server';

function mk(i:number){
  const total = 100 + (i*3);
  const success = Math.floor(total * ((i%5)/6 + 0.2));
  return {
    id: String(i),
    name: `Campaign ${i}`,
    status: ['Draft','Active','Paused','Completed'][i%4],
    totalLeads: total,
    successfulLeads: success,
    successRate: Math.round((success/total)*100),
    createdAt: new Date(Date.now() - i*24*3600*1000).toISOString().split('T')[0]
  }
}

export async function GET(){
  const items = Array.from({length:15}).map((_,i)=>mk(i+1));
  return NextResponse.json({ items });
}
