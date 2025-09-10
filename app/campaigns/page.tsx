import CampaignsClient from './CampaignsClient';

export default function CampaignsPage(){
  return (
    <div>
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Campaigns</h2>
      </header>
      <CampaignsClient />
    </div>
  )
}
