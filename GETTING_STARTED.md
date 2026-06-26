# BlueLock Browser - Getting Started Guide

## 🚀 Quick Start

### Step 1: Clone the Repository
```bash
git clone https://github.com/danir-debug/bluelock-server.git
cd bluelock-server
```

### Step 2: Open in Browser
Simply open `index.html` in your favorite web browser:
- **Windows**: Double-click `index.html` or right-click → Open with → Browser
- **Mac**: Double-click `index.html` or open with your browser
- **Linux**: `xdg-open index.html` or open with your browser

### Step 3: Start Browsing!
1. Enter a URL in the address bar
2. Click "Go" or press Enter
3. Use the navigation buttons to browse history

## 📋 Features

- ✅ Full web navigation with URL input
- ✅ Back, Forward, Refresh, Home buttons
- ✅ Automatic browser history
- ✅ Clean, modern interface
- ✅ Error handling and status display
- ✅ Mobile responsive design

## 🎮 How to Use

### Address Bar
- Type any URL (with or without https://)
- Press Enter or click "Go"
- Examples: `google.com`, `wikipedia.org`, `example.com`

### Navigation Buttons
- **← Back**: Go to previous page
- **Forward →**: Go to next page
- **🔄 Refresh**: Reload current page
- **🏠 Home**: Return to example.com

## ⚠️ Known Limitations

Some websites may not load due to CORS (Cross-Origin Resource Sharing) restrictions. This is a browser security feature. Try:
- Different websites
- Sites like `httpbin.org`, `example.com`, `wikipedia.org` (results may vary)

## 🛠️ File Structure

```
bluelock-server/
├── index.html          # Main browser UI
├── styles.css          # Styling and layout
├── browser.js          # Browser functionality
├── package.json        # Project metadata
├── README.md           # Main documentation
└── GETTING_STARTED.md  # This file
```

## 🌐 Browser Compatibility

Works on:
- Chrome/Chromium (90+)
- Firefox (88+)
- Safari (14+)
- Edge (90+)
- Mobile browsers

## 💡 Tips & Tricks

1. **Add https:// automatically**: Just type the domain name, https:// is added automatically
2. **Quick refresh**: Click the Refresh button or press F5
3. **History navigation**: Use Back/Forward buttons or keyboard shortcuts
4. **Mobile friendly**: Works great on tablets and phones

## 🐛 Troubleshooting

### "Cannot Load Page" Error
- Check your internet connection
- Verify the URL is correct
- Try a different website
- Some sites block automated access

### Page looks broken
- Click Refresh
- Try a different browser
- Clear your browser cache

### JavaScript not working
- Iframe sandbox restrictions apply
- Some sites require additional permissions
- Try disabling ad blockers

## 🔐 Security & Privacy

- Pages load in sandboxed iframes
- Your data stays local (no logging)
- No tracking or analytics
- CORS protects against malicious scripts

## 📞 Support

For issues or suggestions:
1. Check the troubleshooting section
2. Try a different website
3. Open an issue on GitHub

## 🎉 Enjoy!

Have fun browsing with BlueLock Browser! 🌐✨