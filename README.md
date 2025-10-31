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
];
```

### Change Colors
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

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

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
