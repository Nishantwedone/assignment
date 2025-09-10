import LeadsClient from './LeadsClient';

export default function LeadsPage(){
  return (
    <div>
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Leads</h2>
        <div>Search · Filters</div>
      </header>
      <LeadsClient />
    </div>
  )
}
