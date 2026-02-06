# 🌐 Testing URLs Guide - Isolate AI Widget SaaS

This guide provides all the URLs you need to test the WidgetAgent SaaS application.

## 🏠 Local Development URLs

When running the application locally with `npm run dev`:

### Main Application
```
http://localhost:3000
```

### Key Pages

| Page | URL | Description |
|------|-----|-------------|
| **Landing Page** | `http://localhost:3000` | Homepage with features |
| **Login/Signup** | `http://localhost:3000/auth/login` | Authentication page |
| **Dashboard** | `http://localhost:3000/dashboard` | Main dashboard (requires login) |
| **Inventory** | `http://localhost:3000/dashboard/inventory` | Product management |
| **Sales** | `http://localhost:3000/dashboard/sales` | Transaction tracking |
| **Reports** | `http://localhost:3000/dashboard/reports` | Report generation |

### API Endpoints

| Endpoint | URL | Method | Description |
|----------|-----|--------|-------------|
| **AI Agent** | `http://localhost:3000/api/agent` | POST | Chat with AI agent |
| **Reports** | `http://localhost:3000/api/reports` | POST | Generate PDF/Excel reports |
| **Auth Callback** | `http://localhost:3000/auth/callback` | GET | Supabase auth callback |

### Widget URLs

| Resource | URL | Description |
|----------|-----|-------------|
| **Widget Loader** | `http://localhost:3000/widget/loader.js` | JavaScript widget loader |
| **Demo Page** | `file:///path/to/examples/widget-demo.html` | Local HTML demo file |

## 🚀 Production URLs (After Deployment)

After deploying to Vercel, your URLs will follow this pattern:

### Automatic Vercel URLs
```
https://widget-agent-[random-id].vercel.app
```

### With Custom Domain (Optional)
```
https://your-domain.com
```

### Key Production URLs

Replace `your-app.vercel.app` with your actual domain:

| Page | URL Pattern |
|------|-------------|
| **Landing Page** | `https://your-app.vercel.app` |
| **Login** | `https://your-app.vercel.app/auth/login` |
| **Dashboard** | `https://your-app.vercel.app/dashboard` |
| **API Agent** | `https://your-app.vercel.app/api/agent` |
| **Widget Loader** | `https://your-app.vercel.app/widget/loader.js` |

## 📱 Quick Test Commands

### Test Local Server is Running
```bash
# Check if server responds
curl http://localhost:3000

# Test API endpoint
curl -X POST http://localhost:3000/api/agent \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Hello"}]}'
```

### Test Widget Loader
```bash
# Check widget file exists
curl http://localhost:3000/widget/loader.js

# Verify it returns JavaScript
curl -I http://localhost:3000/widget/loader.js
```

## 🧪 Testing Steps

### 1. Start Local Development Server

```bash
# Install dependencies (first time only)
npm install

# Create environment file (first time only)
cp .env.local.example .env.local

# Start development server
npm run dev
```

Expected output:
```
▲ Next.js 16.1.6
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000
```

### 2. Test Main Application

Open in your browser:
```
http://localhost:3000
```

You should see:
- ✅ Beautiful landing page with gradient
- ✅ Feature cards (Multi-tenant, Voice-First AI, ERP, etc.)
- ✅ "Get Started" button

### 3. Test Authentication

Navigate to:
```
http://localhost:3000/auth/login
```

You should see:
- ✅ Login form with email/password fields
- ✅ Sign In / Sign Up buttons
- ✅ Glassmorphism dark theme

### 4. Test Widget Loader

Open in browser:
```
http://localhost:3000/widget/loader.js
```

You should see:
- ✅ JavaScript code
- ✅ IsolateWidget class definition
- ✅ Widget styling and functionality

### 5. Test Widget Integration

Open `examples/widget-demo.html` in your browser:

1. Navigate to the examples directory
2. Open `widget-demo.html` in Chrome/Firefox
3. Look for the purple circular button (bottom-right)
4. Click to open chat panel

