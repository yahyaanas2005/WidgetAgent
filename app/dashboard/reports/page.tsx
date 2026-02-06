'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ReportsPage() {
  const [generating, setGenerating] = useState(false);
  const [reportUrl, setReportUrl] = useState('');

  const generateReport = async (type: 'sales' | 'inventory', format: 'pdf' | 'excel') => {
    setGenerating(true);
    try {
      const res = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          company_id: 'current', // Would be fetched from context in production
          type, 
          format 
        })
      });
      const data = await res.json();
      setReportUrl(data.url);
      alert('Report generated successfully!');
    } catch (err) {
      alert('Error generating report');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="text-gray-400 hover:text-white mb-2 inline-block">
            ← Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-white">Report Generation</h1>
          <p className="text-gray-400 mt-2">Generate detailed reports in PDF or Excel format</p>
        </div>

        {/* Report Types */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sales Reports */}
          <div className="glass-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Sales Report</h2>
                <p className="text-sm text-gray-400">All sales transactions and analytics</p>
              </div>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => generateReport('sales', 'pdf')}
                disabled={generating}
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 transition-all"
              >
                {generating ? 'Generating...' : 'Generate PDF'}
              </button>
              <button
                onClick={() => generateReport('sales', 'excel')}
                disabled={generating}
                className="w-full py-3 px-4 rounded-lg glass text-white font-semibold hover:bg-white/10 disabled:opacity-50 transition-all"
              >
                {generating ? 'Generating...' : 'Generate Excel'}
              </button>
            </div>
          </div>

          {/* Inventory Reports */}
          <div className="glass-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Inventory Report</h2>
                <p className="text-sm text-gray-400">Current stock levels and valuations</p>
              </div>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => generateReport('inventory', 'pdf')}
                disabled={generating}
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 transition-all"
              >
                {generating ? 'Generating...' : 'Generate PDF'}
              </button>
              <button
                onClick={() => generateReport('inventory', 'excel')}
                disabled={generating}
                className="w-full py-3 px-4 rounded-lg glass text-white font-semibold hover:bg-white/10 disabled:opacity-50 transition-all"
              >
                {generating ? 'Generating...' : 'Generate Excel'}
              </button>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="mt-8 glass-card">
          <h2 className="text-2xl font-semibold mb-4 text-white">Recent Reports</h2>
          <div className="text-gray-400 text-center py-8">
            No reports generated yet. Create your first report above.
          </div>
        </div>
      </div>
    </div>
  );
}
