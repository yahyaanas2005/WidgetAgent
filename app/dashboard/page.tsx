import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function DashboardPage() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect('/auth/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*, current_company_id')
    .eq('id', user.id)
    .single();

  const { data: memberships } = await supabase
    .from('memberships')
    .select('*, companies(*)')
    .eq('user_id', user.id);

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .limit(5);

  const { data: transactions } = await supabase
    .from('transactions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Welcome back, {profile?.full_name || user.email}</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/dashboard/inventory"
              className="px-4 py-2 rounded-lg glass text-white hover:bg-white/10 transition-all"
            >
              Inventory
            </Link>
            <Link
              href="/dashboard/sales"
              className="px-4 py-2 rounded-lg glass text-white hover:bg-white/10 transition-all"
            >
              Sales
            </Link>
            <Link
              href="/dashboard/reports"
              className="px-4 py-2 rounded-lg glass text-white hover:bg-white/10 transition-all"
            >
              Reports
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card">
            <div className="text-gray-400 text-sm mb-2">Total Products</div>
            <div className="text-3xl font-bold text-white">{products?.length || 0}</div>
          </div>
          <div className="glass-card">
            <div className="text-gray-400 text-sm mb-2">Recent Transactions</div>
            <div className="text-3xl font-bold text-white">{transactions?.length || 0}</div>
          </div>
          <div className="glass-card">
            <div className="text-gray-400 text-sm mb-2">Companies</div>
            <div className="text-3xl font-bold text-white">{memberships?.length || 0}</div>
          </div>
          <div className="glass-card">
            <div className="text-gray-400 text-sm mb-2">Active Status</div>
            <div className="text-3xl font-bold text-green-400">✓ Online</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Recent Products */}
          <div className="glass-card">
            <h2 className="text-2xl font-semibold mb-4 text-white">Recent Products</h2>
            <div className="space-y-3">
              {products && products.length > 0 ? (
                products.map((product: any) => (
                  <div key={product.id} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-white">{product.name}</div>
                        <div className="text-sm text-gray-400">SKU: {product.sku}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">${product.unit_price}</div>
                        <div className="text-sm text-gray-400">Stock: {product.stock_level}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 text-center py-8">No products yet</div>
              )}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="glass-card">
            <h2 className="text-2xl font-semibold mb-4 text-white">Recent Transactions</h2>
            <div className="space-y-3">
              {transactions && transactions.length > 0 ? (
                transactions.map((transaction: any) => (
                  <div key={transaction.id} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-white capitalize">{transaction.type}</div>
                        <div className="text-sm text-gray-400">{new Date(transaction.created_at).toLocaleDateString()}</div>
                      </div>
                      <div className="text-white font-semibold">${transaction.total_amount}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 text-center py-8">No transactions yet</div>
              )}
            </div>
          </div>
        </div>

        {/* Company Info */}
        {memberships && memberships.length > 0 && (
          <div className="mt-8 glass-card">
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Companies</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {memberships.map((membership: any) => (
                <div key={membership.id} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <div className="font-medium text-white">{membership.companies.name}</div>
                  <div className="text-sm text-gray-400 capitalize">Role: {membership.role}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
