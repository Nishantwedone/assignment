import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Linkbird Replica</h1>
      <p className="mb-6">A starter scaffold for Leads & Campaigns replication.</p>
      <div className="flex gap-4">
        <Link href="/leads" className="btn">Open Leads</Link>
        <Link href="/campaigns" className="btn">Open Campaigns</Link>
      </div>
    </div>
  );
}
