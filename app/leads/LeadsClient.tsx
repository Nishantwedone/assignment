'use client'
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import axios from 'axios';
import useLeadsStore from './store';

type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  campaignName: string;
  status: string;
  lastContact: string;
}

async function fetchLeads(page=0){
  const res = await fetch(`/api/leads?page=${page}&limit=20`);
  return res.json();
}

export default function LeadsClient(){
  const { setSelected } = useLeadsStore();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery(['leads'], ({pageParam=0})=> fetchLeads(pageParam), {
    getNextPageParam: (last, pages) => last.nextPage
  });

  const list = data?.pages.flatMap((p:any)=>p.items) ?? [];

  return (
    <div className="bg-white rounded shadow">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Company</th>
            <th className="p-3 text-left">Campaign</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Last Contact</th>
          </tr>
        </thead>
        <tbody>
          {list.map((l:Lead)=>(
            <tr key={l.id} className="border-t hover:bg-slate-50 cursor-pointer" onClick={()=>setSelected(l)}>
              <td className="p-3">{l.name}</td>
              <td className="p-3">{l.email}</td>
              <td className="p-3">{l.company}</td>
              <td className="p-3">{l.campaignName}</td>
              <td className="p-3">{l.status}</td>
              <td className="p-3">{l.lastContact}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={6} className="p-4 text-center">
              {isFetchingNextPage ? 'Loading...' : hasNextPage ? <button onClick={()=>fetchNextPage()}>Load more</button> : 'No more leads'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
