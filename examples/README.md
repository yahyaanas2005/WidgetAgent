# 📂 Examples

This directory contains example files to help you test and integrate the Isolate AI Widget.

## Files

### widget-demo.html

A standalone HTML demo page that shows how to integrate the AI widget on any website.

**To use:**

1. Deploy your application to Vercel (or another hosting platform)
2. Open `widget-demo.html` in your browser
3. Uncomment the widget script tag at the bottom and replace `your-domain.vercel.app` with your actual domain
4. Reload the page to see the widget in action

**Features demonstrated:**
- Widget integration via script tag
- Responsive design
- Visual instructions for users
- Clean, glassmorphism UI example

## Integration Instructions

### Basic Integration

Add this line before the closing `</body>` tag on your website:

```html
<script src="https://your-domain.vercel.app/widget/loader.js"></script>
```

### Custom Positioning

To change the widget position, add custom CSS:

```html
<style>
  isolate-widget {
    bottom: 20px !important;
    right: 20px !important;
  }
</style>
```

### Testing Locally

1. Start your development server: `npm run dev`
2. The widget will be available at: `http://localhost:3000/widget/loader.js`
3. Update the script src in your test HTML to use the local URL

## Need Help?

See the main [USAGE_GUIDE.md](../USAGE_GUIDE.md) for complete setup and deployment instructions.