**Note:** For the widget to work from the demo file, you need to:
1. Uncomment the widget script line in `widget-demo.html`
2. Change the URL to `http://localhost:3000/widget/loader.js` for local testing

## 🌐 Network Testing (Other Devices)

To test on mobile devices or other computers on your network:

### Find Your IP Address

**macOS/Linux:**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

**Windows:**
```bash
ipconfig
```

### Access from Other Devices

Use your IP address instead of localhost:
```
http://192.168.1.xxx:3000
```

Example:
```
http://192.168.1.100:3000
```

## 🔍 Testing Production Deployment

### After Deploying to Vercel

1. **Find Your Production URL**
   - Check Vercel dashboard
   - Look for: `https://widget-agent-abc123.vercel.app`

2. **Test All Pages**
   ```bash
   # Replace with your actual URL
   PROD_URL="https://your-app.vercel.app"
   
   curl $PROD_URL
   curl $PROD_URL/auth/login
   curl $PROD_URL/widget/loader.js
   ```

3. **Test Widget on External Site**
   
   Add to any website:
   ```html
   <script src="https://your-app.vercel.app/widget/loader.js"></script>
   ```

## 🐛 Troubleshooting URLs

### Issue: "Page Not Found" (404)

**Problem:** Navigating to a URL returns 404

**Solutions:**
- ✅ Ensure development server is running (`npm run dev`)
- ✅ Check the URL spelling and case
- ✅ Verify you're using `http://` not `https://` for localhost
- ✅ Try port 3001 if 3000 is in use: `http://localhost:3001`

### Issue: "Connection Refused"

**Problem:** Cannot connect to localhost:3000

**Solutions:**
- ✅ Start the development server: `npm run dev`
- ✅ Check if port 3000 is in use: `lsof -i :3000` (kill if needed)
- ✅ Try a different port: `PORT=3001 npm run dev`
- ✅ Check firewall settings

### Issue: Widget Not Loading

**Problem:** Widget script tag doesn't work

**Solutions:**
- ✅ Verify URL in script tag is correct
- ✅ Check browser console for errors (F12)
- ✅ Ensure CORS is not blocking the request
- ✅ Test widget URL directly in browser first

### Issue: API Endpoints Return 500

**Problem:** API calls fail with server errors

**Solutions:**
- ✅ Check `.env.local` has correct values
- ✅ Verify Supabase credentials
- ✅ Check OpenAI API key is valid
- ✅ Look at server logs in terminal

## 📊 URL Summary Table

### Quick Reference

| What to Test | Local URL | Production URL |
|--------------|-----------|----------------|
| Landing Page | `http://localhost:3000` | `https://your-app.vercel.app` |
| Login | `http://localhost:3000/auth/login` | `https://your-app.vercel.app/auth/login` |
| Dashboard | `http://localhost:3000/dashboard` | `https://your-app.vercel.app/dashboard` |
| Widget Loader | `http://localhost:3000/widget/loader.js` | `https://your-app.vercel.app/widget/loader.js` |
| API Agent | `http://localhost:3000/api/agent` | `https://your-app.vercel.app/api/agent` |
| Widget Demo | `file:///path/to/examples/widget-demo.html` | Same file, update script URL |

## 🎯 Next Steps

1. **Local Testing**: Start with `http://localhost:3000`
2. **Review Documentation**: Check [USAGE_GUIDE.md](./USAGE_GUIDE.md) for complete setup
3. **Deploy**: Follow [deployment instructions](./USAGE_GUIDE.md#deployment-to-production)
4. **Production**: Test your live Vercel URL
5. **Integrate**: Embed widget on your website

## 📞 Need Help?

- 📖 See [USAGE_GUIDE.md](./USAGE_GUIDE.md) for detailed instructions
- 🚀 Check [QUICKSTART.md](./QUICKSTART.md) for fast setup
- 🐛 Review [Troubleshooting section](./USAGE_GUIDE.md#troubleshooting)
- 💬 Open an issue on GitHub

---

**Last Updated**: February 6, 2026  
**Default Port**: 3000  
**Framework**: Next.js 16.1.6
