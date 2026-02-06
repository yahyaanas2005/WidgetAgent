# Isolate AI Widget SaaS

A production-ready multi-tenant headless AI agent widget with ERP capabilities, voice support, and quantum minimalist UI.

> **🚀 New here? Start with [QUICKSTART.md](./QUICKSTART.md) for a 5-minute setup!**

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
- **Reports**: jsPDF and exceljs for PDF/Excel generation
- **Deployment**: Vercel

## 🚀 Getting Started

**New to this project?** Check out the complete **[USAGE_GUIDE.md](./USAGE_GUIDE.md)** for detailed step-by-step instructions!

### Quick Start

#### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account ([Sign up free](https://supabase.com))
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- ⭐ Optional: Deepgram & ElevenLabs keys for voice features

#### Installation (5 minutes)

1. **Clone and install dependencies:**
```bash
git clone https://github.com/yahyaanas2005/WidgetAgent.git
cd WidgetAgent
npm install
```

2. **Set up environment variables:**
```bash
cp .env.local.example .env.local
# Edit .env.local with your Supabase and OpenAI credentials
```

3. **Configure Supabase database:**
   - Create a Supabase project
   - Run the SQL from `supabase/migrations/001_initial_schema.sql` in Supabase SQL Editor
   - Copy your project URL and anon key to `.env.local`

4. **Run the development server:**
```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000)** and start building!

### 📚 Documentation

- **[USAGE_GUIDE.md](./USAGE_GUIDE.md)** - Complete step-by-step guide for setup, deployment, and usage
- **[IMPLEMENTATION.md](./IMPLEMENTATION.md)** - Technical implementation details and architecture
- **[SECURITY.md](./SECURITY.md)** - Security best practices and guidelines

### 🌐 Embedding the Widget

Once deployed, add this to any website:

```html
<script src="https://your-domain.vercel.app/widget/loader.js"></script>
```

The widget appears as a floating button and provides AI-powered chat assistance!

### 🚢 Deployment

Deploy to Vercel with one click or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

See [USAGE_GUIDE.md](./USAGE_GUIDE.md#deployment-to-production) for detailed deployment instructions.

## 📖 What's Next?

1. ✅ Complete the setup using [USAGE_GUIDE.md](./USAGE_GUIDE.md)
2. 🏢 Create your company and add inventory data
3. 🤖 Test the AI agent with questions
4. 🌐 Deploy to production and embed the widget
5. 📊 Monitor usage and customize features

## 💡 Need Help?

- 📘 Read the [USAGE_GUIDE.md](./USAGE_GUIDE.md) for detailed instructions
- 🐛 Check [Issues](https://github.com/yahyaanas2005/WidgetAgent/issues) for known problems
- 💬 Open a new issue if you need support

## License

MIT License
