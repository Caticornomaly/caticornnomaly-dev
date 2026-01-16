# Quick Start Guide

Get your streamer website up and running in 5 minutes!

## Step 1: Configure Your Stream

Open `script.js` and update this section:

```javascript
const config = {
    twitchChannel: 'your_twitch_username',     // Your Twitch username
    youtubeVideoId: 'dQw4w9WgXcQ',              // Your YouTube video ID
    twitchChatChannel: 'your_twitch_username',  // Twitch chat channel
    streamPlatform: 'twitch'                     // 'twitch' or 'youtube'
};
```

## Step 2: Start the Server

Choose one method:

```bash
# Python 3 (recommended - no installation needed)
python3 -m http.server 3000

# OR Node.js
npm start

# OR PHP
php -S localhost:3000
```

## Step 3: Open Your Browser

Navigate to: `http://localhost:3000`

## Step 4: Test It Out

1. Click "Load Stream" to embed your stream
2. Click "Load Chat" to load the chat
3. Test navigation links
4. Test mobile view by resizing browser

## Step 5: Customize Content

### Update Your Information

Edit `index.html` to change:
- Navigation links (line 18-24)
- About section (line 66-68)
- Projects (line 75-95)
- Social links (line 107-111)

### Change Colors

Edit `styles.css` CSS variables (line 11-20):

```css
:root {
    --primary-color: #6441a5;      /* Change to your brand color */
    --secondary-color: #9147ff;    /* Gradient color */
}
```

## Common Issues

### Stream not loading?
- Check that you've updated the username in `script.js`
- For Twitch, ensure the `parent` parameter matches your domain
- For local testing, `localhost` should work

### Mobile menu not showing?
- Make sure JavaScript is enabled in your browser
- Check browser console for errors

## Deploy to Production

### GitHub Pages (Free & Automated)
1. Push to GitHub (main branch)
2. Go to Settings > Pages
3. Select **GitHub Actions** as source
4. The workflow will automatically deploy on every push
5. Site will be live at `https://yourusername.github.io/repo-name`

**Note**: Update `parent` parameter in `script.js` to use `yourusername.github.io` for Twitch embeds to work!

### Netlify (Free)
1. Connect your GitHub repo
2. Deploy with default settings
3. Done!

### Custom Domain
1. Upload all files to your web server
2. Update `parent` parameter in `script.js` to your domain
3. Point your domain to the server

## Next Steps

Check out the full README.md for:
- Advanced configuration
- Adding new features
- Troubleshooting
- Customization tips

Happy streaming! 🎮🎥
