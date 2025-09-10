'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Sidebar(){
  const [open,setOpen]=useState(true)
  const path=usePathname()
  return (
    <aside className={`${open ? 'w-72' : 'w-20'} bg-white border-r transition-all`}>
      <div className="p-4 flex items-center justify-between">
        <div className="font-bold">{open ? 'Linkbird' : 'LB'}</div>
        <button onClick={()=>setOpen(v=>!v)} className="text-sm">{open? '⟨' : '⟩'}</button>
      </div>
      <nav className="mt-4">
        <NavItem href="/" active={path==='/' } label="Dashboard" open={open} />
        <NavItem href="/leads" active={path?.startsWith('/leads')} label="Leads" open={open} />
        <NavItem href="/campaigns" active={path?.startsWith('/campaigns')} label="Campaigns" open={open} />
        <NavItem href="/settings" active={path?.startsWith('/settings')} label="Settings" open={open} />
      </nav>
      <div className="mt-auto p-4 border-t">
        <div className="text-sm">Signed in as</div>
        <div className="font-medium">demo@you.com</div>
      </div>
    </aside>
  )
}

function NavItem({href,label,active,open}:{href:string,label:string,active?:boolean,open?:boolean}){
  return (
    <Link href={href} className={`flex items-center gap-3 px-4 py-2 hover:bg-slate-50 ${active ? 'bg-slate-100 font-semibold' : ''}`}>
      <span className="w-6">•</span>
      {open && <span>{label}</span>}
    </Link>
  )
}
