import './globals.css';
import React from 'react';
import Sidebar from './components/Sidebar';

export const metadata = { title: 'Linkbird Replica' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-slate-50">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
