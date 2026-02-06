import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const supabase = await createClient();
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return new Response('Unauthorized', { status: 401 });
    
    const { data: profile } = await supabase
      .from('profiles')
      .select('current_company_id')
      .eq('id', user.id)
      .single();
    
    const companyId = profile?.current_company_id;
    
    const result = await streamText({
      model: openai('gpt-4-turbo'),
      messages: [
        {
          role: 'system',
          content: `You are an intelligent ERP assistant for company ${companyId}. 
          You can help with inventory management, sales tracking, and business analytics.
          Always be professional, concise, and multilingual (detect user's language).`
        },
        { role: 'user', content: message }
      ]
    });
    
    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Agent error:', error);
    return new Response('Error processing request', { status: 500 });
  }
}
