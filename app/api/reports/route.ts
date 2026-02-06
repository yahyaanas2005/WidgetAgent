import { NextResponse } from 'next/server';
import { jsPDF } from 'jspdf';
import ExcelJS from 'exceljs';
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
    // Generate Excel using ExcelJS (more secure than xlsx)
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(type);
    
    if (data && data.length > 0) {
      // Add headers
      if (type === 'sales') {
        worksheet.columns = [
          { header: 'Transaction ID', key: 'id', width: 30 },
          { header: 'Amount', key: 'total_amount', width: 15 },
          { header: 'Status', key: 'status', width: 15 },
          { header: 'Date', key: 'created_at', width: 20 }
        ];
      } else {
        worksheet.columns = [
          { header: 'SKU', key: 'sku', width: 15 },
          { header: 'Name', key: 'name', width: 30 },
          { header: 'Stock', key: 'stock_level', width: 10 },
          { header: 'Price', key: 'unit_price', width: 12 }
        ];
      }
      
      // Add rows
      data.forEach((item: any) => {
        worksheet.addRow(item);
      });
      
      // Style header row
      worksheet.getRow(1).font = { bold: true };
      worksheet.getRow(1).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFE0E0E0' }
      };
    }
    
    const buffer = await workbook.xlsx.writeBuffer();
    
    // In production, upload to Supabase Storage
    return NextResponse.json({ 
      url: 'https://example.com/report.xlsx',
      size: buffer.byteLength 
    });
  }
}
