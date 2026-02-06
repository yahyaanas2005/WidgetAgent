import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function SalesPage() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect('/auth/login');
  }

  const { data: transactions } = await supabase
    .from('transactions')
    .select('*, transaction_items(*, products(name))')
    .eq('type', 'sale')
    .order('created_at', { ascending: false });

  const totalSales = transactions?.reduce((sum, t) => sum + parseFloat(t.total_amount), 0) || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link href="/dashboard" className="text-gray-400 hover:text-white mb-2 inline-block">
              ← Back to Dashboard
            </Link>
            <h1 className="text-4xl font-bold text-white">Sales Transactions</h1>
          </div>
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all">
            New Sale
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card">
            <div className="text-gray-400 text-sm mb-2">Total Sales</div>
            <div className="text-3xl font-bold text-white">${totalSales.toFixed(2)}</div>
          </div>
          <div className="glass-card">
            <div className="text-gray-400 text-sm mb-2">Transactions</div>
            <div className="text-3xl font-bold text-white">{transactions?.length || 0}</div>
          </div>
          <div className="glass-card">
            <div className="text-gray-400 text-sm mb-2">Average Sale</div>
            <div className="text-3xl font-bold text-white">
              ${transactions && transactions.length > 0 ? (totalSales / transactions.length).toFixed(2) : '0.00'}
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="glass-card">
          <h2 className="text-2xl font-semibold mb-6 text-white">Recent Sales</h2>
          <div className="space-y-4">
            {transactions && transactions.length > 0 ? (
              transactions.map((transaction: any) => (
                <div key={transaction.id} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-medium text-white">Transaction #{transaction.id.slice(0, 8)}</div>
                      <div className="text-sm text-gray-400">{new Date(transaction.created_at).toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-xl">${transaction.total_amount}</div>
                      <div className={`text-sm px-2 py-1 rounded ${
                        transaction.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                  {transaction.transaction_items && transaction.transaction_items.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="text-sm text-gray-400 mb-2">Items:</div>
                      <div className="space-y-1">
                        {transaction.transaction_items.map((item: any, idx: number) => (
                          <div key={idx} className="text-sm text-gray-300 flex justify-between">
                            <span>{item.products?.name || 'Product'} × {item.quantity}</span>
                            <span>${(item.price_at_time * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-gray-400 text-center py-12">
                No sales transactions yet. Create your first sale to get started.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
