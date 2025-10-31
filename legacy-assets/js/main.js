// Main application entry point
import { createParticles, addFloatingTulips, initEasterEgg } from './effects.js';
import { initAudio, startBackgroundMusic, fadeOutBackgroundMusic, fadeInBackgroundMusic, playCustomAudio, resumeBackgroundMusic } from './audio.js';
import { initProgressDots, handleMainButtonClick, resetUI } from './ui.js';

// DOM elements
const mainGreeting = document.getElementById('mainGreeting');
const interactiveMessage = document.getElementById('interactiveMessage');
const mainActionButton = document.getElementById('mainActionButton');
const playCustomAudioButton = document.getElementById('playCustomAudioButton');
const resetButton = document.getElementById('resetButton');

// Main interaction handler
mainActionButton.addEventListener('click', () => {
    handleMainButtonClick(mainGreeting, interactiveMessage, mainActionButton, playCustomAudioButton, resetButton);
});

// Custom Audio Playback
playCustomAudioButton.addEventListener('click', async () => {
    playCustomAudioButton.classList.remove('pulse-animation');
    
    // Fade out background music
    await fadeOutBackgroundMusic();
    
    // Play custom audio
    const audio = await playCustomAudio();
    
    playCustomAudioButton.disabled = true;
    playCustomAudioButton.innerHTML = "🎵 Playing... 🎵";
    
    // Trigger special effects during audio
    addFloatingTulips(30);
    
    audio.onended = () => {
        playCustomAudioButton.disabled = false;
        playCustomAudioButton.innerHTML = "🎵 Listen again! 🎵";
        
        // Fade in background music
        fadeInBackgroundMusic();
    };
});

// Reset Button
resetButton.addEventListener('click', () => {
    resetUI(mainGreeting, interactiveMessage, mainActionButton, playCustomAudioButton, resetButton);
    resumeBackgroundMusic();
});

// Initialize on load
window.addEventListener('load', () => {
    initAudio();
    initProgressDots();
    createParticles();
    startBackgroundMusic();
    initEasterEgg();
});
