// Configuration - Update these with your actual stream and chat details
const config = {
    twitchChannel: 'caticornomaly', // Replace with your Twitch username
    youtubeStreamId: 'UCPVkpatwR6ukl_wxmXcAtVQ', // Replace with your YouTube video ID or live stream ID
    twitchChatChannel: 'caticornomaly', // Replace with your Twitch username for chat
    streamPlatform: 'twitch', // Options: 'twitch', 'youtube', or 'custom'
    youtubeVideoId: 'dQw4w9WgXcQ'
};
let lastSteamType = ""

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Load Stream Function
function loadStream(streamPlayerType="youtube") {
    if (lastSteamType==streamPlayerType)
        return
    
    const streamPlayer = document.getElementById('stream-player');
    let embedHtml = '';

    if (streamPlayerType === 'twitch') {
        embedHtml = `
            <iframe
                src="https://player.twitch.tv/?channel=${config.twitchChannel}&parent=${window.location.hostname}&muted=false"
                height="100%"
                width="100%"
                allowfullscreen>
            </iframe>
        `;
    } else if (streamPlayerType === 'youtube') {
        embedHtml = `
            <iframe
                src="https://www.youtube.com/embed/live_stream?autoplay=true&channel=${config.youtubeStreamId}"
                height="100%"
                width="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
    
    }
    else if (streamPlayerType === 'youtube-video') {
        embedHtml = `
            <iframe
                src=src="https://www.youtube.com/embed/${config.youtubeVideoId}?autoplay=1&mute=0"
                height="100%"
                width="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
    
    }

    streamPlayer.innerHTML = embedHtml;
}

// Load Chat Function
function loadChat() {
    const chatFrame = document.getElementById('chat-frame');
    let embedHtml = '';

    if (config.streamPlatform === 'twitch') {
        embedHtml = `
            <iframe
                src="https://www.twitch.tv/embed/${config.twitchChatChannel}/chat?parent=${window.location.hostname}&darkpopout"
                height="100%"
                width="100%">
            </iframe>
        `;
    } else {
        // For YouTube or custom chat, you can integrate a different chat solution
        embedHtml = `
            <div class="placeholder-chat">
                <p>Chat integration coming soon!</p>
                <p>Configure your chat in script.js</p>
            </div>
        `;
    }

    chatFrame.innerHTML = embedHtml;
}

// Toggle Chat Visibility (Mobile)
function toggleChat() {
    const chatSection = document.querySelector('.chat-section');
    chatSection.classList.toggle('hidden');
}

// Check if stream is live (optional feature)
async function checkStreamStatus() {
    // This would require Twitch API integration with OAuth
    // Placeholder for future implementation
    console.log('Stream status check - requires API integration');
}

// Auto-load stream and chat on page load (optional)
// Uncomment the lines below to auto-load on page load
window.addEventListener('load', () => {
    loadStream();
    loadChat();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'M' to toggle mute (when implemented)
    if (e.key === 'm' || e.key === 'M') {
        console.log('Mute toggle - implement based on your player');
    }
    
    // Press 'F' for fullscreen
    if (e.key === 'f' || e.key === 'F') {
        const streamPlayer = document.getElementById('stream-player');
        if (streamPlayer.requestFullscreen) {
            streamPlayer.requestFullscreen();
        }
    }
});

// Theme switcher (optional feature for future)
function toggleTheme() {
    // Placeholder for light/dark theme toggle
    document.body.classList.toggle('light-theme');
}

// Export functions for use in HTML
window.loadStream = loadStream;
window.loadChat = loadChat;
window.toggleChat = toggleChat;
window.toggleTheme = toggleTheme;
