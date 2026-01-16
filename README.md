# Caticornnomaly - Streamer & Dev Website

A clean, extensible website for streamers and developers, similar to Destiny.gg. Features embedded live streams, chat integration, and a responsive navigation system.

## Features

- 🎥 **Stream Embedding**: Support for Twitch and YouTube live streams/videos
- 💬 **Chat Integration**: Embedded chat (Twitch chat or custom solution)
- 🧭 **Navigation Bar**: Clean navigation with smooth scrolling
- 📱 **Responsive Design**: Mobile-friendly with hamburger menu
- 🎨 **Modern UI**: Dark theme with smooth animations
- 🔧 **Extensible**: Easy to customize and add new sections

## Quick Start

### Option 1: Simple HTTP Server (No Dependencies)

```bash
# Using Python 3
python3 -m http.server 3000

# Using Python 2
python -m SimpleHTTPServer 3000

# Using PHP
php -S localhost:3000

# Using Node.js (if you have http-server installed globally)
npx http-server -p 3000
```

Then open your browser to `http://localhost:3000`

### Option 2: Using NPM

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The site will be available at `http://localhost:3000`

## Configuration

### Setting Up Your Stream

Edit `script.js` and update the configuration object:

```javascript
const config = {
    twitchChannel: 'your_twitch_username',     // Your Twitch username
    youtubeVideoId: 'your_youtube_video_id',    // Your YouTube video/stream ID
    twitchChatChannel: 'your_twitch_username',  // Twitch chat channel
    streamPlatform: 'twitch'                     // Options: 'twitch' or 'youtube'
};
```

### Important Notes for Embedding

#### Twitch
- You need to configure the `parent` parameter with your domain
- For local testing, use `localhost` or `127.0.0.1`
- For production, replace with your actual domain

#### YouTube
- Get your video ID from the YouTube URL (the part after `v=`)
- For live streams, use the live stream ID

### Customizing Navigation Links

Edit `index.html` to update the navigation links in the navbar:

```html
<ul class="nav-links">
    <li><a href="#stream">Stream</a></li>
    <li><a href="#chat">Chat</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="https://github.com/yourusername" target="_blank">GitHub</a></li>
</ul>
```

### Updating Content

#### About Section
Edit the `#about` section in `index.html` to add your bio.

#### Projects Section
Add your projects by editing the `#projects` section in `index.html`. Each project card follows this structure:

```html
<div class="project-card">
    <h3>Project Name</h3>
    <p>Project description</p>
    <a href="#" class="btn">View Project</a>
</div>
```

#### Footer Links
Update the social links in the footer:

```html
<div class="social-links">
    <a href="https://twitter.com/yourusername" target="_blank">Twitter</a>
    <a href="https://discord.gg/yourserver" target="_blank">Discord</a>
    <a href="https://github.com/yourusername" target="_blank">GitHub</a>
</div>
```

## File Structure

```
caticornnomaly-dev/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript functionality and configuration
├── package.json    # NPM configuration (optional)
└── README.md       # This file
```

## Customization

### Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6441a5;      /* Main brand color */
    --secondary-color: #9147ff;    /* Secondary brand color */
    --dark-bg: #0e0e10;            /* Main background */
    --darker-bg: #18181b;          /* Darker elements */
    --card-bg: #1f1f23;            /* Card backgrounds */
}
```

### Layout
The main content uses CSS Grid for layout. Adjust in `styles.css`:

```css
.main-content {
    grid-template-columns: 1fr 350px;  /* Stream | Chat */
}
```

## Features to Add

The codebase is designed to be easily extensible. Here are some ideas:

- [ ] Add a schedule/calendar section
- [ ] Integrate Discord widget
- [ ] Add VOD (Video on Demand) section
- [ ] Implement custom chat system with WebSocket
- [ ] Add stream alerts/notifications
- [ ] Create a blog section
- [ ] Add user authentication
- [ ] Implement dark/light theme toggle
- [ ] Add language switcher

## Deployment

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select your branch (usually `main`) and root directory
4. Save and wait for deployment

### Netlify/Vercel

1. Connect your GitHub repository
2. Deploy with default settings (no build command needed)

### Custom Server

Upload all files to your web server's public directory. No special server configuration required.

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## Troubleshooting

### Stream not loading?
- Check that you've updated the configuration in `script.js`
- For Twitch, ensure the `parent` parameter matches your domain
- For local testing, use `localhost` in the parent parameter

### Chat not showing?
- Same as above for the parent parameter
- Ensure your Twitch channel name is correct
- For YouTube, you may need to implement a custom chat solution

### Mobile menu not working?
- Ensure JavaScript is enabled
- Check browser console for errors

## License

MIT License - feel free to use and modify for your own projects!

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## Credits

Inspired by Destiny.gg's clean and functional design.