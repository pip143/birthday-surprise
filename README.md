<<<<<<< HEAD
# Birthday Surprise Website 🎂💝

A beautiful, interactive birthday website with smooth animations, floating tulips, and a special audio message.

## 📁 Project Structure

```
Bday/
├── index.html              # Main HTML file
├── css/                    # Stylesheets
│   ├── styles.css         # Base styles and components
│   └── animations.css     # All animation keyframes
├── js/                     # JavaScript modules
│   ├── main.js            # Main entry point
│   ├── config.js          # Configuration and messages
│   ├── ui.js              # UI state management
│   ├── audio.js           # Audio playback controls
│   └── effects.js         # Visual effects (particles, tulips, etc.)
├── images/                 # Image assets
│   └── bt.png             # Blue tulip image
├── bg/                     # Audio files
│   ├── happy-birthday-to-you-370804.mp3  # Background music
│   └── recording.mp3      # Special birthday message
└── README.md              # This file
```

## 🎨 Features

- **Animated gradient background** that shifts through beautiful colors
- **Glassmorphism UI** with blur effects and transparency
- **Floating particles** creating magical ambiance
- **Interactive journey** with 7 message steps
- **Progress indicator** showing journey progress
- **Falling tulip animations** triggered at specific moments
- **Smooth music transitions** between background and custom audio
- **Easter egg**: Double-click anywhere to create floating hearts! 💕
- **Fully responsive** design for all devices

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (ES6 Modules)** - Interactivity
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Dancing Script, Playfair Display, and Poppins

## 📦 Module Breakdown

### `css/styles.css`
Contains all base styles, component styles, and utility classes:
- Reset and base styles
- Progress indicator
- Glassmorphism card
- Button glow effect
- Smooth transitions

### `css/animations.css`
Contains all animation keyframes:
- Gradient shift animation
- Floating particles
- Falling tulips
- Card animations
- Text fade-in
- Pulse effects
- Heart beat animation

### `js/config.js`
Configuration file containing:
- All 7 journey messages
- Message structure (greeting, text, emoji)

### `js/effects.js`
Visual effects functions:
- `createParticles()` - Generate floating particles
- `createBlueTulip()` - Create falling tulip
- `addFloatingTulips(count)` - Add multiple tulips
- `animateText(element)` - Text animation trigger
- `initEasterEgg()` - Double-click heart effect

### `js/audio.js`
Audio management functions:
- `initAudio()` - Initialize audio elements
- `startBackgroundMusic()` - Start background track
- `fadeOutBackgroundMusic()` - Smooth fade out
- `fadeInBackgroundMusic()` - Smooth fade in
- `playCustomAudio()` - Play special message
- `resumeBackgroundMusic()` - Resume background track

### `js/ui.js`
UI state management:
- `initProgressDots()` - Initialize progress indicators
- `updateProgressDots()` - Update progress state
- `handleMainButtonClick()` - Main interaction handler
- `resetUI()` - Reset to initial state

### `js/main.js`
Application entry point:
- Imports all modules
- Sets up event listeners
- Initializes on page load

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended)
1. Push to GitHub repository
2. Go to Settings > Pages
3. Set source to main branch
4. Your site will be live at: `https://yourusername.github.io/repo-name/`

