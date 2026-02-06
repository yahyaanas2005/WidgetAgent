# Isolate AI Widget SaaS

A production-ready multi-tenant headless AI agent widget with ERP capabilities, voice support, and quantum minimalist UI.

## Features

- 🏢 **Multi-Tenant Architecture**: Secure tenant isolation with Row Level Security (RLS)
- 🎤 **Voice-First AI Agent**: Deepgram STT and ElevenLabs TTS for multilingual voice interactions
- 📊 **ERP Capabilities**: Inventory management, sales tracking, and automated report generation
- 🎨 **Glassmorphism Dark Theme**: Modern, minimal UI with Tailwind CSS
- 🔒 **Security**: Built-in authentication with Supabase and RLS policies
- 📱 **Shadow DOM Widget**: Embeddable widget loader under 50kb

## Tech Stack

- **Frontend**: Next.js 14+ (App Router), Tailwind CSS, Lucide React
- **Database**: Supabase (PostgreSQL with RLS)
- **AI**: Vercel AI SDK with OpenAI GPT-4
- **Voice**: Deepgram (STT) + ElevenLabs (TTS)
- **Reports**: jsPDF and xlsx for PDF/Excel generation
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- OpenAI API key
- Deepgram API key (for voice features)
- ElevenLabs API key (for voice features)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your actual credentials.

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## License

MIT License
