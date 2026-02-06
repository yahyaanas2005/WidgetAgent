# 🚀 Quick Setup Checklist

Use this checklist to track your setup progress. Check off each item as you complete it!

## Pre-Setup Requirements

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Git installed (`git --version`)
- [ ] Code editor (VS Code, etc.)
- [ ] Web browser (Chrome, Firefox, etc.)

## Account Setup

- [ ] Supabase account created ([supabase.com](https://supabase.com))
- [ ] OpenAI API key obtained ([platform.openai.com/api-keys](https://platform.openai.com/api-keys))
- [ ] Vercel account created (optional, for deployment) ([vercel.com](https://vercel.com))
- [ ] Deepgram account created (optional, for voice) ([deepgram.com](https://deepgram.com))
- [ ] ElevenLabs account created (optional, for voice) ([elevenlabs.io](https://elevenlabs.io))

## Project Setup

- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local.example` copied to `.env.local`
- [ ] Environment variables filled in `.env.local`

## Supabase Configuration

- [ ] Supabase project created
- [ ] Project URL copied to `.env.local`
- [ ] Anon key copied to `.env.local`
- [ ] SQL migration file opened (`supabase/migrations/001_initial_schema.sql`)
- [ ] Migration executed in Supabase SQL Editor
- [ ] Email authentication enabled in Supabase
- [ ] Database tables verified (companies, profiles, etc.)

## Local Testing

- [ ] Project builds successfully (`npm run build`)
- [ ] Development server starts (`npm run dev`)
- [ ] Can access http://localhost:3000
- [ ] Landing page loads correctly
- [ ] Can navigate to login page
- [ ] Can sign up with new account
- [ ] Receive verification email (if enabled)
- [ ] Can log in successfully
- [ ] Company creation works
- [ ] Dashboard loads

## Dashboard Features

- [ ] Can view main dashboard
- [ ] Inventory page accessible (`/dashboard/inventory`)
- [ ] Can add test products
- [ ] Sales page accessible (`/dashboard/sales`)
- [ ] Can create test transactions
- [ ] Reports page accessible (`/dashboard/reports`)
- [ ] Can generate PDF report
- [ ] Can generate Excel report

## Widget Testing

- [ ] Widget loader file exists (`public/widget/loader.js`)
- [ ] Created test HTML file with widget
- [ ] Widget button appears on test page
- [ ] Widget panel opens when clicked
- [ ] Can send text messages
- [ ] AI responds to messages
- [ ] Voice button visible (if voice keys configured)

## Deployment (Optional)

- [ ] Code committed to GitHub
- [ ] `.env.local` NOT committed (verify `.gitignore`)
- [ ] Vercel project created
- [ ] GitHub repository connected to Vercel
- [ ] Environment variables added to Vercel
- [ ] Deployment successful
- [ ] Production URL accessible
- [ ] Widget loader URL updated (if needed)
- [ ] Widget tested on production
- [ ] Custom domain configured (optional)

## Post-Deployment

- [ ] Production site accessible
- [ ] Can sign up on production
- [ ] Dashboard works on production
- [ ] Widget works on production
- [ ] Widget embedded on target website(s)
- [ ] Widget tested on embedded sites
- [ ] Analytics/monitoring set up (optional)

## Documentation Review

- [ ] Read README.md
- [ ] Read USAGE_GUIDE.md
- [ ] Read IMPLEMENTATION.md (for technical details)
- [ ] Read SECURITY.md (for best practices)
- [ ] Bookmarked important links

## Optimization (Optional)

- [ ] Set up custom domain
- [ ] Configure email templates in Supabase
- [ ] Enable additional auth providers (Google, GitHub, etc.)
- [ ] Set up monitoring/analytics
- [ ] Configure Supabase Storage for report uploads
- [ ] Add sample/test data
- [ ] Customize widget colors/styling
- [ ] Enable voice features with API keys
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Configure rate limiting
- [ ] Review and optimize RLS policies

---

## ✅ Setup Complete!

If all items are checked, congratulations! Your Isolate AI Widget SaaS is fully operational.

### Next Steps:

1. 🏢 Add your business data (products, services)
2. 🤖 Train your team on using the dashboard
3. 🌐 Share the widget with your website visitors
4. 📊 Monitor usage and gather feedback
5. 🚀 Scale and customize as needed

### Need Help?

- 📘 See [USAGE_GUIDE.md](./USAGE_GUIDE.md) for detailed instructions
- 🐛 Check [GitHub Issues](https://github.com/yahyaanas2005/WidgetAgent/issues)
- 💬 Open a new issue for support

---

**Last Updated**: February 2026
