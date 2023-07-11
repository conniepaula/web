'use client';

import Sidebar from '@/components/Sidebar';
import AuthProtection from './auth-protection';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProtection>
      <div className="flex flex-col lg:flex-row w-full">
        <Sidebar />
        <div className="py-4 lg:pl-6 lg:py-0 flex-1 relative">{children}</div>
      </div>
    </AuthProtection>
  );
}

export default DashboardLayout;