### Option 2: Netlify
1. Drag and drop the `Bday` folder to [Netlify](https://app.netlify.com/drop)
2. Get instant deployment with custom URL

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## 💝 Customization

### Change Messages
Edit `js/config.js` to modify the journey messages:
```javascript
const messages = [
    {
        greeting: "Your greeting",
        text: "Your message text",
        emoji: "🎂"
    },
    // Add more steps...
=======
# Birthday Surprise React App 🎂💝

A beautiful, interactive birthday website built with React, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Video Intro**: Plays a special video when the site first opens
- **Smooth Animations**: Framer Motion for buttery-smooth transitions
- **Floating Hearts**: Gentle heart animations that rise on screen
- **Sparkle Effects**: Soft sparkles in the background
- **Falling Tulips**: Beautiful tulip animations at key moments
- **Interactive Journey**: 7-step message progression
- **Audio Playback**: Background music and special birthday recording
- **Mobile-Friendly**: Fully responsive design
- **Glass Morphism**: Modern UI with blur effects

## 📦 Setup Instructions

### 1. Copy Assets

First, copy your media files to the public assets folder:

```bash
# Copy video
copy "..\video\oia.mp4" "public\assets\video\oia.mp4"

# Copy audio files
copy "..\bg\happy-birthday-to-you-370804.mp3" "public\assets\audio\happy-birthday-to-you-370804.mp3"
copy "..\bg\recording.mp3" "public\assets\audio\recording.mp3"

# Copy tulip image
copy "..\images\bt.png" "public\assets\images\bt.png"
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- Framer Motion 10.16.4
- React Scripts 5.0.1

### 3. Run Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎯 How It Works

1. **Video Intro**: When you first open the site, the video (`oia.mp4`) plays automatically
   - You can skip the video with the "Skip" button
   - After the video ends, the main birthday experience begins

2. **Main Experience**: 
   - Interactive journey with 7 heartfelt messages
   - Click "Next" to progress through messages
   - Tulips fall at special moments
   - Progress dots show your journey

3. **Special Audio**: 
   - At the final step, play the custom birthday recording
   - Background music fades out smoothly during playback

4. **Controls**:
   - "Start Over" - Restart the journey
   - "Replay Video" - Watch the intro video again

## 🎨 Customization

### Change Messages
Edit `src/components/MainContent.js` - the `messages` array:

```javascript
const messages = [
  {
    greeting: "Your greeting",
    text: "Your message",
    emoji: "🎂"
  },
  // Add more...
>>>>>>> origin/main
];
```

### Change Colors
<<<<<<< HEAD
Modify gradient colors in `css/animations.css`:
```css
.animated-bg {
    background: linear-gradient(-45deg, #yourcolor1, #yourcolor2, #yourcolor3, #yourcolor4);
}
```

### Change Animations
Adjust timing and effects in `css/animations.css` by modifying the keyframe values.

## 🎵 Audio Files
Make sure your audio files are in the correct format:
- **Background music**: `bg/happy-birthday-to-you-370804.mp3`
- **Special message**: `bg/recording.mp3`

Supported formats: MP3, WAV, OGG

## 📱 Browser Support
=======
Edit `src/index.css` - the gradient:

```css
.animated-gradient {
  background: linear-gradient(-45deg, #yourcolor1, #yourcolor2, #yourcolor3, #yourcolor4);
}
```

### Adjust Animations
Edit individual component files to change:
- Animation duration
- Delay timing
- Easing functions
- Motion properties

## 📱 Browser Support

>>>>>>> origin/main
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

<<<<<<< HEAD
## ✨ Tips
- For best experience, use headphones/speakers
- Allow audio autoplay when prompted
- Works best on modern browsers with ES6 module support

---

Made with 💕 for a special birthday surprise!
=======
## 🚀 Deployment

### Netlify (Recommended)
1. Run `npm run build`
2. Drag the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy:
npm run deploy
```

## 💝 Component Structure

```
App.js                    # Main app with video/content toggle
├── VideoIntro.js        # Video player with skip button
├── MainContent.js       # Main birthday experience
│   ├── MessageCard.js   # Card with message and controls
│   ├── ProgressDots.js  # Journey progress indicator
│   └── FallingTulips.js # Animated falling tulips
├── FloatingHearts.js    # Continuously floating hearts
└── Sparkles.js          # Background sparkle effect
```

## 🎵 Audio Files Required

Place these in `public/assets/audio/`:
- `happy-birthday-to-you-370804.mp3` - Background music
- `recording.mp3` - Your special birthday message

## 🎬 Video File Required

Place this in `public/assets/video/`:
- `oia.mp4` - Your intro video

## 🌸 Image File Required

Place this in `public/assets/images/`:
- `bt.png` - Blue tulip image for falling animation

---

Made with 💕 using React, Framer Motion, and Tailwind CSS
>>>>>>> origin/main
