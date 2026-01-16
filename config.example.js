// Example Configuration File
// Copy this to script.js and update with your details

const config = {
    // TWITCH CONFIGURATION
    // Replace with your Twitch username (e.g., 'ninja', 'shroud', etc.)
    twitchChannel: 'your_twitch_username',
    
    // For Twitch chat, usually the same as your channel name
    twitchChatChannel: 'your_twitch_username',
    
    // YOUTUBE CONFIGURATION
    // Get the video ID from your YouTube URL
    // Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ
    // The video ID is: dQw4w9WgXcQ
    youtubeVideoId: 'dQw4w9WgXcQ',
    
    // PLATFORM SELECTION
    // Choose which platform to use: 'twitch' or 'youtube'
    streamPlatform: 'twitch'  // Options: 'twitch', 'youtube'
};

// PRODUCTION DEPLOYMENT NOTES:
// 
// When deploying to a live domain, you MUST update the 'parent' parameter
// in the loadStream() and loadChat() functions to match your domain.
//
// Example:
// If your site is at https://mystreamer.com, change:
//   &parent=${window.location.hostname}
// to:
//   &parent=mystreamer.com
//
// For local development, 'localhost' works fine.

// HOW TO FIND YOUR TWITCH USERNAME:
// 1. Go to twitch.tv
// 2. Click on your profile
// 3. Your username is in the URL: twitch.tv/YOUR_USERNAME

// HOW TO FIND YOUR YOUTUBE VIDEO ID:
// 1. Go to your YouTube video
// 2. Look at the URL: youtube.com/watch?v=VIDEO_ID
// 3. Copy the VIDEO_ID part
// 
// For live streams, use the live stream URL's video ID

// TESTING YOUR CONFIGURATION:
// 1. Save your changes to script.js
// 2. Refresh the page
// 3. Click "Load Stream" and "Load Chat" buttons
// 4. If it doesn't work, check browser console for errors
