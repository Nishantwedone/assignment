'use client'
import { useQuery } from '@tanstack/react-query';

async function getCampaigns(){
  const res = await fetch('/api/campaigns');
  return res.json();
}

export default function CampaignsClient(){
  const { data, isLoading } = useQuery(['campaigns'], getCampaigns);
  const rows = data?.items ?? [];
  return (
    <div className="bg-white rounded shadow p-4">
      {isLoading ? <div>Loading...</div> : (
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Total Leads</th>
              <th className="p-3 text-left">Success Rate</th>
              <th className="p-3 text-left">Created</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c:any)=>(
              <tr key={c.id} className="border-t hover:bg-slate-50">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.status}</td>
                <td className="p-3">{c.totalLeads}</td>
                <td className="p-3">{c.successRate}%</td>
                <td className="p-3">{c.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
