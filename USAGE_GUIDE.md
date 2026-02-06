# 📘 Complete Usage Guide - Isolate AI Widget SaaS

This guide will walk you through everything you need to know to get your AI Widget SaaS up and running, from initial setup to embedding the widget on your website.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Database Configuration](#database-configuration)
4. [Environment Variables Setup](#environment-variables-setup)
5. [Running the Application](#running-the-application)
6. [Using the Dashboard](#using-the-dashboard)
7. [Embedding the Widget](#embedding-the-widget)
8. [Deployment to Production](#deployment-to-production)
9. [Testing the Integration](#testing-the-integration)
10. [Troubleshooting](#troubleshooting)
11. [FAQ](#faq)

---

## Prerequisites

Before you begin, make sure you have:

- ✅ **Node.js 18+** installed ([Download](https://nodejs.org/))
- ✅ **npm or yarn** package manager
- ✅ **Git** for version control
- ✅ **Supabase account** ([Sign up free](https://supabase.com))
- ✅ **OpenAI API key** ([Get one here](https://platform.openai.com/api-keys))
- ✅ **Vercel account** for deployment (optional) ([Sign up](https://vercel.com))
- ⭐ **Deepgram API key** (optional, for voice features) ([Get it here](https://deepgram.com))
- ⭐ **ElevenLabs API key** (optional, for voice features) ([Get it here](https://elevenlabs.io))

---

## Initial Setup

### Step 1: Clone and Install

```bash
# Clone the repository (if you haven't already)
git clone https://github.com/yahyaanas2005/WidgetAgent.git
cd WidgetAgent

# Install dependencies
npm install
```

This will install all required packages including:
- Next.js 16.1.6
- Supabase client libraries
- OpenAI SDK
- Voice processing libraries
- UI components and styling

---

## Database Configuration

### Step 2: Set Up Supabase

#### 2.1 Create a Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click **"New Project"**
3. Fill in:
   - **Name**: Choose a name (e.g., "widget-agent-prod")
   - **Database Password**: Strong password (save it!)
   - **Region**: Choose closest to your users
4. Click **"Create new project"** (takes ~2 minutes)

#### 2.2 Run Database Migration

1. In your Supabase project, click **"SQL Editor"** in the left sidebar
2. Open the file `supabase/migrations/001_initial_schema.sql` from your project
3. Copy the **entire contents** of that file
4. Paste it into the SQL Editor
5. Click **"Run"** or press `Ctrl+Enter`

This creates all necessary tables:
- ✅ `companies` - Multi-tenant organization data
- ✅ `profiles` - User profiles linked to auth
- ✅ `memberships` - User-company relationships
- ✅ `products` - Inventory/ERP items
- ✅ `transactions` - Sales/purchase records
- ✅ `transaction_items` - Line items for transactions

#### 2.3 Enable Authentication

1. Go to **"Authentication"** → **"Providers"** in Supabase
2. Enable **"Email"** provider (enabled by default)
3. Optional: Enable other providers (Google, GitHub, etc.)
4. Configure email templates under **"Authentication"** → **"Email Templates"**

#### 2.4 Get Your API Keys

1. Go to **"Settings"** → **"API"** in Supabase
2. Copy these values (you'll need them next):
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

---

## Environment Variables Setup

### Step 3: Configure Environment Variables

#### 3.1 Create Your Environment File

```bash
# Copy the example file
cp .env.local.example .env.local
```

#### 3.2 Edit `.env.local` with Your Credentials

Open `.env.local` in your text editor and fill in your actual values:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# OpenAI Configuration
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxx

# Voice Services (Optional - can leave as placeholders)
DEEPGRAM_API_KEY=your-deepgram-api-key-or-leave-blank
ELEVENLABS_API_KEY=your-elevenlabs-api-key-or-leave-blank
```

**Important Notes:**
- ⚠️ **Never commit `.env.local`** to git (it's already in `.gitignore`)
- 🔐 Keep your API keys secret
- 🎤 Voice features are **optional** - the app works without them

---

## Running the Application

### Step 4: Start Development Server

#### 4.1 Build (Optional - Check for Errors)

```bash
# Build the project to verify everything is set up correctly
npm run build
```

If successful, you should see:
```
✓ Compiled successfully
✓ Generating static pages
✓ Finalizing page optimization
```

#### 4.2 Start Development Mode

```bash
# Start the development server
npm run dev
```

The application will be available at:
- 🌐 **Local**: http://localhost:3000
- 🌐 **Network**: http://192.168.x.x:3000 (for testing on other devices)

---

## Using the Dashboard

### Step 5: Create Your Account and Company

#### 5.1 Sign Up

1. Open http://localhost:3000 in your browser
2. You'll see the landing page with features
3. Click **"Get Started"** or navigate to `/auth/login`
4. Click **"Sign Up"** tab
5. Enter:
   - Email address
   - Password (min 6 characters)
6. Click **"Sign Up"**
7. Check your email for verification (if email confirmation is enabled)

#### 5.2 Create Your Company (First Login)

After signing in, you'll need to create a company:

1. Go to the dashboard
2. You'll be prompted to create a company
3. Enter your company name
4. Click **"Create"**

This creates your tenant space with complete data isolation.

#### 5.3 Dashboard Features

Once logged in, you can:

**Main Dashboard** (`/dashboard`)
- 📊 View statistics (total products, transactions, revenue)
- 📈 See recent activity
- 🎯 Quick access to all features

**Inventory Management** (`/dashboard/inventory`)
- ➕ Add new products
- ✏️ Edit existing products
- 📦 Track stock levels
- 💰 Manage pricing

**Sales Transactions** (`/dashboard/sales`)
- 🛒 Create new transactions
- 📝 View transaction history
- 💳 Track sales data

**Reports** (`/dashboard/reports`)
- 📄 Generate PDF reports
- 📊 Generate Excel reports
- 📥 Download reports

---

## Embedding the Widget

### Step 6: Add Widget to Your Website

The AI widget can be embedded on any website using a simple script tag.

#### 6.1 Basic Embedding

Add this code to your website's HTML, just before the closing `</body>` tag:

```html
<!-- Isolate AI Widget -->
<script src="https://your-domain.vercel.app/widget/loader.js"></script>
```

**Replace `your-domain.vercel.app`** with your actual deployed domain.

#### 6.2 Widget Features

Once embedded, the widget provides:
- 💬 **Chat Interface**: Users can ask questions
- 🎤 **Voice Input**: Click the microphone to speak (optional)
- 🤖 **AI Responses**: Powered by OpenAI GPT-4
- 📱 **Mobile Responsive**: Works on all devices
- 🎨 **Glassmorphism UI**: Beautiful dark theme

#### 6.3 Widget Behavior

The widget will:
1. Appear as a purple gradient button in the bottom-right corner
2. Open a chat panel when clicked
3. Allow text and voice input
4. Stream AI responses in real-time
5. Remember conversation context

#### 6.4 Customizing Widget Position

To customize the widget position, add this CSS to your website:

```html
<style>
  isolate-widget {
    /* Change position */
    bottom: 20px !important;  /* Distance from bottom */
    right: 20px !important;   /* Distance from right */
    
    /* Or position on left side */
    /* left: 20px !important; */
    /* right: auto !important; */
  }
</style>
```

---

## Deployment to Production

### Step 7: Deploy to Vercel

#### 7.1 Prepare for Deployment

1. Ensure your code is committed to GitHub
2. Make sure `.env.local` is **not** committed (check `.gitignore`)

#### 7.2 Deploy to Vercel

**Option A: Using Vercel Dashboard**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
5. Click **"Environment Variables"**
6. Add all variables from your `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `OPENAI_API_KEY`
   - `DEEPGRAM_API_KEY` (optional)
   - `ELEVENLABS_API_KEY` (optional)
7. Click **"Deploy"**

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts and add environment variables when asked

# Deploy to production
vercel --prod
```

#### 7.3 After Deployment

1. Vercel will give you a URL: `https://your-app.vercel.app`
2. Update the widget loader URL in `public/widget/loader.js`:
   ```javascript
   const WIDGET_API = 'https://your-app.vercel.app/api';
   ```
3. Commit and push the change
4. Vercel will auto-deploy the update

#### 7.4 Custom Domain (Optional)

1. Go to your project in Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `widget.yourdomain.com`)
4. Follow DNS configuration instructions
5. Update widget loader URL accordingly

---

## Testing the Integration

### Step 8: Test Everything

#### 8.1 Test the Main Application

1. ✅ Visit your deployed URL
2. ✅ Sign up with a new account
3. ✅ Create a company
4. ✅ Add test products in inventory
5. ✅ Create test transactions
6. ✅ Generate reports

#### 8.2 Test the Widget

Create a test HTML file (`test-widget.html`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Widget Test</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            background: #1a1a1a;
            color: white;
        }
        h1 { color: #667eea; }
    </style>
</head>
<body>
    <h1>Testing Isolate AI Widget</h1>
    <p>The widget should appear in the bottom-right corner.</p>
    <p>Click it to open the chat interface.</p>
    
    <!-- Widget loader -->
    <script src="https://your-app.vercel.app/widget/loader.js"></script>
</body>
</html>
```

Open `test-widget.html` in your browser and verify:
- ✅ Widget button appears
- ✅ Chat panel opens when clicked
- ✅ Can send messages
- ✅ AI responds correctly
- ✅ Voice button works (if configured)

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: "Supabase client error" on Build

**Problem**: Build fails with Supabase URL/key error

**Solution**:
```bash
# Check .env.local exists and has correct values
cat .env.local

# Verify values match Supabase dashboard
# Make sure there are no extra spaces or quotes
```

#### Issue 2: Widget Not Appearing

**Problem**: Widget script loads but nothing appears

**Solution**:
1. Check browser console for errors (F12 → Console)
2. Verify the script URL is correct
3. Check for Content Security Policy (CSP) blocking the script
4. Try loading the script URL directly in browser to test

#### Issue 3: AI Not Responding

**Problem**: Messages sent but no AI response

**Solution**:
```bash
# Check OpenAI API key is valid
# Test with curl:
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer YOUR_OPENAI_KEY"

# Check API route is accessible:
curl https://your-app.vercel.app/api/agent

# Review Vercel function logs for errors
```

#### Issue 4: Authentication Errors

**Problem**: Can't sign up or login

**Solution**:
1. Check Supabase auth is enabled
2. Verify email provider is configured
3. Check Supabase URL and anon key are correct
4. Look at Supabase logs: Dashboard → Authentication → Logs

#### Issue 5: Database RLS Errors

**Problem**: "permission denied" or "policy violation"

**Solution**:
```sql
-- In Supabase SQL Editor, verify RLS policies are active:
SELECT * FROM pg_policies WHERE schemaname = 'public';

-- If missing, re-run the migration file
```

#### Issue 6: Build Warnings

**Problem**: ESLint warnings during build

**Solution**:
These are **non-critical** if the build completes. The warnings are:
- TypeScript `any` types (can be fixed later)
- Unused variables (not breaking)

To suppress warnings:
```javascript
// next.config.ts
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Only use if needed
  },
};
```

---

## FAQ

### General Questions

**Q: Do I need all the API keys to get started?**

A: No! You only need:
- ✅ Supabase URL and key (required)
- ✅ OpenAI API key (required for AI)
- ⭐ Voice API keys are optional

**Q: How much does it cost to run?**

A: Costs depend on usage:
- **Supabase**: Free tier (500MB database, 50K auth users)
- **Vercel**: Free tier (100GB bandwidth/month)
- **OpenAI**: Pay per token (~$0.002 per 1K tokens for GPT-4)
- **Voice APIs**: Optional, pay-as-you-go

**Q: Can I use this for multiple websites?**

A: Yes! The widget can be embedded on unlimited websites. Each site will connect to your deployed API.

**Q: Is the data secure?**

A: Yes! The application uses:
- 🔐 Supabase Row Level Security (RLS)
- 🔐 Multi-tenant data isolation
- 🔐 Encrypted connections (HTTPS)
- 🔐 Environment variable protection

**Q: Can I customize the widget appearance?**

A: Yes! Edit `public/widget/loader.js`:
- Change colors in the `<style>` section
- Modify button size, position
- Adjust chat panel dimensions
- Customize animations

### Technical Questions

**Q: What Node.js version is required?**

A: Node.js 18 or higher. Check with: `node --version`

**Q: Can I use this with other databases?**

A: The code is built for Supabase (PostgreSQL), but you could adapt it to other databases with RLS support.

**Q: How do I add more AI functions?**

A: Edit `app/api/agent/route.ts` and add function definitions for the AI to call.

**Q: How do I enable voice features?**

A: Add Deepgram and ElevenLabs API keys to your `.env.local`. The functions are already implemented in `lib/voice/`.

**Q: Can I self-host instead of using Vercel?**

A: Yes! Next.js can be deployed to any Node.js hosting. See [Next.js deployment docs](https://nextjs.org/docs/deployment).

**Q: How do I add more dashboard features?**

A: Create new pages in `app/dashboard/your-feature/page.tsx` following the existing patterns.

---

## 📞 Support

If you encounter issues:

1. 📖 Check this guide thoroughly
2. 🔍 Review [IMPLEMENTATION.md](./IMPLEMENTATION.md) for technical details
3. 🛡️ Check [SECURITY.md](./SECURITY.md) for security best practices
4. 🐛 Check GitHub Issues for known problems
5. 💬 Open a new issue if you found a bug

---

## ✅ Quick Checklist

Use this checklist to ensure you've completed all setup steps:

- [ ] Node.js 18+ installed
- [ ] Repository cloned and `npm install` completed
- [ ] Supabase project created
- [ ] Database migration executed
- [ ] `.env.local` created with all required keys
- [ ] Application builds successfully (`npm run build`)
- [ ] Can run locally (`npm run dev`)
- [ ] Can sign up and create a company
- [ ] Dashboard features work
- [ ] Deployed to Vercel
- [ ] Widget tested on a test page
- [ ] Custom domain configured (optional)

---

## 🎉 You're All Set!

Congratulations! Your Isolate AI Widget SaaS is now ready to use. Start by:

1. 🏢 Adding your company data
2. 📦 Setting up your product inventory
3. 🤖 Testing the AI agent with questions
4. 🌐 Embedding the widget on your website
5. 📊 Monitoring usage and analytics

Happy building! 🚀
