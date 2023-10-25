// this directive should be at top of the file, before any imports.

'use client';

// This is a Client Component
export default function DashboardLayout({ children }) {
  return (
    <div>
      <h2>My Dashboard</h2>
      {children}
    </div>
  );
}
