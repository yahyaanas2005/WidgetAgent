import { NextResponse } from 'next/server';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  const { company_id, type, format } = await req.json();
  const supabase = await createClient();
  
  // Fetch data
  let data;
  if (type === 'sales') {
    const { data: transactions } = await supabase
      .from('transactions')
      .select('*, transaction_items(*)')
      .eq('company_id', company_id)
      .eq('type', 'sale');
    data = transactions;
  } else {
    const { data: products } = await supabase
      .from('products')
      .select('*')
      .eq('company_id', company_id);
    data = products;
  }
  
  // Generate file
  if (format === 'pdf') {
    const doc = new jsPDF();
    doc.text(`${type.toUpperCase()} REPORT`, 20, 20);
    
    // Add data to PDF
    if (data && data.length > 0) {
      let yPos = 40;
      data.slice(0, 20).forEach((item: any, idx: number) => {
        if (type === 'sales') {
          doc.text(`Transaction ${idx + 1}: $${item.total_amount} - ${item.status}`, 20, yPos);
        } else {
          doc.text(`${item.name}: ${item.stock_level} units @ $${item.unit_price}`, 20, yPos);
        }
        yPos += 10;
      });
    }
    
    const pdfBuffer = doc.output('arraybuffer');
    
    // In production, upload to Supabase Storage
    // For now, return a placeholder URL
    return NextResponse.json({ 
      url: 'https://example.com/report.pdf',
      size: pdfBuffer.byteLength 
    });
  } else {
    const ws = XLSX.utils.json_to_sheet(data || []);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, type);
    const xlsxBuffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    
    // In production, upload to Supabase Storage
    return NextResponse.json({ 
      url: 'https://example.com/report.xlsx',
      size: xlsxBuffer.byteLength 
    });
  }
}
