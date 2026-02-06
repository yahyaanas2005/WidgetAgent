# ⚡ Quick Start Guide (5 Minutes)

Get your AI Widget SaaS running in just 5 minutes! This is the fastest path to see your widget in action.

## 🎯 What You'll Achieve

By the end of this guide, you'll have:
- ✅ A running Next.js application
- ✅ A functional AI chat widget
- ✅ A dashboard to manage your data

## 📋 Before You Start

Make sure you have:
1. ✅ **Node.js 18+** installed ([Download here](https://nodejs.org/))
2. ✅ A **code editor** (VS Code recommended)
3. ✅ **5 minutes** of your time

## 🚀 Step-by-Step (Really Fast!)

### Step 1: Install (1 minute)

```bash
# Navigate to the project directory (if not already there)
cd WidgetAgent

# Install dependencies
npm install
```

### Step 2: Set Up Environment (2 minutes)

```bash
# Copy the example environment file
cp .env.local.example .env.local
```

Now you need **API credentials**. Here's where to get them:

#### Option A: Test Mode (Quick!)
Edit `.env.local` and use these placeholder values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-key
OPENAI_API_KEY=sk-placeholder
DEEPGRAM_API_KEY=optional
ELEVENLABS_API_KEY=optional
```

⚠️ **Note**: With placeholders, authentication won't work, but you can see the UI!

#### Option B: Real Setup (10 extra minutes)

1. **Supabase** (5 min):
   - Go to [supabase.com](https://supabase.com) → Sign up
   - Create new project → Copy URL and anon key
   - Go to SQL Editor → Paste contents of `supabase/migrations/001_initial_schema.sql` → Run

2. **OpenAI** (2 min):
   - Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
   - Create API key → Copy it

3. Add them to `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=your-actual-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-key
OPENAI_API_KEY=your-actual-key
```

### Step 3: Run! (30 seconds)

```bash
npm run dev
```

### Step 4: Open Browser (30 seconds)

Open: **http://localhost:3000**

🎉 **You're done!** 

## 🎨 What You'll See

### Landing Page
- Beautiful gradient hero section
- Feature cards showcasing capabilities
- "Get Started" button

### Dashboard (after signup)
- Main dashboard with statistics
- Inventory management
- Sales tracking
- Report generation

## 🧪 Try These Actions

1. **Click "Get Started"** → See the login page
2. **With real credentials**: Sign up → Create a company → Access dashboard
3. **With placeholder credentials**: Explore the UI (auth won't work)

## 📱 Test the Widget

The widget is accessible at:
- Development: `http://localhost:3000/widget/loader.js`
- See `examples/widget-demo.html` for a test page

## ⚡ Quick Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

## 🆘 Something Not Working?

### Build Fails?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 Already in Use?
```bash
# Use a different port
PORT=3001 npm run dev
```

### Environment Variables Not Loading?
- Make sure `.env.local` exists in the project root
- Restart the dev server after changing env vars
- No spaces around `=` in env file

## 📚 What's Next?

Now that it's running, here's what to explore:

1. **Full Setup**: See [USAGE_GUIDE.md](./USAGE_GUIDE.md) for complete instructions
2. **Deploy**: Use [Vercel](https://vercel.com) for free hosting
3. **Customize**: Edit pages in `app/` directory
4. **Add Data**: Use the dashboard to add products and transactions

## 🎓 Learning Path

**Just Starting?** Follow this order:
1. ✅ You are here: QUICKSTART.md
2. 📖 Next: [USAGE_GUIDE.md](./USAGE_GUIDE.md) - Complete setup
3. 🔧 Then: [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Technical details
4. 📋 Use: [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md) - Track progress

## 💡 Pro Tips

- 🔥 Use **Hot Reload**: Changes appear instantly in dev mode
- 🎯 Start with **placeholder credentials** to see UI first
- 📱 Test on mobile: Use your network IP (shown in terminal)
- 🚀 Deploy early: Free tier on Vercel is generous

## 🎉 You Made It!

Congratulations! Your AI Widget SaaS is running locally. 

**Ready for more?**
- 📖 Read the [full usage guide](./USAGE_GUIDE.md)
- 🚀 Deploy to production
- 🌐 Embed the widget on your site

---

**Questions?** Check [USAGE_GUIDE.md](./USAGE_GUIDE.md) for detailed help or open an issue on GitHub.
