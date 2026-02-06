import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function InventoryPage() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect('/auth/login');
  }

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link href="/dashboard" className="text-gray-400 hover:text-white mb-2 inline-block">
              ← Back to Dashboard
            </Link>
            <h1 className="text-4xl font-bold text-white">Inventory Management</h1>
          </div>
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all">
            Add Product
          </button>
        </div>

        {/* Inventory Table */}
        <div className="glass-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">SKU</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Name</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Description</th>
                  <th className="text-right py-4 px-4 text-gray-400 font-semibold">Stock</th>
                  <th className="text-right py-4 px-4 text-gray-400 font-semibold">Price</th>
                  <th className="text-right py-4 px-4 text-gray-400 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products && products.length > 0 ? (
                  products.map((product: any) => (
                    <tr key={product.id} className="border-b border-white/5 hover:bg-white/5 transition-all">
                      <td className="py-4 px-4 text-white">{product.sku}</td>
                      <td className="py-4 px-4 text-white font-medium">{product.name}</td>
                      <td className="py-4 px-4 text-gray-400">{product.description || 'N/A'}</td>
                      <td className="py-4 px-4 text-right">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          product.stock_level > 10 ? 'bg-green-500/20 text-green-400' : 
                          product.stock_level > 0 ? 'bg-yellow-500/20 text-yellow-400' : 
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {product.stock_level}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right text-white font-semibold">${product.unit_price}</td>
                      <td className="py-4 px-4 text-right">
                        <button className="text-purple-400 hover:text-purple-300">Edit</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-gray-400">
                      No products found. Add your first product to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
